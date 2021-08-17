import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Switch
} from 'ant-design-vue'
import { defineComponent, ref, watch } from 'vue'

import { propTypes } from '@/utils'

import type { FormItem, FormProps } from './types'

export default defineComponent({
  name: 'ProForm',
  props: {
    props: propTypes.object<FormProps>(),
    items: propTypes.array<FormItem>().def([])
  },
  setup(props) {
    const form = ref(null)
    const model = ref({})

    function init() {
      props.items.forEach(item => {
        if (item.name) {
          switch (item.type) {
            case 'select':
              Reflect.set(model, item.name, item.defaultValue || null)
              break
            default:
              Reflect.set(model, item.name, item.defaultValue || '')
              break
          }
        }
      })
    }

    watch(
      () => props.items,
      () => {
        init()
      },
      {
        immediate: true
      }
    )

    return {
      form,
      model
    }
  },
  render() {
    const renderComponent = (item: FormItem) => {
      if (item.render) return item.render(this.model)

      switch (item.type) {
        case 'input':
          return (
            <Input
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'input-password':
          return (
            <Input.Password
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'select':
          return (
            <Select
              v-model={[this.model[item.name!], 'value']}
              placeholder="请选择"
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Select.Option value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          )
        case 'date-picker':
          return (
            <DatePicker
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'switch':
          return (
            <Switch
              v-model={[this.model[item.name!], 'checked']}
              {...item.componentProps}
            />
          )
        case 'checkbox':
          return (
            <Checkbox.Group
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              ))}
            </Checkbox.Group>
          )
        case 'radio':
          return (
            <Radio.Group
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Radio value={option.value}>{option.label}</Radio>
              ))}
            </Radio.Group>
          )
        case 'textarea':
          return (
            <Input.TextArea
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        default:
          return null
      }
    }

    return (
      <Form ref="form" model={this.model} {...this.props}>
        {this.items.map(item => {
          return (
            <Form.Item
              label={item.label}
              name={item.name}
              rules={item.rules}
              {...item.props}
            >
              {renderComponent(item)}
            </Form.Item>
          )
        })}
      </Form>
    )
  }
})

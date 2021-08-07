import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Switch
} from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'

import { propTypes } from '@/utils'

import type { FormItem, FormProps } from './types'

export default defineComponent({
  name: 'FormPlus',
  props: {
    model: propTypes.object().def({}),
    options: propTypes.object<FormProps['options']>().def({
      props: {},
      items: []
    })
  },
  setup(props) {
    const form = ref(null)
    const formModel = reactive({})

    function initModel() {
      props.options.items.forEach(item => {
        if (item.name) {
          Reflect.set(formModel, item.name, props.model[item.name])
        }
      })
    }

    initModel()

    return {
      form,
      formModel
    }
  },
  render() {
    const renderComponent = (item: FormItem) => {
      if (item.render) return item.render(this.formModel)

      switch (item.type) {
        case 'input':
          return (
            <Input
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'input-password':
          return (
            <Input.Password
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'select':
          return (
            <Select
              v-model={[this.formModel[item.name!], 'value']}
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
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        case 'switch':
          return (
            <Switch
              v-model={[this.formModel[item.name!], 'checked']}
              {...item.componentProps}
            />
          )
        case 'checkbox':
          return (
            <Checkbox.Group
              v-model={[this.formModel[item.name!], 'value']}
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
              v-model={[this.formModel[item.name!], 'value']}
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
              v-model={[this.formModel[item.name!], 'value']}
              {...item.componentProps}
            />
          )
        default:
          return null
      }
    }

    return (
      <Form ref="form" model={this.formModel} {...this.options.props}>
        {this.options.items.map(item => {
          return (
            <Form.Item
              label={item.label}
              name={item.name}
              rules={item.rules}
              {...item.props}
            >
              {() => renderComponent(item)}
            </Form.Item>
          )
        })}
      </Form>
    )
  }
})

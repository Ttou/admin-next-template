import {
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputPassword,
  Radio,
  RadioGroup,
  Select,
  SelectOption,
  Switch,
  Textarea
} from 'ant-design-vue'
import { defineComponent, ref, watch } from 'vue'

import props from './props'
import type { Item } from './types'

export default defineComponent({
  name: 'ProForm',
  props,
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
    const renderComponent = (item: Item) => {
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
            <InputPassword
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
                <SelectOption value={option.value}>{option.label}</SelectOption>
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
            <CheckboxGroup
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              ))}
            </CheckboxGroup>
          )
        case 'radio':
          return (
            <RadioGroup
              v-model={[this.model[item.name!], 'value']}
              {...item.componentProps}
            >
              {item.options?.map(option => (
                <Radio value={option.value}>{option.label}</Radio>
              ))}
            </RadioGroup>
          )
        case 'textarea':
          return (
            <Textarea
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
            <FormItem
              label={item.label}
              name={item.name}
              rules={item.rules}
              {...item.props}
            >
              {renderComponent(item)}
            </FormItem>
          )
        })}
      </Form>
    )
  }
})

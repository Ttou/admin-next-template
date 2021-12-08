import type {
  FormProps as _FormProps,
  ValidationRule
} from 'ant-design-vue/lib/form/Form'
import type { FormItemProps } from 'ant-design-vue/lib/form/FormItem'
import type { NamePath } from 'ant-design-vue/lib/form/interface'
import type { CSSProperties, ExtractPropTypes } from 'vue'

import type props from './props'

type BaseProps = {
  class?: string
  id?: string
  style?: CSSProperties
}

type Rule = Omit<ValidationRule, 'message' | 'trigger' | 'type'> & {
  message?: string | JSX.Element
  trigger?: 'blur' | 'change' | ['change', 'blur']
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'array'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email'
    | 'any'
}

type Option = {
  label: string
  value: any
}

type FormItemType =
  | 'input'
  | 'input-password'
  | 'select'
  | 'date-picker'
  | 'switch'
  | 'checkbox'
  | 'radio'
  | 'textarea'

export type FormItem = {
  label?: string
  name?: string
  type?: FormItemType
  options?: Option[]
  rules?: Rule | Rule[]
  props?: Omit<FormItemProps, 'name' | 'label' | 'rules'>
  componentProps?: Record<string, any> & BaseProps
  defaultValue?: any
  render?: (model: Record<string, any>) => JSX.Element
}

export type FormProps = Omit<_FormProps, 'ref' | 'model' | 'rules'> & BaseProps

export type ProFormProps = ExtractPropTypes<typeof props>

export type FormInstance = {
  /** 触发表单验证, 同 validateFields */
  validate: (nameList?: NamePath[]) => Promise<void>
  /** 触发表单验证 */
  validateFields: (nameList?: NamePath[]) => Promise<void>
  /** 滚动到对应字段位置 */
  scrollToField: (name: NamePath, options: [ScrollOptions]) => void
  /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
  resetFields: () => void
  /** 移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果 */
  clearValidate: (name?: Array<string> | string) => void
}

export type FormRef = Nullable<{
  form: FormInstance
  model: Record<string, unknown>
}>

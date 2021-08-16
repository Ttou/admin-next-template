import type { FormItemProps } from 'ant-design-vue/lib/form/FormItem'
import type { NamePath } from 'ant-design-vue/lib/form/interface'
import type { TableProps } from 'ant-design-vue/lib/table/interface'

type Option = {
  label: string
  value: any
}

type FormItemType =
  | 'input'
  | 'select'
  | 'date-picker'
  | 'switch'
  | 'checkbox'
  | 'radio'

type RequestReq = {
  current: number
  pageSize: number
  [x: string]: any
}

type RequestRes = {
  content: any[]
  current: number
  size: number
  total: number
}

export type FormItem = {
  label?: string
  name?: string
  type?: FormItemType
  options?: Option[]
  props?: Omit<FormItemProps, 'name' | 'label' | 'rules'>
  componentProps?: Record<string, any>
  defaultValue?: any
  defaultHidden?: boolean
  render?: (model: Record<string, any>) => JSX.Element
}

export type FormRef = {
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

export type ProTableProps = {
  autoLoad?: boolean
  request: (params: RequestReq) => Promise<RequestRes>
  formItems?: FormItem[]
  tableColumns: TableProps['columns'][]
}

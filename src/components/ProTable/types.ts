import type { FormItemProps } from 'ant-design-vue/lib/form/FormItem'
import type { NamePath } from 'ant-design-vue/lib/form/interface'
import type { TableProps } from 'ant-design-vue/lib/table/interface'
import type { ExtractPropTypes, Slot } from 'vue'

import type props from './props'

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

export type TableSize = TableProps['size']

export type TableSizeOption = {
  label: string
  value: TableSize
}

export type TablePagination = TableProps['pagination']

export type TableRequest = (params: RequestReq) => Promise<RequestRes>

export type Slots = {
  /** 左侧按钮 */
  btns?: (...args: any[]) => Slot | JSX.Element
  /** 右侧工具 */
  tools?: (...args: any[]) => Slot | JSX.Element
}

export type TableRowKeyFunc = (record: any) => string

export type TableRowKey = string | TableRowKeyFunc

export type TableColumn = TableProps['columns']

export type ProTableProps = ExtractPropTypes<typeof props>

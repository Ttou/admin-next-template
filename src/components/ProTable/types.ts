import { type ExtractPropTypes } from 'vue'
import { type VxeGridInstance, type VxeGridProps } from 'vxe-table'

import type props from './props'

export type UpdateFormItemOptions = {
  /** 表单项名称 */
  field: string
  /**
   * 键名
   * @description 支持使用 `.` 分隔
   */
  key: string
  /** 键值 */
  value: any
}

export type ProTableProps = ExtractPropTypes<typeof props>

export type ProTableRef = {
  /** 配置数据 */
  config: VxeGridProps
  /** 表格实例 */
  table: VxeGridInstance
  /** 更新表单项 */
  updateFormItem: (options: UpdateFormItemOptions) => void
  /** 显示加载动画 */
  showLoading: () => void
  /** 隐藏加载动画 */
  hideLoading: () => void
  /** 刷新列表 */
  refresh: (callback?: PromiseFunc) => Promise<void>
}

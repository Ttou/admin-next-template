import type { ExtractPropTypes, PropType } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

export const proTableProps = () => ({
  fixedHeight: { type: [Boolean, Number], default: false },
  options: {
    type: Object as PropType<VxeGridProps>,
    required: true
  }
})

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

export type ProTableProps = Partial<
  ExtractPropTypes<ReturnType<typeof proTableProps>>
>

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

export default proTableProps

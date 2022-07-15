import type { PropType } from 'vue'
import type {
  VxeGridEventProps,
  VxeGridInstance,
  VxeGridProps
} from 'vxe-table'

type Options = VxeGridProps & VxeGridEventProps

export const proTableProps = () => ({
  fixedHeight: { type: [Boolean, Number], default: false },
  fixedInContent: { type: Boolean, default: true },
  options: {
    type: Object as PropType<Options>,
    default: () => ({} as Options),
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

export type ProTableProps = ComponentProps<typeof proTableProps>

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

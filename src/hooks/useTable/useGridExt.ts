import { set } from 'lodash-unified'
import { type Ref, ref } from 'vue'
import type {
  VxeGridEventProps,
  VxeGridInstance,
  VxeGridProps
} from 'vxe-table'

export type GridExtHook = ReturnType<typeof useGridExt>
export type GridExtOptions<T = any> = VxeGridProps<T> & VxeGridEventProps

interface FormItemOption {
  /**
   * 表单项名称
   */
  field: string
  /**
   * 键名
   * @description 支持使用 `.` 分隔
   */
  key: string
  /**
   * 键值
   */
  value: any
}

/**
 * 使用表格扩展
 * @param options 高级表格选项
 */
export function useGridExt(options: Ref<GridExtOptions>) {
  const gridRef = ref<VxeGridInstance>()

  function updateFormItem(option: FormItemOption) {
    const item = options.value.formConfig?.items?.find(
      v => v.field === option.field
    )

    set(item!, option.key, option.value)
  }

  function showLoading() {
    options.value.loading = true
  }

  function hideLoading() {
    options.value.loading = false
  }

  async function refresh(callback?: PromiseFunc) {
    try {
      showLoading()
      await callback?.()
      await gridRef.value?.commitProxy('query')
    } finally {
      hideLoading()
    }
  }

  return {
    gridRef,
    updateFormItem,
    showLoading,
    hideLoading,
    refresh
  }
}

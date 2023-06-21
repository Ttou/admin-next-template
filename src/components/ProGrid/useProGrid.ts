import { set } from 'lodash-unified'
import { type Ref, ref } from 'vue'
import type {
  VxeGridEventProps,
  VxeGridInstance,
  VxeGridProps
} from 'vxe-table'

export type ProGridHook = ReturnType<typeof useProGrid>
export type ProGridOptions<T = any> = VxeGridProps<T> & VxeGridEventProps

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
 * 使用高级表格
 * @param gridOptions 高级表格选项
 */
export function useProGrid(gridOptions: Ref<ProGridOptions>) {
  const gridRef = ref<VxeGridInstance>()

  function updateFormItem(option: FormItemOption) {
    const item = gridOptions.value.formConfig?.items?.find(
      v => v.field === option.field
    )

    set(item!, option.key, option.value)
  }

  function showLoading() {
    gridOptions.value.loading = true
  }

  function hideLoading() {
    gridOptions.value.loading = false
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

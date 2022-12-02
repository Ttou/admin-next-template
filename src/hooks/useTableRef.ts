import { set } from 'lodash-unified'
import { type Ref, ref } from 'vue'
import type {
  VxeGridEventProps,
  VxeGridInstance,
  VxeGridProps
} from 'vxe-table'

export type TableOptions<T = any> = VxeGridProps<T> & VxeGridEventProps

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

export function useTableRef(tableOptions: Ref<TableOptions>) {
  const tableRef = ref({} as VxeGridInstance)

  function updateFormItem(option: FormItemOption) {
    const item = tableOptions.value!.formConfig!.items!.find(
      v => v.field === option.field
    )

    set(item!, option.key, option.value)
  }

  function showLoading() {
    tableOptions.value!.loading = true
  }

  function hideLoading() {
    tableOptions.value!.loading = false
  }

  async function refresh(callback?: PromiseFunc) {
    try {
      showLoading()
      await callback?.()
      await tableRef.value.commitProxy('query')
    } finally {
      hideLoading()
    }
  }

  return {
    tableRef,
    updateFormItem,
    showLoading,
    hideLoading,
    refresh
  }
}

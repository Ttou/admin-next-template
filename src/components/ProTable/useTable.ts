import { ref } from 'vue'

import type { TablePagination } from './types'

export default function ({ load }: { load: Func }) {
  const tableData = ref([] as any[])
  const tablePagination = ref({
    showQuickJumper: true,
    showSizeChanger: true,
    size: 'small',
    pageSizeOptions: ['10', '15', '30', '50'],
    onChange: handleCurrentChange,
    onShowSizeChange: handleSizeChange
  } as TablePagination)
  const tableCurrent = ref(1)
  const tablePageSize = ref(15)

  function handleCurrentChange(current: number, size: number) {
    tableCurrent.value = current
    load()
  }

  function handleSizeChange(current: number, size: number) {
    tableCurrent.value = 1
    tablePageSize.value = size
    load()
  }

  return {
    tableData,
    tablePagination,
    tableCurrent,
    tablePageSize
  }
}

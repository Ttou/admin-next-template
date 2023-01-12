import { type TableRefHook } from '@/hooks'

interface Params {
  tableRefHook: TableRefHook
}

export function useTableToolbar({ tableRefHook }: Params) {
  function handleCustomRefresh() {
    tableRefHook.refresh()
  }

  return {
    handleCustomRefresh
  }
}

import { type GridExtHook } from '@/hooks'

interface Params {
  gridExtHook: GridExtHook
}

export function useGridToolbar({ gridExtHook }: Params) {
  function handleCustomRefresh() {
    gridExtHook.refresh()
  }

  return {
    handleCustomRefresh
  }
}

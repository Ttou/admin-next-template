import { type ProGridHook } from '@/components'

interface Params {
  proGridHook: ProGridHook
}

export function useGridToolbar({ proGridHook }: Params) {
  function handleCustomRefresh() {
    proGridHook.refresh()
  }

  return {
    handleCustomRefresh
  }
}

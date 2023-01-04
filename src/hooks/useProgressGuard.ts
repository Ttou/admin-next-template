import { useNProgress } from '@vueuse/integrations/useNProgress'
import type { Router } from 'vue-router'

export function useProgressGuard(router: Router) {
  const { isLoading, start, done } = useNProgress(0, { showSpinner: false })

  router.beforeEach(() => {
    if (!isLoading.value) {
      start()
    }

    return true
  })

  router.afterEach(() => {
    // 加上页面过渡动画时间
    if (isLoading.value) {
      done()
    }
  })
}

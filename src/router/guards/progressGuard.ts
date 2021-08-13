import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import type { Router } from 'vue-router'

export default function (router: Router) {
  NProgress.configure({
    showSpinner: false
  })

  router.beforeEach(() => {
    if (!NProgress.isStarted()) {
      NProgress.start()
    }

    return true
  })

  router.afterEach(() => {
    // 加上页面过渡动画时间
    if (NProgress.isStarted()) {
      NProgress.done()
    }
  })
}

import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

import router, { addRoutes } from '@/router'
import store, { Actions } from '@/store'

const whiteList = ['/login']

NProgress.configure({
  showSpinner: false
})

router.beforeResolve((to, from) => {
  console.log('router beforeResolve')
})

router.beforeEach(async (to, from) => {
  console.log('router beforeEach')

  NProgress.start()

  const hasToken = store.state.user.token

  if (hasToken) {
    if (to.path === '/login') {
      NProgress.done()
      return '/'
    } else {
      const hasUser = store.state.user.name

      if (hasUser) {
        return true
      } else {
        const roles = await store.dispatch(Actions.user.getInfo)
        const routes = await store.dispatch(
          Actions.permission.generateRoutes,
          roles
        )
        addRoutes(routes)
        return to.fullPath
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      return true
    } else {
      return `/login?redirect=${to.path}`
    }
  }
})

router.afterEach((to, from) => {
  // 加上页面过渡动画时间
  setTimeout(() => {
    NProgress.done()
  }, 300)
})

import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

import router, { addRoutes } from '@/router'
import store, { Actions } from '@/store'

const whiteList = ['/login']

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const hasToken = store.state.user.token

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasUser = store.state.user.name

      if (hasUser) {
        next()
      } else {
        const roles = await store.dispatch(Actions.user.getInfo)
        const routes = await store.dispatch(
          Actions.permission.generateRoutes,
          roles
        )
        addRoutes(routes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to, from) => {
  // 加上页面过渡动画时间
  setTimeout(() => {
    NProgress.done()
  }, 300)
})

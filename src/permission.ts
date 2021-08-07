import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

import router from '@/router'
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
        await store.dispatch(Actions.user.getInfo)
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
  NProgress.done()
})

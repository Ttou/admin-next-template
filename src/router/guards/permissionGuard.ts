import type { Router } from 'vue-router'

import { ROUTE_ENUM } from '@/enums'
import store, { Actions } from '@/store'

export default function (router: Router) {
  const whiteList = [ROUTE_ENUM.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const hasToken = store.state.user.token

    if (hasToken) {
      if (to.path === ROUTE_ENUM.LOGIN) {
        return ROUTE_ENUM.INDEX
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

          routes.forEach(route => {
            router.addRoute(route)
          })

          return to.fullPath
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        return true
      } else {
        return `${ROUTE_ENUM.LOGIN}?redirect=${to.path}`
      }
    }
  })
}

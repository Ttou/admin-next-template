import type { Router } from 'vue-router'

import { ROUTE_ENUM } from '@/constants'
import { usePermissionStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [ROUTE_ENUM.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()

    const hasToken = userStore.token

    if (hasToken) {
      if (to.path === ROUTE_ENUM.LOGIN) {
        return ROUTE_ENUM.INDEX
      } else {
        const hasUser = userStore.name

        if (hasUser) {
          return true
        } else {
          const roles = await userStore.getInfo()
          const routes = await permissionStore.generate(roles)

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

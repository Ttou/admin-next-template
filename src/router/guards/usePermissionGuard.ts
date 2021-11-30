import type { Router } from 'vue-router'

import { ROUTE } from '@/constants'
import { usePermissionStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [ROUTE.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()

    const hasToken = userStore.token

    if (hasToken) {
      if (to.path === ROUTE.LOGIN) {
        return ROUTE.INDEX
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
        return `${ROUTE.LOGIN}?redirect=${to.path}`
      }
    }
  })
}

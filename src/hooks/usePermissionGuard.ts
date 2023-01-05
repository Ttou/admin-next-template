import type { RouteLocationNormalized, Router } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { usePermissionStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [CONST_ROUTES.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()

    useKeepAliveFix(to, permissionStore)

    const hasToken = userStore.token

    if (hasToken) {
      if (to.path === CONST_ROUTES.LOGIN) {
        return CONST_ROUTES.INDEX
      } else {
        const hasUser = userStore.name

        if (hasUser) {
          return true
        } else {
          try {
            const roles = await userStore.getInfo()
            const routes = await permissionStore.generate(roles)

            routes.forEach(route => {
              router.addRoute(route)
            })

            return to.fullPath
          } catch {}
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        return true
      } else {
        return `${CONST_ROUTES.LOGIN}?redirect=${to.path}`
      }
    }
  })
}

function useKeepAliveFix(
  to: RouteLocationNormalized,
  store: ReturnType<typeof usePermissionStore>
) {
  store.matched = to.matched.map(v => v.path)
}

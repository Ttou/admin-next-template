import type { RouteLocationNormalized, Router } from 'vue-router'

import { ROUTE } from '@/constants'
import { usePermissionStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [ROUTE.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()

    useKeepAliveFix(to, permissionStore)

    const hasToken = userStore.token

    if (hasToken) {
      if (to.path === ROUTE.LOGIN) {
        return ROUTE.INDEX
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
          } catch {
            return ROUTE.INDEX
          }
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

function useKeepAliveFix(
  to: RouteLocationNormalized,
  store: ReturnType<typeof usePermissionStore>
) {
  store.matched = to.matched.map(v => v.path)

  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const v = to.matched[i]

      if (v.components.default.name === 'ParentLayout') {
        to.matched.splice(i, 1)
      }
    }
  }
}

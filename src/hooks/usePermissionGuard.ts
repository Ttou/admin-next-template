import type { Router } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { constRoutesLength } from '@/router'
import { usePermissionStore, useSettingStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [CONST_ROUTES.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    const settingStore = useSettingStore()

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
            const menus = await userStore.getInfo()
            const routes = await permissionStore.generate(menus)

            // 说明还没添加过异步路由
            if (router.getRoutes().length <= constRoutesLength) {
              routes.forEach(route => {
                router.addRoute(route)
              })
            }

            // 异步路由为空时
            if (routes.length <= 1) {
              return `${CONST_ROUTES.ERROR}?status=404`
            } else {
              settingStore.change({
                key: 'homeRoute',
                value: {
                  name: routes[0].name,
                  path: routes[0].path
                }
              })

              return to.fullPath
            }
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

import { ElNotification } from 'element-plus'
import type { Router } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { usePermissionStore, useSettingStore, useUserStore } from '@/store'

export function usePermissionGuard(router: Router) {
  const whiteList = [CONST_ROUTES.LOGIN] as string[]

  router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    const settingStore = useSettingStore()

    const { token, infoRequested, clear } = userStore

    if (token) {
      if (to.path === CONST_ROUTES.LOGIN) {
        return CONST_ROUTES.INDEX
      } else {
        if (infoRequested) {
          return true
        } else {
          try {
            const menus = await userStore.getInfo()
            const routes = await permissionStore.generate(menus)

            // 异步路由为空时
            if (routes.length <= 1) {
              clear()
              ElNotification.error({
                title: '提示',
                message: '当前用户没有菜单，请配置后再登录！',
                duration: 3000,
                onClose() {
                  location.reload()
                }
              })
            } else {
              routes.forEach(route => {
                router.addRoute(route)
              })

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
      clear()

      if (whiteList.includes(to.path)) {
        return true
      } else {
        return `${CONST_ROUTES.LOGIN}?redirect=${to.path}`
      }
    }
  })
}

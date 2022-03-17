import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

import { ROUTE } from '@/constants'
import { asyncRoutes, constRoutes } from '@/router'

function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => (route.meta!.roles as string[]).includes(role))
  } else {
    return true
  }
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const res = [] as RouteRecordRaw[]

  routes.forEach(route => {
    const temp = { ...route }

    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles)
      }
      res.push(temp)
    }
  })

  res.sort((a, b) => {
    return ((a.meta!.sort as number) || 0) - ((b.meta!.sort as number) || 0)
  })

  return res
}

export function usePermissionStore() {
  return defineStore('permission', {
    state: () => {
      return {
        routes: [] as RouteRecordRaw[],
        matched: [] as string[]
      }
    },
    actions: {
      generate(roles: string[]): Promise<RouteRecordRaw[]> {
        return new Promise(resolve => {
          let accessedRoutes: RouteRecordRaw[]

          // eslint-disable-next-line prefer-const
          accessedRoutes = filterAsyncRoutes(
            asyncRoutes as RouteRecordRaw[],
            roles
          )

          accessedRoutes.push({
            path: '/:pathMatch(.*)*',
            redirect: {
              path: ROUTE.ERROR,
              query: { status: 404 }
            }
          })

          this.routes = constRoutes.concat(accessedRoutes)
          resolve(accessedRoutes)
        })
      }
    }
  })()
}

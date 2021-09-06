import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_ENUM } from '@/enums'
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

  return res
}

export default defineStore('PermissionStore', {
  state: () => {
    return {
      routes: [] as RouteRecordRaw[]
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
            path: ROUTE_ENUM.ERROR,
            query: { status: 404 }
          }
        })

        this.routes = constRoutes.concat(accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})

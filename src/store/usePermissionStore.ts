import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { asyncRoutes, constRoutes } from '@/router'

import store from '.'

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

export const usePermissionStore = defineStore('permission', () => {
  const state = reactive({
    routes: [] as RouteRecordRaw[],
    matched: [] as string[]
  })

  function generate(roles: string[]): Promise<RouteRecordRaw[]> {
    return new Promise(resolve => {
      const accessedRoutes: RouteRecordRaw[] = filterAsyncRoutes(
        asyncRoutes as RouteRecordRaw[],
        roles
      )

      accessedRoutes.push({
        path: '/:pathMatch(.*)*',
        redirect: {
          path: CONST_ROUTES.ERROR,
          query: { status: 404 }
        }
      })

      state.routes = constRoutes.concat(accessedRoutes)
      resolve(accessedRoutes)
    })
  }

  return {
    ...toRefs(state),
    generate
  }
})

export function usePermissionStoreHook() {
  return usePermissionStore(store)
}

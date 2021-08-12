import type { RouteRecordRaw } from 'vue-router'
import type { Module } from 'vuex'

import { asyncRoutes, constRoutes } from '@/router'

import { PermissionModule } from '../constants'
import type { State } from '../types'

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

export const Name = PermissionModule.name

export default {
  namespaced: true,
  state: {
    routes: []
  },
  actions: {
    [PermissionModule.actions.generateRoutes]({ commit }, roles) {
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
            name: 'Error',
            query: { status: 404 }
          }
        })

        commit(PermissionModule.mutations.SET_ROUTES, accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  },
  mutations: {
    [PermissionModule.mutations.SET_ROUTES](state, routes) {
      state.routes = constRoutes.concat(routes)
    }
  }
} as Module<State['permission'], any>

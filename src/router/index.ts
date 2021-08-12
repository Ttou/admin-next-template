import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import asyncRoutes from './asyncRoutes'
import constRoutes from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export function addRoutes(routes: RouteRecordRaw[]) {
  routes.forEach(route => {
    router.addRoute('', route)
  })
}

export { asyncRoutes, constRoutes }

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

import asyncRoutes from './asyncRoutes'
import constRoutes from './constRoutes'
import guards from './guards'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export { asyncRoutes, constRoutes, guards as setupGuards }

export default router

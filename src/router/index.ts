import { createRouter, createWebHashHistory } from 'vue-router'

import asyncRoutes from './asyncRoutes'
import constRoutes from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export { asyncRoutes, constRoutes }

export default router

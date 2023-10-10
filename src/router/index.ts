import { createRouter, createWebHashHistory } from 'vue-router'

import { constRoutes } from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export const resetRouter = () => {
  const whiteList = constRoutes.map(v => v.name)

  router.getRoutes().forEach(route => {
    const { name } = route
    if (name && !whiteList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export * from './constRoutes'
export default router

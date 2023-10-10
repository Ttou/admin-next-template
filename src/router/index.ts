import { createRouter, createWebHashHistory } from 'vue-router'

import { treeToList } from '@/utils'

import { constRoutes } from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export const resetRouter = () => {
  const whiteList = treeToList(constRoutes)
    .filter(v => v.name)
    .map(v => v.name)

  router.getRoutes().forEach(route => {
    const { name } = route

    if (name && !whiteList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export * from './constRoutes'
export default router

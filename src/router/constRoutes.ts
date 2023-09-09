import { cloneDeep } from 'lodash-unified'
import type { RouteRecordRaw } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { DefaultLayout } from '@/layout'
import { treeToList } from '@/utils'

export const constRoutes = [
  {
    path: CONST_ROUTES.INDEX,
    name: 'IndexView',
    component: () => import('@/views/sys/index/index.vue'),
    meta: { title: '首页', hidden: true }
  },
  {
    path: CONST_ROUTES.LOGIN,
    name: 'Login',
    component: () => import('@/views/sys/login/index.vue'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: CONST_ROUTES.ERROR,
    name: 'Error',
    component: () => import('@/views/sys/error/index.vue'),
    meta: { title: '错误', hidden: true }
  },
  {
    path: CONST_ROUTES.REDIRECT,
    name: 'Redirect',
    component: DefaultLayout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/sys/redirect/index.vue')
      }
    ]
  }
] as RouteRecordRaw[]

export const constRoutesLength = treeToList(cloneDeep(constRoutes)).length

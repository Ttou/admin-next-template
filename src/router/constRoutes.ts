import type { RouteRecordRaw } from 'vue-router'

import { ROUTE } from '@/constants'

export default [
  {
    path: ROUTE.INDEX,
    redirect: '/dashboard',
    component: () => import('@/layout'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '仪表盘', icon: 'menu-dashboard' }
      }
    ]
  },
  {
    path: ROUTE.LOGIN,
    name: 'Login',
    component: () => import('@/views/sys/login'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: ROUTE.ERROR,
    name: 'Error',
    component: () => import('@/views/sys/error'),
    meta: { title: '错误', hidden: true }
  },
  {
    path: ROUTE.REDIRECT,
    name: 'Redirect',
    component: () => import('@/layout'),
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/sys/redirect')
      }
    ]
  }
] as RouteRecordRaw[]

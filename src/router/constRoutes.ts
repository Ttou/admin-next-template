import type { RouteRecordRaw } from 'vue-router'

import { ROUTE } from '@/constants'

export default [
  {
    path: ROUTE.INDEX,
    redirect: '/dashboard'
  },
  {
    path: ROUTE.DASHBOARD,
    redirect: `${ROUTE.DASHBOARD}/analysis`,
    component: () => import('@/layout'),
    meta: { title: 'Dashboard', icon: 'menu-dashboard' },
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/analysis'),
        meta: { title: '分析页' }
      },
      {
        path: 'workbench',
        name: 'Workbench',
        component: () => import('@/views/dashboard/workbench'),
        meta: { title: '工作台' }
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

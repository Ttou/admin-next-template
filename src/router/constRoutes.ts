import type { RouteRecordRaw } from 'vue-router'

import { CONST_ROUTES, SETTING } from '@/constants'
import { DefaultLayout } from '@/layout'

export default [
  {
    path: CONST_ROUTES.INDEX,
    redirect: SETTING.homeRoute.path
  },
  {
    path: CONST_ROUTES.DASHBOARD,
    redirect: `${CONST_ROUTES.DASHBOARD}/analysis`,
    component: DefaultLayout,
    meta: { title: 'Dashboard', icon: 'ant-design:dashboard-outlined' },
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
    path: CONST_ROUTES.LOGIN,
    name: 'Login',
    component: () => import('@/views/sys/login'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: CONST_ROUTES.ERROR,
    name: 'Error',
    component: () => import('@/views/sys/error'),
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
        component: () => import('@/views/sys/redirect')
      }
    ]
  }
] as RouteRecordRaw[]

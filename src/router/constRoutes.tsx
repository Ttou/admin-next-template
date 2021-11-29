import { DashboardOutlined } from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_ENUM } from '@/constants'

export default [
  {
    path: ROUTE_ENUM.INDEX,
    redirect: '/dashboard',
    component: () => import('@/layout'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard', icon: <DashboardOutlined /> }
      }
    ]
  },
  {
    path: ROUTE_ENUM.LOGIN,
    name: 'Login',
    component: () => import('@/views/sys/login'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: ROUTE_ENUM.ERROR,
    name: 'Error',
    component: () => import('@/views/sys/error'),
    meta: { title: '错误', hidden: true }
  },
  {
    path: '/redirect',
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

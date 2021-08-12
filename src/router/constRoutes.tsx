import { DashboardOutlined } from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'

import { ProLayout } from '@/components'

export default [
  {
    path: '/',
    redirect: '/dashboard',
    component: ProLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: <DashboardOutlined /> }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/sys/login/index'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/sys/error'),
    meta: { title: '错误', hidden: true }
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: ProLayout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/sys/redirect')
      }
    ]
  }
] as RouteRecordRaw[]

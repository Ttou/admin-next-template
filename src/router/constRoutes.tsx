import {
  AlignLeftOutlined,
  DashboardOutlined,
  ProjectOutlined
} from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout'

export default [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
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
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    meta: { title: 'Nested', icon: <AlignLeftOutlined /> },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: () => import('@/views/nested/menu1/index'),
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index'),
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index'),
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1/index'),
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2/index'),
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index'),
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'Menu2' }
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    redirect: '/demo/form',
    meta: {
      title: '组件演示',
      icon: <ProjectOutlined />,
      permission: ['admin']
    },
    children: [
      {
        path: 'form',
        name: 'DemoForm',
        component: () => import('@/views/demo/form'),
        meta: { title: '自定义表单' }
      },
      {
        path: 'qrcode',
        name: 'DemoQRCode',
        component: () => import('@/views/demo/qrcode'),
        meta: { title: '二维码' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录', hidden: true }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/error'),
    meta: { title: '错误', hidden: true }
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Error',
      query: { status: 404 }
    }
  }
] as RouteRecordRaw[]

import { AlignLeftOutlined } from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/nested',
  component: () => import('@/layout'),
  redirect: '/nested/menu1',
  meta: { title: '嵌套路由', icon: <AlignLeftOutlined /> },
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: () => import('@/views/nested/menu1'),
      meta: { title: 'Menu1' },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          meta: { title: 'Menu1-1' }
        },
        {
          path: 'menu1-2',
          name: 'Menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              name: 'Menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              meta: { title: 'Menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              name: 'Menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              meta: { title: 'Menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          name: 'Menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          meta: { title: 'Menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2'),
      meta: { title: 'Menu2' }
    }
  ]
} as RouteRecordRaw

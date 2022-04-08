import { DefaultLayout } from '@/layout'
import { Route } from '@/layout/components/Menu/types'

export default {
  path: '/demo',
  name: 'Demo',
  component: DefaultLayout,
  redirect: '/demo/copy-text',
  meta: {
    title: '组件演示',
    icon: 'menu-demo',
    roles: ['admin']
  },
  children: [
    {
      path: 'copy-text',
      name: 'DemoCopyText',
      component: () => import('@/views/demo/copy-text'),
      meta: { title: '复制文本' }
    },
    {
      path: 'editor',
      name: 'DemoEditor',
      component: () => import('@/views/demo/editor'),
      meta: { title: '富文本编辑' }
    },
    {
      path: 'form',
      name: 'DemoForm',
      component: () => import('@/views/demo/form'),
      meta: { title: '自定义表单' }
    },
    {
      path: 'plot',
      name: 'DemoPlot',
      component: () => import('@/views/demo/plot'),
      meta: { title: '可视化图表' }
    },
    {
      path: 'qrcode',
      name: 'DemoQRCode',
      component: () => import('@/views/demo/qrcode'),
      meta: { title: '高级二维码' }
    },
    {
      path: 'table',
      name: 'DemoTable',
      component: () => import('@/views/demo/table'),
      meta: { title: '高级表格' }
    },
    {
      path: 'video',
      name: 'DemoVideo',
      component: () => import('@/views/demo/video'),
      meta: { title: '视频播放' }
    }
  ]
} as Route

import { ProjectOutlined } from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo',
  name: 'Demo',
  component: () => import('@/layout'),
  redirect: '/demo/form',
  meta: {
    title: '组件演示',
    icon: <ProjectOutlined />,
    roles: ['admin']
  },
  children: [
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
      meta: { title: '自定义表格' }
    }
  ]
} as RouteRecordRaw

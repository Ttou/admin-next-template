import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/login',
    method: 'post',
    timeout: 2000,
    response: () => ({
      token: '9edd480fa96ba91f0cc3d313e98df3af'
    })
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => null
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => ({
      name: '管理员',
      menus: [
        {
          path: '/demo',
          name: 'Demo',
          component: 'DefaultLayout',
          redirect: '/demo/copy-text',
          meta: { title: '组件演示', icon: 'ant-design:database-outlined' },
          children: [
            {
              path: 'copy-text',
              name: 'DemoCopyText',
              component: 'demo/copy-text',
              meta: { title: '复制文本' }
            },
            {
              path: 'editor',
              name: 'DemoEditor',
              component: 'demo/editor',
              meta: { title: '富文本编辑' }
            },
            {
              path: 'form',
              name: 'DemoForm',
              component: 'demo/form',
              meta: { title: '自定义表单' }
            },
            {
              path: 'plot',
              name: 'DemoPlot',
              component: 'demo/plot',
              meta: { title: '可视化图表' }
            },
            {
              path: 'qrcode',
              name: 'DemoQRCode',
              component: 'demo/qrcode',
              meta: { title: '高级二维码' }
            },
            {
              path: 'table',
              name: 'DemoTable',
              component: 'demo/table',
              meta: { title: '高级表格' }
            },
            {
              path: 'video',
              name: 'DemoVideo',
              component: 'demo/video',
              meta: { title: '视频播放' }
            }
          ]
        },
        {
          path: '/nested',
          component: 'DefaultLayout',
          redirect: '/nested/menu1/menu1-1',
          meta: { title: '嵌套路由', icon: 'ant-design:align-left-outlined' },
          children: [
            {
              path: 'menu1',
              name: 'Menu1',
              component: 'ParentLayout',
              meta: { title: 'Menu1' },
              redirect: '/nested/menu1/menu1-1',
              children: [
                {
                  path: 'menu1-1',
                  name: 'Menu1-1',
                  component: 'nested/menu1/menu1-1',
                  meta: { title: 'Menu1-1' }
                },
                {
                  path: 'menu1-2',
                  name: 'Menu1-2',
                  component: 'nested/menu1/menu1-2',
                  meta: { title: 'Menu1-2' }
                },
                {
                  path: 'menu1-3',
                  name: 'Menu1-3',
                  component: 'nested/menu1/menu1-3',
                  meta: { title: 'Menu1-3' }
                }
              ]
            },
            {
              path: 'menu2',
              name: 'Menu2',
              component: 'nested/menu2',
              meta: { title: 'Menu2' }
            }
          ]
        }
      ]
    })
  }
] as MockMethod[]

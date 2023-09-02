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
          meta: {
            title: '组件演示',
            icon: '@local:icon-park-outline:list-two'
          },
          children: [
            {
              path: 'copy-text',
              name: 'DemoCopyText',
              component: 'example/demo/copy-text',
              meta: { title: '复制文本' }
            },
            {
              path: 'editor',
              name: 'DemoEditor',
              component: 'example/demo/editor',
              meta: { title: '富文本编辑' }
            },
            {
              path: 'form',
              name: 'DemoForm',
              component: 'example/demo/form',
              meta: { title: '自定义表单' }
            },
            {
              path: 'chart',
              name: 'DemoChart',
              component: 'example/demo/chart',
              meta: { title: '可视化图表' }
            },
            {
              path: 'qrcode',
              name: 'DemoQRCode',
              component: 'example/demo/qrcode',
              meta: { title: '高级二维码' }
            },
            {
              path: 'table',
              name: 'DemoTable',
              component: 'example/demo/table',
              meta: { title: '高级表格' }
            },
            {
              path: 'icon',
              name: 'DemoIcon',
              component: 'example/demo/icon',
              meta: { title: '图标选择' }
            }
          ]
        },
        {
          path: '/nested',
          component: 'DefaultLayout',
          redirect: '/nested/menu1/menu1-1',
          meta: {
            title: '嵌套路由',
            icon: '@local:icon-park-outline:list-two'
          },
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
                  component: 'example/nested/menu1/menu1-1',
                  meta: { title: 'Menu1-1' }
                },
                {
                  path: 'menu1-2',
                  name: 'Menu1-2',
                  component: 'example/nested/menu1/menu1-2',
                  meta: { title: 'Menu1-2' }
                },
                {
                  path: 'menu1-3',
                  name: 'Menu1-3',
                  component: 'example/nested/menu1/menu1-3',
                  meta: { title: 'Menu1-3' }
                }
              ]
            },
            {
              path: 'menu2',
              name: 'Menu2',
              component: 'example/nested/menu2',
              meta: { title: 'Menu2' }
            }
          ]
        },
        {
          path: '/single',
          component: 'DefaultLayout',
          redirect: '/single/index',
          meta: { title: '单独路由' },
          children: [
            {
              path: 'index',
              name: 'SingleIndexView',
              component: 'example/single',
              meta: {
                title: '单独路由',
                icon: '@local:icon-park-outline:list-two'
              }
            }
          ]
        }
      ]
    })
  }
] as MockMethod[]

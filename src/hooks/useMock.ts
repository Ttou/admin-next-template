import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'

export function useMock(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 500 })

  mock.onPost('/api/user/login').reply(200, {
    token: '9edd480fa96ba91f0cc3d313e98df3af'
  })

  mock.onPost('/api/user/logout').reply(200, null)

  mock.onGet('/api/user/info').reply(200, {
    name: '管理员',
    menus: [
      {
        path: '/dashboard',
        component: 'DefaultLayout',
        redirect: '/dashboard/analysis',
        meta: {
          title: 'Dashboard',
          icon: '@local:icon-park-outline:dashboard-one'
        },
        children: [
          {
            path: 'analysis',
            component: 'example/dashboard/analysis',
            meta: { title: '分析页' }
          },
          {
            path: 'workbench',
            component: 'example/dashboard/workbench',
            meta: { title: '工作台' }
          }
        ]
      },
      {
        path: '/demo',
        component: 'DefaultLayout',
        redirect: '/demo/copy-text',
        meta: {
          title: '组件演示',
          icon: '@local:icon-park-outline:list-two'
        },
        children: [
          {
            path: 'copy-text',
            component: 'example/demo/copy-text',
            meta: { title: '复制文本' }
          },
          {
            path: 'editor',
            component: 'example/demo/editor',
            meta: { title: '富文本编辑' }
          },
          {
            path: 'form',
            component: 'example/demo/form',
            meta: { title: '自定义表单' }
          },
          {
            path: 'chart',
            component: 'example/demo/chart',
            meta: { title: '可视化图表' }
          },
          {
            path: 'qrcode',
            component: 'example/demo/qrcode',
            meta: { title: '高级二维码' }
          },
          {
            path: 'table',
            component: 'example/demo/table',
            meta: { title: '高级表格' }
          },
          {
            path: 'icon',
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
            component: 'ParentLayout',
            meta: { title: 'Menu1' },
            redirect: '/nested/menu1/menu1-1',
            children: [
              {
                path: 'menu1-1',
                component: 'example/nested/menu1/menu1-1',
                meta: { title: 'Menu1-1' }
              },
              {
                path: 'menu1-2',
                component: 'example/nested/menu1/menu1-2',
                meta: { title: 'Menu1-2' }
              },
              {
                path: 'menu1-3',
                component: 'example/nested/menu1/menu1-3',
                meta: { title: 'Menu1-3' }
              }
            ]
          },
          {
            path: 'menu2',
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

  mock.onGet('/api/editor').reply(200, {})

  /**
   * 高级表格模拟数据
   */
  const list = new Array(100).fill({}).map((_, index) => ({
    id: `${index}`,
    account: Mock.Random.first(),
    email: Mock.Random.email(),
    nickname: Mock.Random.name(),
    role: Mock.Random.pick(['admin', 'normal']),
    createTs: Mock.Random.datetime(),
    remark: Mock.Random.word(20),
    status: Mock.Random.pick(['0', '1'])
  }))
  mock.onGet('/api/demo/list').reply(config => {
    const { params: query } = config

    return [
      200,
      {
        content: list
          .filter(item =>
            query.account ? item.account.includes(query.account) : true
          )
          .filter(item =>
            query.nickname ? item.nickname.includes(query.nickname) : true
          )
          .filter(item => (query.role ? item.role === query.role : true))
          .filter(item => (query.status ? item.status === query.status : true))
          .slice(
            (query.current - 1) * query.pageSize,
            query.current * query.pageSize
          ),
        current: query.current,
        size: query.pageSize,
        total: list.length
      }
    ]
  })
}

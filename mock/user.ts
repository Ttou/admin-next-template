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
      permissions: ['admin']
    })
  }
] as MockMethod[]

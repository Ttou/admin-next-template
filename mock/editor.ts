import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/editor',
    method: 'get',
    response: ({ query }) => {
      return {}
    }
  }
] as MockMethod[]

import Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

const list = new Array(100).fill({}).map((_, index) => ({
  id: `${index}`,
  account: Mock.Random.first(),
  email: Mock.Random.email(),
  nickname: Mock.Random.name(),
  role: Mock.Random.pick(['admin', 'normal']),
  createTs: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
  remark: Mock.Random.word(20),
  status: Mock.Random.pick(['0', '1'])
}))

export default [
  {
    url: '/api/demo/list',
    method: 'get',
    timeout: 500,
    response: ({ query }) => {
      return {
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
    }
  }
] as MockMethod[]

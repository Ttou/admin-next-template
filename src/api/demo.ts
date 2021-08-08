import { ajax } from '@/utils'

import type { GetListReq, GetListRes } from './demoTypes'

export function getList(data: GetListReq): Promise<GetListRes> {
  return ajax.get('/demo/list', { params: data })
}

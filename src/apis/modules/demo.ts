import { ajax } from '@/utils'

import type { GetListReq, GetListRes } from '../schema'

export type { GetListReq, GetListRes }

export const demoApi = {
  getList(data: GetListReq): Promise<GetListRes> {
    return ajax.get('/demo/list', { params: data })
  }
}

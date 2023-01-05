import { ajax } from '@/utils'

export default {
  getList(data: GetListReq): Promise<GetListRes> {
    return ajax.get('/demo/list', { params: data })
  }
}

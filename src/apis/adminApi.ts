import { ajax } from '@/utils'

export default {
  getProfile(): Promise<GetInfoRes> {
    return ajax.get('/admin/getProfile')
  }
}

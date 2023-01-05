import { ajax } from '@/utils'

export default {
  login(data: Record<string, any>): Promise<LoginRes> {
    return ajax.post('/user/login', data)
  },
  logout(): Promise<void> {
    return ajax.post('/user/logout')
  },
  getInfo(): Promise<GetInfoRes> {
    return ajax.get('/user/info')
  }
}

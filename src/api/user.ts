import { ajax } from '@/utils'

import type { GetUserInfoRes, LoginRes } from './userTypes'

export function login(data: Record<string, any>): Promise<LoginRes> {
  return ajax.post('/user/login', data)
}

export function logout() {
  return ajax.post('/user/logout')
}

export function getUserInfo(): Promise<GetUserInfoRes> {
  return ajax.get('/user/info')
}

import { ajax } from '@/utils'

export function login(data) {
  return ajax.post('/user/login', data)
}

export function logout() {
  return ajax.post('/user/logout')
}

export function getUserInfo() {
  return ajax.get('/user/info')
}

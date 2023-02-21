import axios from 'axios'

import { useUserStore } from '@/store'

const ajax = axios.create({
  baseURL: import.meta.env.VITE_APP_API
})

ajax.interceptors.request.use(req => {
  const userStore = useUserStore()
  if (userStore.token) {
    req.headers['X-Auth-Token'] = userStore.token
  }
  return req
})

ajax.interceptors.response.use(res => {
  return res.data
})

export { ajax }

import axios from 'axios'

const ajax = axios.create({
  baseURL: import.meta.env.VITE_APP_API
})

ajax.interceptors.request.use(req => {
  return req
})

ajax.interceptors.response.use(res => {
  return res.data
})

export default ajax

import 'virtual:svg-icons-register'
import 'ant-design-vue/dist/antd.less'
import './styles/index.css'

import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App'
import { usePermissionGuard, useProgressGuard, useTable } from './hooks'
import router from './router'

async function bootstrap() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(router)
  app.use(pinia)

  usePermissionGuard(router)
  useProgressGuard(router)

  useTable(app)

  await router.isReady()

  app.use(Antd)

  app.mount('#app')
}
bootstrap()

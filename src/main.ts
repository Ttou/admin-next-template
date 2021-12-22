import 'virtual:svg-icons-register'
import 'ant-design-vue/dist/antd.less'
import './styles/index.css'

import Antd from 'ant-design-vue'
import { createApp } from 'vue'

import App from './App'
import { usePermissionGuard, useProgressGuard, useTable } from './hooks'
import router from './router'
import store from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store)

  usePermissionGuard(router)
  useProgressGuard(router)

  useTable(app)

  await router.isReady()

  app.use(Antd)

  app.mount('#app')
}
bootstrap()

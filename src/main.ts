import 'virtual:svg-icons-register'
import './styles/index.css'
import 'ant-design-vue/dist/antd.less'

import Antd from 'ant-design-vue'
import { createApp } from 'vue'

import App from './App'
import router, { usePermissionGuard, useProgressGuard } from './router'
import store from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store)

  usePermissionGuard(router)
  useProgressGuard(router)

  await router.isReady()

  app.use(Antd)

  app.mount('#app')
}
bootstrap()

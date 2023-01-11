import './assets/icons'
import './assets/styles'

import { createApp } from 'vue'

import App from './App'
import {
  useElementPlus,
  useErrorHandler,
  usePermissionGuard,
  useProgressGuard,
  useTable
} from './hooks'
import router from './router'
import store from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store)

  usePermissionGuard(router)
  useProgressGuard(router)

  useElementPlus(app)
  useTable(app)
  useErrorHandler(app)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

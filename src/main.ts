import './assets/icons'
import './assets/styles'

import { createApp } from 'vue'

import App from './App.vue'
import {
  useElementPlus,
  useErrorHandler,
  useMock,
  usePermissionGuard,
  useProgressGuard,
  useTable
} from './hooks'
import i18n from './i18n'
import router from './router'
import store from './store'
import { ajax } from './utils'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store)
  app.use(i18n)

  usePermissionGuard(router)
  useProgressGuard(router)

  useElementPlus(app)
  useTable(app)
  useErrorHandler(app)
  useMock(ajax)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

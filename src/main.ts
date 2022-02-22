import 'virtual:svg-icons-register'
import './styles'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App'
import {
  useAntd,
  usePermissionGuard,
  useProgressGuard,
  useTable
} from './hooks'
import router from './router'

async function bootstrap() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(router)
  app.use(pinia)

  usePermissionGuard(router)
  useProgressGuard(router)

  useAntd(app)
  useTable(app)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

import './icons'
import './styles'

import { createApp } from 'vue'

import App from './App'
import {
  useAntd,
  useErrorHandler,
  useFormCreate,
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

  useAntd(app)
  useTable(app)
  useFormCreate(app)
  useErrorHandler(app)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

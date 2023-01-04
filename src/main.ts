import './icons'
import './styles'

import { createApp } from 'vue'

import App from './App'
import {
  useAntd,
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

  useAntd(app)
  useElementPlus(app)
  useTable(app)
  useErrorHandler(app)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

import 'virtual:svg-icons-register'
import './styles/index.less'

import { createApp } from 'vue'

import App from './App'
import router, { setupGuards } from './router'
import store, { Key } from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(store, Key)

  setupGuards(router)

  await router.isReady()

  app.mount('#app')
}
bootstrap()

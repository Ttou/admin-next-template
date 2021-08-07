import 'virtual:svg-icons-register'
import './permission'

import { createApp } from 'vue'

import App from './App'
import router from './router'
import store, { Key } from './store'

const app = createApp(App)

app.use(router)
app.use(store, Key)

app.mount('#app')

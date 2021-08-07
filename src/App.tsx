import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import { Provider } from './components'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <Provider>
        <RouterView />
      </Provider>
    )
  }
})

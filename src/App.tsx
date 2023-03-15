import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import { Provider } from './components'
import { useUpdate } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    useUpdate()

    return {}
  },
  render() {
    return (
      <Provider>
        <RouterView />
      </Provider>
    )
  }
})

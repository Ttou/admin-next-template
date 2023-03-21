<template>
  <Provider>
    <router-view />
  </Provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Provider } from './components'
import { useUpdate } from './hooks'

export default defineComponent({
  name: 'App',
  components: {
    Provider
  },
  setup() {
    useUpdate()
  }
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useUpdate } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    useUpdate()
  }
})
</script>

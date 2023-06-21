<template>
  <ElConfigProvider v-bind="config">
    <slot />
  </ElConfigProvider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { defineComponent } from 'vue'

import { useElementPlusConfig } from '@/hooks'

export default defineComponent({
  name: 'Provider',
  components: {
    ElConfigProvider
  },
  setup() {
    const config = useElementPlusConfig()

    return {
      config
    }
  }
})
</script>

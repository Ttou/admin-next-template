<template>
  <div>
    <IconVirtualPick v-model="icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { IconVirtualPick } from '@/components'

export default defineComponent({
  components: {
    IconVirtualPick
  },
  setup() {
    const state = reactive({
      icon: '@local:ep:copy-document'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

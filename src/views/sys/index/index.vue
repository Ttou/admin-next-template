<template>
  <section></section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { useSettingStore } from '@/store'

export default defineComponent({
  name: 'IndexView',
  setup() {
    const router = useRouter()
    const settingStore = useSettingStore()

    router.replace({
      path: settingStore.homeRoute.path
    })
  }
})
</script>

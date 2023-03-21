<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :max="20" :include="cachedTabs">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useTabsStore } from '@/store'

export default defineComponent({
  name: 'Content',
  setup() {
    const tabsStore = useTabsStore()

    const cachedTabs = computed(() => tabsStore.cachedTabs)

    return {
      cachedTabs
    }
  }
})
</script>

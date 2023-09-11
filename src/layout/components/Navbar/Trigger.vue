<template>
  <Icon :class="$style.trigger" :icon="icon" @click="handleClick" />
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { computed, defineComponent } from 'vue'

import { useSettingStore } from '@/store'

export default defineComponent({
  name: 'Trigger',
  components: {
    Icon
  },
  setup() {
    const settingStore = useSettingStore()

    const collapsed = computed(() => !settingStore.sideOpened)

    const icon = computed(() =>
      collapsed.value
        ? '@local:icon-park-outline:menu-unfold'
        : '@local:icon-park-outline:menu-fold'
    )

    function handleClick() {
      settingStore.change({
        key: 'sideOpened',
        value: collapsed.value
      })
    }

    return {
      collapsed,
      icon,
      handleClick
    }
  }
})
</script>

<style module>
.trigger {
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>

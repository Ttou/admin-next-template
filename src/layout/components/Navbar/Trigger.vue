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
        ? 'ant-design:menu-unfold-outlined'
        : 'ant-design:menu-fold-outlined'
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
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>

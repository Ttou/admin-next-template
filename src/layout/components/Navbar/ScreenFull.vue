<template>
  <div title="全屏" :class="$style.screenFull" @click="handleClick">
    <Icon :icon="icon" inline />
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { useFullscreen } from '@vueuse/core'
import { computed, defineComponent } from 'vue'

import { getElementFnFromInstance } from '@/utils'

export default defineComponent({
  name: 'ScreenFull',
  components: {
    Icon
  },
  setup() {
    const { isFullscreen, isSupported, toggle } = useFullscreen()
    const { $message } = getElementFnFromInstance()

    const icon = computed(() =>
      isFullscreen.value
        ? 'ant-design:fullscreen-exit-outlined'
        : 'ant-design:fullscreen-outlined'
    )

    function handleClick() {
      if (isSupported) {
        toggle()
      } else {
        $message.warning('浏览器不支持全屏')
      }
    }

    return {
      icon,
      handleClick
    }
  }
})
</script>

<style module>
.screenFull {
  display: flex;
}
</style>

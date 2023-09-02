<template>
  <div :class="$style.logo">
    <Icon :class="$style.logoIcon" icon="@local:custom:logo" />
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  components: {
    Icon
  }
})
</script>

<style module>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--side-logo-height);
}

.logoIcon {
  transform: scale(2);
}
</style>

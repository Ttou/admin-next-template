<template>
  <div :class="$style.navbar">
    <div :class="$style.left">
      <Trigger />
      <Breadcrumb />
    </div>
    <div :class="$style.right">
      <el-space :size="15">
        <ScreenFull />
        <Avatar />
      </el-space>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Avatar from './Avatar.vue'
import Breadcrumb from './Breadcrumb.vue'
import ScreenFull from './ScreenFull.vue'
import Trigger from './Trigger.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Avatar,
    Breadcrumb,
    ScreenFull,
    Trigger
  }
})
</script>

<style module>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .right {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: -15px;

    :global(.el-space__item) {
      min-width: 24px;
      cursor: pointer;
      text-align: center;
      line-height: 48px;
    }

    :global(.el-space__item:hover) {
      background-color: rgb(0 0 0 / 2.5%);
    }
  }
}
</style>

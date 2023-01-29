<template>
  <div class="page">
    <el-alert title="Menu 2" :closable="false"></el-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu2'
})
</script>

<style lang="scss" scoped>
.page {
  padding: 30px;
}
</style>

<template>
  <div class="page">
    <el-alert title="Menu 1-2" :type="'success'" :closable="false"></el-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu12'
})
</script>

<style lang="scss" scoped>
.page {
  padding: 30px;
}
</style>

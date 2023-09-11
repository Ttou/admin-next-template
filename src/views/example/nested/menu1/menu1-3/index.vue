<template>
  <div class="page">
    <el-alert title="Menu 1-3" :type="'success'" :closable="false"></el-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu13'
})
</script>

<style scoped>
.page {
  padding: 30px;
}
</style>

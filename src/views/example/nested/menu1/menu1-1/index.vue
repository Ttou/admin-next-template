<template>
  <div class="page">
    <el-alert title="Menu 1-1" :type="'success'" :closable="false"></el-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu11'
})
</script>

<style scoped>
.page {
  padding: 30px;
}
</style>

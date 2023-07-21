<template>
  <div :style="{ height: pageHeightPx }">
    <vxe-grid ref="gridRef" v-bind="gridConfig">
      <template #toolbar_buttons>
        <el-button type="primary" link @click="handleCustomRefresh">
          自定义刷新
        </el-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { usePageHeight } from '@/hooks'

import { useGrid } from './hooks'

export default defineComponent({
  setup() {
    const { gridExtHook, ...gridRestHook } = useGrid()
    const { pageHeightPx } = usePageHeight()

    return {
      ...gridRestHook,
      gridRef: gridExtHook.gridRef,
      pageHeightPx
    }
  }
})
</script>

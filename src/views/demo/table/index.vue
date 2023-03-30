<template>
  <div>
    <ProGrid ref="gridRef" v-bind="gridConfig" :height="pageHeight">
      <template #toolbar_buttons>
        <el-button type="primary" link @click="handleCustomRefresh">
          自定义刷新
        </el-button>
      </template>
    </ProGrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ProGrid } from '@/components'
import { usePageHeight } from '@/hooks'

import { useGrid, useGridToolbar } from './hooks'

export default defineComponent({
  components: {
    ProGrid
  },
  setup() {
    const { proGridHook, ...gridRestHook } = useGrid()
    const gridToolbarHook = useGridToolbar({ proGridHook })
    const { pageHeight } = usePageHeight()

    return {
      ...gridRestHook,
      ...gridToolbarHook,
      gridRef: proGridHook.gridRef,
      pageHeight
    }
  }
})
</script>

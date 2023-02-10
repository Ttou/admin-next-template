import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

import { ProGrid } from '@/components'
import { usePageHeight } from '@/hooks'

import { useGrid, useGridToolbar } from './hooks'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const { proGridHook, ...gridRestHook } = useGrid()
    const gridToolbarHook = useGridToolbar({ proGridHook })
    const { pageHeightPx } = usePageHeight()

    return {
      ...gridRestHook,
      ...gridToolbarHook,
      gridRef: proGridHook.gridRef,
      pageHeightPx
    }
  },
  render() {
    return (
      <div
        style={{
          height: this.pageHeightPx
        }}
      >
        <ProGrid
          ref="gridRef"
          v-slots={{
            ['toolbar_buttons']: () => {
              return (
                <ElButton
                  type={'primary'}
                  link
                  onClick={this.handleCustomRefresh}
                >
                  自定义刷新
                </ElButton>
              )
            }
          }}
          {...this.gridConfig}
        />
      </div>
    )
  }
})

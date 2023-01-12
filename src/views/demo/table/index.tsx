import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

import { ProTable } from '@/components'
import { usePageHeight } from '@/hooks'

import { useTable, useTableToolbar } from './hooks'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const { tableRefHook, ...tableRestHook } = useTable()
    const tableToolbarHook = useTableToolbar({ tableRefHook })
    const { pageHeightPx } = usePageHeight()

    return {
      ...tableRestHook,
      ...tableToolbarHook,
      tableRef: tableRefHook.tableRef,
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
        <ProTable
          ref="tableRef"
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
          {...this.tableConfig}
        />
      </div>
    )
  }
})

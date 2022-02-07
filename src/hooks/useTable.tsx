import 'xe-utils'
import 'vxe-table/lib/style.css'
import 'vxe-table-plugin-antd/dist/style.css'

import { Input, Select } from 'ant-design-vue'
import type { App } from 'vue'
import VXETable from 'vxe-table'
import VXETablePluginAntd from 'vxe-table-plugin-antd'

import { useTableCommand } from './useTableCommand'
import { useTableFormat } from './useTableFormat'
import { useTableInterceptor } from './useTableInterceptor'
import { useTableRenderer } from './useTableRenderer'

export function useTable(app: App) {
  VXETable.use(VXETablePluginAntd)

  VXETable.setup({
    size: 'small'
  })

  useTableCommand(VXETable)
  useTableRenderer(VXETable)
  useTableInterceptor(VXETable)
  useTableFormat(VXETable)

  // 注册用到的AntD组件
  app.use(Input).use(Select)

  app.use(VXETable)
}

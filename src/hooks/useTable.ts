import 'xe-utils'
import 'vxe-table/lib/style.css'
import 'vxe-table-plugin-element/dist/style.css'

import type { App } from 'vue'
import VXETable from 'vxe-table'
import VXETablePluginElement from 'vxe-table-plugin-element'

import { useTableCommand } from './useTableCommand'
import { useTableFormat } from './useTableFormat'
import { useTableInterceptor } from './useTableInterceptor'
import { useTableRenderer } from './useTableRenderer'

export function useTable(app: App) {
  VXETable.use(VXETablePluginElement)

  VXETable.setup({
    size: 'small'
  })

  useTableCommand(VXETable)
  useTableRenderer(VXETable)
  useTableInterceptor(VXETable)
  useTableFormat(VXETable)

  app.use(VXETable)
}

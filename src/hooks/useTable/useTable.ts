import type { App } from 'vue'
import {
  Edit,
  Filter,
  VxeButton,
  VxeForm,
  VxeGrid,
  VxePager,
  VxeSelect,
  VXETable,
  VxeTable,
  VxeToolbar
} from 'vxe-table'
import VXETablePluginElement from 'vxe-table-plugin-element'

import i18n from '@/i18n'

import { useTableCommand } from './useTableCommand'
import { useTableFormat } from './useTableFormat'
import { useTableInterceptor } from './useTableInterceptor'
import { useTableRenderer } from './useTableRenderer'

export function useTable(app: App) {
  VXETable.use(VXETablePluginElement)

  VXETable.setConfig({
    size: 'small',
    // @ts-ignore
    i18n: (key, args) => i18n.global.t(key, args),
    translate(key, args) {
      if (key && key.indexOf('app.') > -1) {
        return i18n.global.t(key, args)
      }
      return key
    }
  })

  useTableCommand(VXETable)
  useTableRenderer(VXETable)
  useTableInterceptor(VXETable)
  useTableFormat(VXETable)

  app
    .use(Filter)
    .use(Edit)
    .use(VxeGrid)
    .use(VxeToolbar)
    .use(VxeForm)
    .use(VxeTable)
    .use(VxePager)
    .use(VxeButton)
    .use(VxeSelect)
}

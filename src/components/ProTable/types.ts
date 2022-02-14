import { type ExtractPropTypes } from 'vue'
import { type VxeGridInstance } from 'vxe-table'

import type props from './props'

export type ProTableProps = ExtractPropTypes<typeof props>

export type ProTableRef = {
  config: ProTableProps
  table: VxeGridInstance
}

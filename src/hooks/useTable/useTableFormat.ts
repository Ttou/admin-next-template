import type VXETable from 'vxe-table'

import { fmtDate } from '@/utils'

import { TABLE_FORMAT } from './constants'

/**
 * 格式化注册
 */
export function useTableFormat(vxe: typeof VXETable) {
  vxe.formats.add(TABLE_FORMAT.Date, {
    cellFormatMethod({ cellValue }, fmt) {
      return fmtDate(cellValue, fmt)
    }
  })
}

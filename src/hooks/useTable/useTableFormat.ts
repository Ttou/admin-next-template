import type VXETable from 'vxe-table'
import XEUtils from 'xe-utils'

import { TABLE_FORMAT } from './constants'

/** 格式化注册 */
export function useTableFormat(vxe: typeof VXETable) {
  vxe.formats.add(
    TABLE_FORMAT.Date,
    ({ cellValue }, fmt = 'yyyy-MM-dd HH:mm:ss.SSS') => {
      return XEUtils.toDateString(cellValue, fmt)
    }
  )
}

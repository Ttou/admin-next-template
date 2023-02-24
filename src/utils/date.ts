import 'dayjs/locale/zh-cn'

import dayjs from 'dayjs'

dayjs.locale('zh-cn')

export { dayjs }

/**
 * 格式化日期
 * @param value
 * @param fmt
 */
export function fmtDate(value, fmt = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(fmt)
}

/**
 * 每天开始时间
 */
export function startOfDay(value) {
  return dayjs(value).startOf('day').toDate()
}

/**
 * 每天结束时间
 */
export function endOfDay(value) {
  return dayjs(value).endOf('day').toDate()
}

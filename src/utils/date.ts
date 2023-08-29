import 'dayjs/locale/zh-cn'

import dayjs from 'dayjs'

dayjs.locale('zh-cn')

export { dayjs }

type IDate = string | number | Date | dayjs.Dayjs

/**
 * 格式化日期
 * @param value
 * @param fmt
 */
export function fmtDate(value: IDate, fmt = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(fmt)
}

/**
 * 每天开始时间
 */
export function startOfDay(value: IDate) {
  return dayjs(value).startOf('day').toDate()
}

/**
 * 每天结束时间
 */
export function endOfDay(value: IDate) {
  return dayjs(value).endOf('day').toDate()
}

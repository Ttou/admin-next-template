import { createI18n } from 'vue-i18n'
import vxeEnUS from 'vxe-table/lib/locale/lang/en-US'
import vxeZhCN from 'vxe-table/lib/locale/lang/zh-CN'

import appEnUS from './langs/en_US.json'
import appZhCN from './langs/zh_CN.json'

const messages = {
  zh_CN: {
    ...vxeZhCN,
    ...appZhCN
  },
  en_US: {
    ...vxeEnUS,
    ...appEnUS
  }
}

console.log(messages)

export type ILocale = keyof typeof messages

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'zh_CN',
  messages
})

export default i18n

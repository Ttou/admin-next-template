import { createI18n } from 'vue-i18n'
import enUS from 'vxe-table/lib/locale/lang/en-US'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

const messages = {
  zh_CN: {
    ...zhCN
  },
  en_US: {
    ...enUS
  }
}

const i18n = createI18n({
  locale: 'zh_CN',
  messages
})

export default i18n

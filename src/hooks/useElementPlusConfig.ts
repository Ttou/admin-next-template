import { type ConfigProviderProps } from 'element-plus'
import enUS from 'element-plus/es/locale/lang/en'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import { computed } from 'vue'

import { useLocaleStore } from '@/store'

const locales = {
  zh_CN: zhCN,
  en_US: enUS
}

export function useElementPlusConfig() {
  const localeStore = useLocaleStore()

  const config = computed<Partial<ConfigProviderProps>>(() => ({
    locale: locales[localeStore.locale],
    size: 'default'
  }))

  return config
}

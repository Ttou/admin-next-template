import 'moment/dist/locale/zh-cn'

import antdLocale from 'ant-design-vue/es/locale/zh_CN'
import type { ConfigProviderProps } from 'ant-design-vue/lib/config-provider'

export function useAntdConfig(): ConfigProviderProps {
  return {
    locale: antdLocale
  }
}

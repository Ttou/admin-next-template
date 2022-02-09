import 'dayjs/locale/zh-cn'

import antdLocale from 'ant-design-vue/es/locale/zh_CN'
import type { ConfigProviderProps } from 'ant-design-vue/lib/config-provider'
import dayjs from 'dayjs'

export function useAntdConfig(): ConfigProviderProps {
  dayjs.locale('zh-cn')

  return {
    locale: antdLocale
  }
}

import { type ConfigProviderProps } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export function useElementPlusConfig(): Partial<ConfigProviderProps> {
  return {
    locale: zhCn,
    size: 'default'
  }
}

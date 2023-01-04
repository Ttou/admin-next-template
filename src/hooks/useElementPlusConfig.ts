import { type ConfigProviderProps } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export function useElementPlusConfig(): Partial<ConfigProviderProps> {
  return {
    locale: zhCn
  }
}

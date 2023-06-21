import type { QRCodeRenderersOptions } from 'qrcode'
import { object, string } from 'vue-types'

export const props = () => ({
  /**
   * 文本
   */
  text: string().def('').isRequired,
  /**
   * 图标
   */
  logo: string().def(''),
  /**
   * 配置
   */
  options: object<QRCodeRenderersOptions>().def({})
})

export type ProQrProps = ComponentProps<typeof props>

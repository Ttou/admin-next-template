import type { QRCodeRenderersOptions } from 'qrcode'
import type { SetOptional } from 'type-fest'
import { object, string } from 'vue-types'

export const proQrProps = () => ({
  /**
   * 文本
   */
  text: string().isRequired,
  /**
   * 图标
   */
  logo: string().def(''),
  /**
   * 配置
   */
  options: object<QRCodeRenderersOptions>().def({})
})

export type ProQrProps = SetOptional<
  ExtractPropTypes<ReturnType<typeof proQrProps>>,
  'logo' | 'options'
>

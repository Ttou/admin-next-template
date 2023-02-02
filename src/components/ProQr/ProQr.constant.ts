import type { QRCodeRenderersOptions } from 'qrcode'
import type { PropType } from 'vue'

export const proQrProps = () => ({
  /**
   * 文本
   */
  text: {
    type: String,
    default: '',
    required: true
  },
  /**
   * 图标
   */
  logo: {
    type: String,
    default: ''
  },
  /**
   * 配置
   */
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: () => ({} as QRCodeRenderersOptions)
  }
})

export type ProQrProps = ComponentProps<typeof proQrProps>

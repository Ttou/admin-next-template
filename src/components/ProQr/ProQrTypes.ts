import type { QRCodeRenderersOptions } from 'qrcode'
import type { PropType } from 'vue'

export const proQrProps = () => ({
  text: { type: String, default: '', required: true },
  logo: { type: String, default: '' },
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: () => ({} as QRCodeRenderersOptions)
  }
})

export type ProQrProps = ComponentProps<typeof proQrProps>

export default proQrProps

import type { QRCodeRenderersOptions } from 'qrcode'
import type { ExtractPropTypes, PropType } from 'vue'

export const proQrProps = () => ({
  text: { type: String, default: '', required: true },
  logo: { type: String, default: '' },
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: () => ({} as QRCodeRenderersOptions)
  }
})

export type ProQrProps = Partial<
  ExtractPropTypes<ReturnType<typeof proQrProps>>
>

export default proQrProps

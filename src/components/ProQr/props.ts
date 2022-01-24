import type { QRCodeRenderersOptions } from 'qrcode'
import type { PropType } from 'vue'

export default {
  text: { type: String, default: '', required: true },
  logo: { type: String, default: '' },
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: () => ({})
  }
}

import { ExtractPropTypes } from 'vue'

import type props from './props'

export type QRCodeProps = ExtractPropTypes<typeof props>

export type QRCodeRef = {
  qrRef: HTMLCanvasElement
}

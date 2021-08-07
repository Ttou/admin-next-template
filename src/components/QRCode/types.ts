import type { QRCodeRenderersOptions } from 'qrcode'

export type QRCodeProps = {
  text: string
  logo?: string
  options?: QRCodeRenderersOptions
}

export type QRCodeRef = {
  qrRef: HTMLCanvasElement
}

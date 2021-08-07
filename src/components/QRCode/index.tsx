import { toCanvas } from 'qrcode'
import { defineComponent, onMounted, ref, watch } from 'vue'

import { propTypes } from '@/utils'

import type { QRCodeProps } from './types'

export default defineComponent({
  name: 'QRCode',
  props: {
    text: propTypes.string().def('').isRequired,
    logo: propTypes.string().def(''),
    options: propTypes.object<Required<QRCodeProps>['options']>().def({})
  },
  setup(props) {
    const qrRef = ref<Nullable<HTMLCanvasElement>>(null)

    function drawLogo() {
      const image = new Image()

      image.src = props.logo!
      image.onload = () => {
        const ctx = qrRef.value!.getContext('2d')!

        ctx.imageSmoothingEnabled = false

        const cw = qrRef.value!.clientWidth
        const iw = cw / 4
        const ih = cw / 4
        const dx = (cw - iw) / 2
        const dy = (cw - ih) / 2

        ctx.drawImage(image, dx, dy, iw, ih)
      }
    }

    async function init() {
      await toCanvas(qrRef.value, props.text, props.options)

      props.logo && drawLogo()
    }

    watch(
      () => props.text,
      () => {
        init()
      }
    )

    onMounted(() => {
      init()
    })

    return {
      qrRef
    }
  },
  render() {
    return <canvas ref="qrRef" />
  }
})

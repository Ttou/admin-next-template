import { toCanvas } from 'qrcode'
import { defineComponent, onMounted, ref, watch } from 'vue'

import { proQrProps } from './ProQr.define'

export default defineComponent({
  name: 'ProQr',
  props: proQrProps(),
  setup(props) {
    const qrRef = ref<HTMLCanvasElement>()

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
      await toCanvas(qrRef.value!, props.text, props.options)

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
    return <canvas ref={(e: any) => (this.qrRef = e)}></canvas>
  }
})

import { toCanvas } from 'qrcode'
import { defineComponent, onMounted, ref, watch } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ProQr',
  props,
  setup(props) {
    const qrEl = ref<Nullable<HTMLCanvasElement>>(null)

    function drawLogo() {
      const image = new Image()

      image.src = props.logo!
      image.onload = () => {
        const ctx = qrEl.value!.getContext('2d')!

        ctx.imageSmoothingEnabled = false

        const cw = qrEl.value!.clientWidth
        const iw = cw / 4
        const ih = cw / 4
        const dx = (cw - iw) / 2
        const dy = (cw - ih) / 2

        ctx.drawImage(image, dx, dy, iw, ih)
      }
    }

    async function init() {
      await toCanvas(qrEl.value, props.text, props.options)

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
      qrEl
    }
  },
  render() {
    return <canvas ref="qrEl" />
  }
})

import { toCanvas } from 'qrcode'
import {
  defineComponent,
  onMounted,
  reactive,
  shallowRef,
  toRefs,
  watch
} from 'vue'

import { proQrProps } from './ProQr.define'

export default defineComponent({
  name: 'ProQr',
  props: proQrProps(),
  setup(props) {
    const state = reactive({
      qrRef: shallowRef<HTMLCanvasElement>()
    })

    function drawLogo() {
      const image = new Image()

      image.src = props.logo!
      image.onload = () => {
        const ctx = state.qrRef!.getContext('2d')!

        ctx.imageSmoothingEnabled = false

        const cw = state.qrRef!.clientWidth
        const iw = cw / 4
        const ih = cw / 4
        const dx = (cw - iw) / 2
        const dy = (cw - ih) / 2

        ctx.drawImage(image, dx, dy, iw, ih)
      }
    }

    async function init() {
      await toCanvas(state.qrRef!, props.text, props.options)

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
      ...toRefs(state)
    }
  },
  render() {
    return <canvas ref="qrRef"></canvas>
  }
})

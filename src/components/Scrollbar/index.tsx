import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Scrollbar',
  setup() {
    const scrollbarEl = ref<Nullable<HTMLDivElement>>(null)

    BScroll.use(Scrollbar)

    onMounted(() => {
      const bs = new BScroll(scrollbarEl.value!, {
        scrollbar: true,
        scrollY: true
      })

      console.log(bs)
    })

    return {
      scrollbarEl
    }
  },
  render() {
    return <div ref="scrollbarEl">{this.$slots.default?.()}</div>
  }
})

import BScroll from '@better-scroll/core'
import type { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import MouseWheel from '@better-scroll/mouse-wheel'
import Scrollbar from '@better-scroll/scroll-bar'
import { useResizeObserver } from '@vueuse/core'
import { defineComponent, onMounted, ref } from 'vue'

import * as css from './index.css'

export default defineComponent({
  name: 'Scrollbar',
  setup() {
    const scrollbarEl = ref<Nullable<HTMLDivElement>>(null)
    const contentEl = ref<Nullable<HTMLDivElement>>(null)
    const bs = ref({} as BScrollConstructor)

    BScroll.use(Scrollbar)
    BScroll.use(MouseWheel)

    function init() {
      bs.value = new BScroll(scrollbarEl.value!, {
        bounce: false,
        scrollY: true,
        mouseWheel: true,
        scrollbar: {
          fadeInTime: 300,
          fadeOutTime: 500
        }
      })
    }

    onMounted(() => {
      init()
    })

    useResizeObserver(contentEl, () => {
      bs.value.refresh()
    })

    return {
      scrollbarEl,
      contentEl
    }
  },
  render() {
    return (
      <div ref="scrollbarEl" class={css.scrollbar}>
        <div ref="contentEl" class={css.content}>
          {this.$slots.default?.()}
        </div>
      </div>
    )
  }
})

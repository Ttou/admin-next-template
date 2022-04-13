import './index.css'

import { useEventListener, useResizeObserver } from '@vueuse/core'
import type { CSSProperties, PropType, StyleValue } from 'vue'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch
} from 'vue'

import Bar from './bar'
import { scrollbarContextKey } from './constant'
import { addUnit, isNumber } from './util'

export default defineComponent({
  name: 'ElScrollbar',
  components: {
    Bar
  },
  props: {
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: { type: Boolean, default: false },
    wrapStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
      default: ''
    },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: { type: Boolean, default: false },
    minSize: { type: Number, default: 20 }
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    let stopResizeObserver: (() => void) | undefined
    let stopResizeListener: (() => void) | undefined

    const scrollbar$ = ref<HTMLDivElement>()
    const wrap$ = ref<HTMLDivElement>()
    const resize$ = ref<HTMLElement>()

    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const ratioY = ref(1)
    const ratioX = ref(1)
    const GAP = 4 // top 2 + bottom 2 of bar instance

    const style = computed<StyleValue>(() => {
      const style: CSSProperties = {}
      if (props.height) style.height = addUnit(props.height)
      if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
      return [props.wrapStyle, style]
    })

    function handleScroll() {
      if (wrap$.value) {
        const offsetHeight = wrap$.value.offsetHeight - GAP
        const offsetWidth = wrap$.value.offsetWidth - GAP

        moveY.value =
          ((wrap$.value.scrollTop * 100) / offsetHeight) * ratioY.value
        moveX.value =
          ((wrap$.value.scrollLeft * 100) / offsetWidth) * ratioX.value

        emit('scroll', {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        })
      }
    }

    function setScrollTop(value: number) {
      if (!isNumber(value)) {
        console.warn('value must be a number')
        return
      }
      wrap$.value!.scrollTop = value
    }

    function setScrollLeft(value: number) {
      if (!isNumber(value)) {
        console.warn('value must be a number')
        return
      }
      wrap$.value!.scrollLeft = value
    }

    function update() {
      if (!wrap$.value) return

      const offsetHeight = wrap$.value.offsetHeight - GAP
      const offsetWidth = wrap$.value.offsetWidth - GAP

      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth
      const height = Math.max(originalHeight, props.minSize)
      const width = Math.max(originalWidth, props.minSize)

      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))

      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
    }

    watch(
      () => props.noresize,
      noresize => {
        if (noresize) {
          stopResizeObserver?.()
          stopResizeListener?.()
        } else {
          // eslint-disable-next-line @typescript-eslint/no-extra-semi
          ;({ stop: stopResizeObserver } = useResizeObserver(resize$, update))
          stopResizeListener = useEventListener('resize', update)
        }
      },
      { immediate: true }
    )

    provide(
      scrollbarContextKey,
      reactive({
        scrollbarElement: scrollbar$,
        wrapElement: wrap$
      })
    )

    onMounted(() => {
      if (!props.native) nextTick(() => update())
    })

    return {
      scrollbar$,
      wrap$,
      resize$,
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft
    }
  },
  render() {
    const resize = this.tag

    return (
      <div ref="scrollbar$" class="el-scrollbar">
        <div
          ref="wrap$"
          class={[
            this.wrapClass,
            'el-scrollbar__wrap',
            this.native ? '' : 'el-scrollbar__wrap--hidden-default'
          ]}
          style={this.style}
          onScroll={this.handleScroll}
        >
          <resize
            ref="resize$"
            class={['el-scrollbar__view', this.viewClass]}
            style={this.viewStyle}
          >
            {this.$slots.default?.()}
          </resize>
        </div>
        {!this.native ? (
          <>
            <Bar
              move={this.moveX}
              ratio={this.ratioX}
              size={this.sizeWidth}
              always={this.always}
            />
            <Bar
              move={this.moveY}
              ratio={this.ratioY}
              size={this.sizeHeight}
              always={this.always}
              vertical
            />
          </>
        ) : null}
      </div>
    )
  }
})

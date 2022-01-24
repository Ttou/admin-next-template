import { isClient, useEventListener } from '@vueuse/core'
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  ref,
  toRef,
  Transition
} from 'vue'

import { scrollbarContextKey } from './constant'
import { BAR_MAP, renderThumbStyle } from './util'

export default defineComponent({
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: { type: String, default: '' },
    move: { type: Number, default: 0 },
    ratio: { type: Number, required: true },
    always: Boolean
  },
  setup(props) {
    const scrollbar = inject(scrollbarContextKey)
    if (!scrollbar) throw new Error('can not inject scrollbar context')

    const instance = ref<HTMLDivElement>()
    const thumb = ref<HTMLDivElement>()

    const barStore = ref({})
    const visible = ref(false)

    let cursorDown = false
    let cursorLeave = false
    let onselectstartStore:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null = isClient ? document.onselectstart : null

    const bar = computed(
      () => BAR_MAP[props.vertical ? 'vertical' : 'horizontal']
    )

    const thumbStyle = computed(() =>
      renderThumbStyle({
        size: props.size,
        move: props.move,
        bar: bar.value
      })
    )

    const offsetRatio = computed(
      () =>
        // offsetRatioX = original width of thumb / current width of thumb / ratioX
        // offsetRatioY = original height of thumb / current height of thumb / ratioY
        // instance height = wrap height - GAP
        instance.value![bar.value.offset] ** 2 /
        scrollbar.wrapElement![bar.value.scrollSize] /
        props.ratio /
        thumb.value![bar.value.offset]
    )

    function clickThumbHandler(e: MouseEvent) {
      // prevent click event of middle and right button
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) return

      window.getSelection()?.removeAllRanges()
      startDrag(e)

      const el = e.currentTarget as HTMLDivElement
      if (!el) return
      barStore.value[bar.value.axis] =
        el[bar.value.offset] -
        (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
    }

    function clickTrackHandler(e: MouseEvent) {
      if (!thumb.value || !instance.value || !scrollbar!.wrapElement) return

      const offset = Math.abs(
        (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]
      )
      const thumbHalf = thumb.value[bar.value.offset] / 2
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]

      scrollbar!.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage *
          scrollbar!.wrapElement[bar.value.scrollSize]) /
        100
    }

    function startDrag(e: MouseEvent) {
      e.stopImmediatePropagation()
      cursorDown = true
      document.addEventListener('mousemove', mouseMoveDocumentHandler)
      document.addEventListener('mouseup', mouseUpDocumentHandler)
      onselectstartStore = document.onselectstart
      document.onselectstart = () => false
    }

    function mouseMoveDocumentHandler(e: MouseEvent) {
      if (!instance.value || !thumb.value) return
      if (cursorDown === false) return

      const prevPage = barStore.value[bar.value.axis]
      if (!prevPage) return

      const offset =
        (instance.value.getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]) *
        -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]
      scrollbar!.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage *
          scrollbar!.wrapElement[bar.value.scrollSize]) /
        100
    }

    function mouseUpDocumentHandler() {
      cursorDown = false
      barStore.value[bar.value.axis] = 0
      document.removeEventListener('mousemove', mouseMoveDocumentHandler)
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
      restoreOnselectstart()
      if (cursorLeave) visible.value = false
    }

    function mouseMoveScrollbarHandler() {
      cursorLeave = false
      visible.value = !!props.size
    }

    function mouseLeaveScrollbarHandler() {
      cursorLeave = true
      visible.value = cursorDown
    }

    onBeforeUnmount(() => {
      restoreOnselectstart()
      document.removeEventListener('mouseup', mouseUpDocumentHandler)
    })

    const restoreOnselectstart = () => {
      if (document.onselectstart !== onselectstartStore)
        document.onselectstart = onselectstartStore
    }

    useEventListener(
      toRef(scrollbar, 'scrollbarElement'),
      'mousemove',
      mouseMoveScrollbarHandler
    )

    useEventListener(
      toRef(scrollbar, 'scrollbarElement'),
      'mouseleave',
      mouseLeaveScrollbarHandler
    )

    return {
      instance,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler
    }
  },
  render() {
    return (
      <Transition name="el-scrollbar-fade">
        <div
          v-show={this.always || this.visible}
          ref="instance"
          class={['el-scrollbar__bar', 'is-' + this.bar.key]}
          onMousedown={this.clickTrackHandler}
        >
          <div
            ref="thumb"
            class="el-scrollbar__thumb"
            style={this.thumbStyle}
            onMousedown={this.clickThumbHandler}
          ></div>
        </div>
      </Transition>
    )
  }
})

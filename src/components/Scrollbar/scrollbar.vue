<template>
  <div ref="scrollbar$" class="el-scrollbar">
    <div
      ref="wrap$"
      :class="[
        wrapClass,
        'el-scrollbar__wrap',
        native ? '' : 'el-scrollbar__wrap--hidden-default'
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize$"
        :class="['el-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always" />
      <bar
        :move="moveY"
        :ratio="ratioY"
        :size="sizeHeight"
        vertical
        :always="always"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { useEventListener, useResizeObserver } from '@vueuse/core'
import type { CSSProperties, StyleValue } from 'vue'
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

import Bar from './bar.vue'
import { scrollbarContextKey } from './constant'
import { emits, props } from './scrollbar'
import { addUnit, isNumber } from './util'

export default defineComponent({
  name: 'ElScrollbar',
  components: {
    Bar
  },
  props,
  emits,
  setup(props, { emit }) {
    let stopResizeObserver: (() => void) | undefined = undefined
    let stopResizeListener: (() => void) | undefined = undefined

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

    const handleScroll = () => {
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

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        console.warn('value must be a number')
        return
      }
      wrap$.value!.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        console.warn('value must be a number')
        return
      }
      wrap$.value!.scrollLeft = value
    }

    const update = () => {
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
  }
})
</script>

<style>
.el-scrollbar {
  --el-text-color-secondary: #909399;
  --el-scrollbar-opacity: 0.3;
  --el-scrollbar-bg-color: var(--el-text-color-secondary);
  --el-scrollbar-hover-opacity: 0.5;
  --el-scrollbar-hover-bg-color: var(--el-text-color-secondary);
  --el-transition-duration: 0.3s;
}

/* stylelint-disable-next-line no-duplicate-selectors */
.el-scrollbar {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.el-scrollbar__wrap {
  overflow: auto;
  height: 100%;
}

.el-scrollbar__wrap--hidden-default {
  scrollbar-width: none;
}

.el-scrollbar__wrap--hidden-default::-webkit-scrollbar {
  display: none;
}

.el-scrollbar__thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: var(
    --el-scrollbar-bg-color,
    var(--el-text-color-secondary)
  );
  transition: var(--el-transition-duration) background-color;
  opacity: var(--el-scrollbar-opacity, 0.3);
}

.el-scrollbar__thumb:hover {
  background-color: var(
    --el-scrollbar-hover-bg-color,
    var(--el-text-color-secondary)
  );
  opacity: var(--el-scrollbar-hover-opacity, 0.5);
}

.el-scrollbar__bar {
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1;
  border-radius: 4px;
}

.el-scrollbar__bar.is-vertical {
  width: 6px;
  top: 2px;
}

.el-scrollbar__bar.is-vertical > div {
  width: 100%;
}

.el-scrollbar__bar.is-horizontal {
  height: 6px;
  left: 2px;
}

.el-scrollbar__bar.is-horizontal > div {
  height: 100%;
}

.el-scrollbar-fade-enter-active {
  transition: opacity 340ms ease-out;
}

.el-scrollbar-fade-leave-active {
  transition: opacity 120ms ease-out;
}

.el-scrollbar-fade-enter-from,
.el-scrollbar-fade-leave-active {
  opacity: 0;
}
</style>

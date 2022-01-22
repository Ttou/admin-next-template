import { isNumber } from 'lodash-es'
import type { ExtractPropTypes, PropType, StyleValue } from 'vue'

export const props = {
  height: {
    type: [String, Number],
    default: ''
  },
  maxHeight: {
    type: [String, Number],
    default: ''
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: [String, Object, Array] as PropType<StyleValue>,
    default: ''
  },
  wrapClass: {
    type: [String, Array],
    default: ''
  },
  viewClass: {
    type: [String, Array],
    default: ''
  },
  viewStyle: {
    type: [String, Array],
    default: ''
  },
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: {
    type: String,
    default: 'div'
  },
  always: {
    type: Boolean,
    default: false
  },
  minSize: {
    type: Number,
    default: 20
  }
}

export type ScrollbarProps = ExtractPropTypes<typeof props>

export const emits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }: {
    scrollTop: number
    scrollLeft: number
  }) => isNumber(scrollTop) && isNumber(scrollLeft)
}
export type ScrollbarEmits = typeof emits

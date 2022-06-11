import type { PropType, StyleValue } from 'vue'

export const scrollbarProps = () => ({
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
})

export type ScrollbarProps = ComponentProps<typeof scrollbarProps>

export default scrollbarProps

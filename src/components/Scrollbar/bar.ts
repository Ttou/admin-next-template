import type { ExtractPropTypes } from 'vue'

export const props = {
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
}

export type BarProps = ExtractPropTypes<typeof props>

import type { ExtractPropTypes } from 'vue'

export const barProps = () => ({
  vertical: Boolean,
  size: { type: String, default: '' },
  move: { type: Number, default: 0 },
  ratio: { type: Number, required: true },
  always: Boolean
})

export type BarProps = Partial<ExtractPropTypes<ReturnType<typeof barProps>>>

export default barProps

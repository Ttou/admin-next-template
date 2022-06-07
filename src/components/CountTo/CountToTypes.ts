import type { ExtractPropTypes } from 'vue'

export const countToProps = () => ({
  startVal: { type: Number, default: 0 },
  endVal: { type: Number, default: 1000 },
  duration: { type: Number, default: 1500 },
  autoplay: { type: Boolean, default: true },
  decimals: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0
    }
  },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  separator: { type: String, default: ',' },
  decimal: { type: String, default: '.' },
  useEasing: { type: Boolean, default: true },
  transition: { type: String, default: 'linear' }
})

export type CountToProps = Partial<
  ExtractPropTypes<ReturnType<typeof countToProps>>
>

export default countToProps

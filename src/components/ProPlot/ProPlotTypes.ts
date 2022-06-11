import type { PropType } from 'vue'

export const proPlotProps = () => ({
  plot: { type: Function as PropType<any>, required: true },
  config: { type: Object, default: () => ({}) },
  data: { type: Array, default: () => [] },
  events: { type: Object }
})

export type ProPlotProps = ComponentProps<typeof proPlotProps>

export default proPlotProps

import type { PropType } from 'vue'

export const proPlotProps = () => ({
  /**
   * 图表实例化函数
   */
  plot: {
    type: Function as PropType<any>,
    required: true
  },
  /**
   * 配置
   */
  options: { type: Object, default: () => ({}) },
  /**
   * 数据
   */
  data: { type: Array, default: () => [] },
  /**
   * 事件
   */
  events: { type: Object }
})

export type ProPlotProps = ComponentProps<typeof proPlotProps>

export default proPlotProps

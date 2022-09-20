import type { Plot } from '@antv/g2plot'
import { isEmpty, isEqual } from 'lodash-es'
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import proPlotProps from './ProPlotTypes'

export { proPlotProps }

export default defineComponent({
  name: 'ProPlot',
  props: proPlotProps(),
  setup(props) {
    const plotEl = ref<ElementRef>(null)
    const plotRef = ref({} as Plot<any>)

    /** 初始化 */
    function init() {
      const { plot: Plot } = props

      // @ts-ignore
      plotRef.value = new Plot(plotEl.value, {
        data: props.data,
        ...props.options
      })

      if (!isEmpty(props.events)) {
        Object.keys(props.events!).forEach(key => {
          plotRef.value.on(key, props.events![key])
        })
      }

      plotRef.value.render()
    }

    /** 结束时 */
    function final() {
      if (plotRef.value) {
        plotRef.value.destroy()
      }
    }

    /** 监听数据变化 */
    watch(
      () => props.data,
      (newVal, oldVal) => {
        if (isEmpty(oldVal)) {
          plotRef.value.update({
            data: newVal,
            ...props.options
          })
        } else {
          plotRef.value.changeData(newVal)
        }
      }
    )

    /** 监听配置变化 */
    watch(
      () => props.options,
      (newVal, oldVal) => {
        if (!isEqual(newVal, oldVal)) {
          plotRef.value.update({
            data: props.data,
            ...props.options
          })
        }
      }
    )

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      final()
    })

    return {
      plotEl
    }
  },
  render() {
    return <div ref="plotEl"></div>
  }
})

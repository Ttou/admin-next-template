import type { Plot } from '@antv/g2plot'
import { isEmpty, isEqual } from 'lodash-es'
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { propTypes } from '@/utils'

export default defineComponent({
  name: 'ProPlot',
  props: {
    plot: propTypes.any().isRequired,
    config: propTypes.object().def({}),
    data: propTypes.array().def([])
  },
  setup(props) {
    const plotEl = ref<ElementRef>(null)
    const plotRef = ref({} as Plot<any>)

    function init() {
      const { plot: Plot } = props
      plotRef.value = new Plot(plotEl.value, {
        data: props.data,
        ...props.config
      })
      plotRef.value.render()
    }

    watch(
      () => props.data,
      (newVal, oldVal) => {
        if (isEmpty(oldVal)) {
          plotRef.value.update({
            data: newVal,
            ...props.config
          })
        } else {
          plotRef.value.changeData(newVal)
        }
      }
    )

    watch(
      () => props.config,
      (newVal, oldVal) => {
        if (!isEqual(newVal, oldVal)) {
          plotRef.value.update({
            data: props.data,
            ...props.config
          })
        }
      }
    )

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      if (plotRef.value) {
        plotRef.value.destroy()
      }
    })

    return {
      plotEl
    }
  },
  render() {
    return <div ref="plotEl"></div>
  }
})

import { defineComponent, onMounted, ref } from 'vue'

import { propTypes } from '@/utils'

export default defineComponent({
  name: 'ProPlot',
  props: {
    type: propTypes.string().isRequired,
    config: propTypes.object().def({}),
    data: propTypes.array().def([])
  },
  setup(props) {
    const plotEl = ref<ElementRef>(null)

    function init() {}

    onMounted(() => {
      init()
    })

    return {
      plotEl
    }
  },
  render() {
    return <div ref="plotEl"></div>
  }
})

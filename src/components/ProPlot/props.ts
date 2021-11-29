import type { PropType } from 'vue'

export default {
  plot: {
    type: Object as PropType<any>,
    required: true
  },
  config: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Array,
    default: () => []
  }
}

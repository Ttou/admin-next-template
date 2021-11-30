export default {
  plot: {
    type: Function,
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

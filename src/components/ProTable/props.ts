import type { PropType } from 'vue'
import type { VxeGridProps } from 'vxe-table'

export default {
  fixedHeight: { type: [Boolean, Number], default: false },
  options: {
    type: Object as PropType<VxeGridProps>,
    required: true
  }
}

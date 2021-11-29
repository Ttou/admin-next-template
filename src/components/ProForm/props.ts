import type { PropType } from 'vue'

import type { FormItem, FormProps } from './types'

export default {
  props: {
    type: Object as PropType<FormProps>
  },
  items: {
    type: Array as PropType<FormItem[]>,
    default: () => []
  }
}

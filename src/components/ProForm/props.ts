import type { PropType } from 'vue'

import type { FormProps, Item } from './types'

export default {
  props: {
    type: Object as PropType<FormProps>
  },
  items: {
    type: Array as PropType<Item[]>,
    default: () => []
  }
}

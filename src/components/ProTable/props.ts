import type { PropType } from 'vue'

import type {
  FormItem,
  Slots,
  TableColumn,
  TableRequest,
  TableRowKeyFunc
} from './types'

export default {
  autoLoad: {
    type: Boolean,
    default: false
  },
  request: {
    type: Function as PropType<TableRequest>,
    required: true
  },
  formItems: {
    type: Array as PropType<FormItem[]>
  },
  tableRowKey: {
    type: [String, Function] as PropType<string | TableRowKeyFunc>,
    default: 'id'
  },
  tableColumns: {
    type: Array as PropType<TableColumn[]>,
    required: true
  },
  slots: {
    type: Object as PropType<Slots>,
    default: () => ({})
  }
}

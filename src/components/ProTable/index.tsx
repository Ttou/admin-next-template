import { defineComponent } from 'vue'
import { Grid as VxeGrid } from 'vxe-table'

import props from './props'

export default defineComponent({
  name: 'ProTable',
  props,
  setup() {},
  render() {
    return <VxeGrid {...this.options} />
  }
})

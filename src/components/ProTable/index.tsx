import { defineComponent } from 'vue'
import { Grid as VxeGrid } from 'vxe-table'

import * as css from './index.css'
import props from './props'

export default defineComponent({
  name: 'ProTable',
  props,
  setup() {},
  render() {
    return <VxeGrid class={css.proTable} {...this.options} />
  }
})

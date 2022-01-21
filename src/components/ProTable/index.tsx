import { computed, defineComponent, ref } from 'vue'
import { Grid as VxeGrid } from 'vxe-table'

import styles from './index.module.css'
import props from './props'

export default defineComponent({
  name: 'ProTable',
  props,
  setup(props) {
    const tableId = ref(`pro-table-${Math.random().toString().slice(-5)}`)

    const config = computed(() => ({
      id: tableId.value,
      ...props.options
    }))

    return {
      config
    }
  },
  render() {
    return (
      <VxeGrid class={styles.proTable} {...this.config} v-slots={this.$slots} />
    )
  }
})

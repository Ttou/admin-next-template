import { isNumber } from 'lodash-es'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Grid as VxeGrid } from 'vxe-table'

import styles from './index.module.css'
import props from './props'

export default defineComponent({
  name: 'ProTable',
  props,
  setup(props) {
    const tableHeight = ref(0)
    const tableId = ref(`pro-table-${Math.random().toString().slice(-5)}`)

    const config = computed(() => ({
      id: tableId.value,
      height: tableHeight.value || '',
      ...props.options
    }))

    function calcHeight() {
      if (isNumber(props.fixedHeight)) {
        tableHeight.value = props.fixedHeight
      } else if (props.fixedHeight) {
        const app = document.querySelector('#app')
        tableHeight.value = app!.clientHeight - 114
      }
    }

    onMounted(() => {
      calcHeight()
    })

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

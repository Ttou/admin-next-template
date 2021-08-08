import { defineComponent, onMounted, reactive } from 'vue'

import { getList } from '@/api'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const state = reactive({
      list: []
    })

    onMounted(() => {
      getList({
        current: 1,
        pageSize: 20
      })
    })

    return {
      state
    }
  },
  render() {
    return <div></div>
  }
})

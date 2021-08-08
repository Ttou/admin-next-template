import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const state = reactive({
      list: []
    })

    return {
      state
    }
  },
  render() {
    return <div></div>
  }
})

import { Form, Table } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProTable',
  props: {},
  setup() {
    const state = ref({})

    return {
      state
    }
  },
  render() {
    return (
      <div>
        <div class="form-wrapper">
          <Form />
        </div>
        <div class="table-wrapper">
          <Table />
        </div>
      </div>
    )
  }
})

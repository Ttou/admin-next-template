import { Form, Table } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ProTable',
  props: {},
  setup() {
    const state = reactive({})

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

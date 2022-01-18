import { Alert } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu13',
  render() {
    return (
      <div
        style={{
          padding: '30px'
        }}
      >
        <Alert closable={false} message="Menu 1-3" type="success" />
      </div>
    )
  }
})

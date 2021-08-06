import { Alert } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu1-1',
  render() {
    return (
      <div
        style={{
          padding: '30px'
        }}
      >
        <Alert closable={false} message="Menu 1-1" type="success" />
      </div>
    )
  }
})

import { Alert } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'NestedMenu1',
  render() {
    return (
      <div
        style={{
          padding: '30px'
        }}
      >
        <Alert closable={false} message="Menu 1"></Alert>
        <RouterView />
      </div>
    )
  }
})

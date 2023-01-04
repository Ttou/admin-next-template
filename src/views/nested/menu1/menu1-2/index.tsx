import { ElAlert } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu12',
  render() {
    return (
      <div
        style={{
          padding: '30px'
        }}
      >
        <ElAlert closable={false} title="Menu 1-2" type={'success'}></ElAlert>
      </div>
    )
  }
})

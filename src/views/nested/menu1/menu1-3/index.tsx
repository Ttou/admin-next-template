import { ElAlert } from 'element-plus'
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
        <ElAlert closable={false} title="Menu 1-3" type={'success'} />
      </div>
    )
  }
})

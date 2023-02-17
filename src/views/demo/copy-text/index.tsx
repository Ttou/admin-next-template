import { ElButton, ElInput, ElMessage } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

import { copyText } from '@/utils'

export default defineComponent({
  setup() {
    const state = reactive({
      inputValue: 'http://www.baidu.com'
    })

    async function handleCopy() {
      const result = await copyText(state.inputValue)

      if (result) {
        ElMessage.success('复制成功')
      } else {
        ElMessage.error('复制失败')
      }
    }

    return {
      ...toRefs(state),
      handleCopy
    }
  },
  render() {
    return (
      <div>
        <ElInput
          v-model={this.inputValue}
          v-slots={{
            ['suffix']: () => (
              <ElButton
                type={'primary'}
                style={{
                  marginRight: '-11px'
                }}
                onClick={this.handleCopy}
              >
                复制
              </ElButton>
            )
          }}
        />
      </div>
    )
  }
})

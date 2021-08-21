import { Input, message } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { copyText } from '@/utils'

export default defineComponent({
  name: 'DemoCopyText',
  setup() {
    const inputValue = ref('http://www.baidu.com')

    async function handleCopy() {
      const result = await copyText(inputValue.value)

      if (result) {
        message.success('复制成功')
      } else {
        message.error('复制失败')
      }
    }

    return {
      inputValue,
      handleCopy
    }
  },
  render() {
    return (
      <div>
        <Input.Search
          v-model={[this.inputValue, 'value']}
          onSearch={this.handleCopy}
          enterButton={'复制'}
        />
      </div>
    )
  }
})

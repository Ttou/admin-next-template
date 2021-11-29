import { ConfigProvider } from 'ant-design-vue'
import { defineComponent } from 'vue'

import { useConfig } from '@/hooks'

export default defineComponent({
  name: 'Provider',
  setup() {
    const config = useConfig()

    return {
      config
    }
  },
  render() {
    return (
      <ConfigProvider {...this.config}>
        {this.$slots.default?.()}
      </ConfigProvider>
    )
  }
})

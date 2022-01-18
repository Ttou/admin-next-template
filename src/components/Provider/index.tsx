import { ConfigProvider } from 'ant-design-vue'
import { defineComponent } from 'vue'

import { useAntdConfig } from '@/hooks'

export default defineComponent({
  name: 'ProviderComp',
  setup() {
    const config = useAntdConfig()

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

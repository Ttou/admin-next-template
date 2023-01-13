import { ElConfigProvider } from 'element-plus'
import { defineComponent } from 'vue'

import { useElementPlusConfig, useUpdate } from '@/hooks'

export default defineComponent({
  name: 'Provider',
  setup() {
    const config = useElementPlusConfig()

    useUpdate()

    return {
      config
    }
  },
  render() {
    return (
      <ElConfigProvider {...this.config}>
        {this.$slots.default?.()}
      </ElConfigProvider>
    )
  }
})

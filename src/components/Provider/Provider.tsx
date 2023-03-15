import { ElConfigProvider } from 'element-plus'
import { defineComponent } from 'vue'

import { useElementPlusConfig } from '@/hooks'

export default defineComponent({
  name: 'Provider',
  setup() {
    const config = useElementPlusConfig()

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

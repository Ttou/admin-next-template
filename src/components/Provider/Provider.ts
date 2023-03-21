import { ElConfigProvider } from 'element-plus'
import { defineComponent, h } from 'vue'

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
    return h(ElConfigProvider, this.config, () => this.$slots.default?.())
  }
})

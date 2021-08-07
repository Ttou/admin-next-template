import { ConfigProvider } from 'ant-design-vue'
import { defineComponent } from 'vue'

import useLocale from './useLocale'

export default defineComponent({
  name: 'Provider',
  setup() {
    const { antdLocale } = useLocale()

    return {
      antdLocale
    }
  },
  render() {
    return (
      <ConfigProvider locale={this.antdLocale}>
        {this.$slots.default?.()}
      </ConfigProvider>
    )
  }
})

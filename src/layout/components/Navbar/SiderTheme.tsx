import { AppstoreFilled, AppstoreOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'

import { useSettingsStore } from '@/store'

export default defineComponent({
  name: 'SiderTheme',
  setup() {
    const settingsStore = useSettingsStore()

    const siderTheme = computed(() => settingsStore.siderTheme)

    function handleClick() {
      settingsStore.change({
        key: 'siderTheme',
        value: siderTheme.value === 'dark' ? 'light' : 'dark'
      })
    }

    return {
      siderTheme,
      handleClick
    }
  },
  render() {
    return (
      <div
        title="主题"
        style={{ cursor: 'pointer' }}
        onClick={this.handleClick}
      >
        {this.siderTheme === 'dark' ? <AppstoreFilled /> : <AppstoreOutlined />}
      </div>
    )
  }
})

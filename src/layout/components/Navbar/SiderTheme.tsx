import { AppstoreFilled, AppstoreOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'

import { useSettingStore } from '@/store'

export default defineComponent({
  name: 'SiderTheme',
  setup() {
    const settingStore = useSettingStore()

    const siderTheme = computed(() => settingStore.siderTheme)

    function handleClick() {
      settingStore.change({
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

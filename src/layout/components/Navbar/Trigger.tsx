import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'

import { useSettingsStore } from '@/store'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const settingsStore = useSettingsStore()

    const collapsed = computed(() => !settingsStore.siderOpened)

    function handleClick() {
      settingsStore.change({
        key: 'siderOpened',
        value: collapsed.value
      })
    }

    return {
      collapsed,
      handleClick
    }
  },
  render() {
    return this.collapsed ? (
      <MenuUnfoldOutlined class="trigger" onClick={this.handleClick} />
    ) : (
      <MenuFoldOutlined class="trigger" onClick={this.handleClick} />
    )
  }
})

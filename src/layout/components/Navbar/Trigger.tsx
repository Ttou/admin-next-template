import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'

import { useSettingStore } from '@/store'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const settingStore = useSettingStore()

    const collapsed = computed(() => !settingStore.siderOpened)

    function handleClick() {
      settingStore.change({
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

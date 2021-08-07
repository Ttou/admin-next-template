import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { Actions, Key } from '@/store'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const store = useStore(Key)

    const collapsed = computed(() => !store.state.settings.siderOpened)

    function handleClick() {
      store.dispatch(Actions.setting.changeSetting, {
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

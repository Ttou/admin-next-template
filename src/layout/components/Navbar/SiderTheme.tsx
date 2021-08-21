import { AppstoreFilled, AppstoreOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { Actions, Key } from '@/store'

export default defineComponent({
  name: 'SiderTheme',
  setup() {
    const store = useStore(Key)

    const siderTheme = computed(() => store.state.settings.siderTheme)

    function handleClick() {
      store.dispatch(Actions.setting.changeSetting, {
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

import './index.less'

import { Layout } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'

import { Key } from '@/store'

import { Menu, Navbar } from './components'

export default defineComponent({
  name: 'Layout',
  setup() {
    const store = useStore(Key)

    const settings = computed(() => store.state.settings)

    return {
      settings
    }
  },
  render() {
    return (
      <Layout class="layout">
        <Layout.Sider
          collapsed={!this.settings.siderOpened}
          trigger={null}
          theme={this.settings.siderTheme}
          width={this.settings.siderOpenedWidth}
          collapsible
        >
          <Menu />
        </Layout.Sider>
        <Layout>
          <Layout.Header class="layout-header">
            <Navbar />
          </Layout.Header>
          <Layout.Content>
            <RouterView />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
})

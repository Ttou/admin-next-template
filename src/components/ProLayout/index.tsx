import './index.less'

import { Layout } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { Key } from '@/store'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'

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
          class="layout-sider"
          collapsed={!this.settings.siderOpened}
          trigger={null}
          theme={this.settings.siderTheme}
          width={this.settings.siderOpenedWidth}
          collapsible
        >
          <Logo />
          <Menu />
        </Layout.Sider>
        <Layout class="layout-main">
          <Layout.Header class="layout-header">
            <Navbar />
          </Layout.Header>
          <Tabbar />
          <Layout.Content class="layout-content">
            <Content />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
})

import './index.less'

import { Layout } from 'ant-design-vue'
import { computed, CSSProperties, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { Key } from '@/store'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'

export default defineComponent({
  name: 'Layout',
  setup() {
    const store = useStore(Key)

    const settings = computed(() => store.state.settings)

    const mainStyle = computed<CSSProperties>(() => {
      const ret: CSSProperties = {}

      if (settings.value.siderOpened) {
        ret.marginLeft = settings.value.siderOpenedWidth
        ret.width = `calc(100vw - ${settings.value.siderOpenedWidth})`
      } else {
        ret.marginLeft = settings.value.siderClosedWidth
        ret.width = `calc(100vw - ${settings.value.siderClosedWidth})`
      }

      return ret
    })

    const headerStyle = computed(() => {
      const ret = {
        height: settings.value.headerHeight
      } as CSSProperties

      if (settings.value.fixedHeader) {
        ret.position = 'sticky'
        ret.top = '0px'
      }

      return ret
    })

    const tabbarStyle = computed(() => {
      const ret = {} as CSSProperties

      if (settings.value.fixedHeader) {
        ret.position = 'sticky'
        ret.top = settings.value.headerHeight
      }

      return ret
    })

    return {
      settings,
      mainStyle,
      headerStyle,
      tabbarStyle
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
          collapsedWidth={this.settings.siderClosedWidth}
          collapsible
        >
          <Logo />
          <Menu />
        </Layout.Sider>
        <Layout class="layout-main" style={this.mainStyle}>
          <Layout.Header class="layout-header" style={this.headerStyle}>
            <Navbar />
          </Layout.Header>
          <Tabbar style={this.tabbarStyle} />
          <Layout.Content class="layout-content">
            <Content />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
})

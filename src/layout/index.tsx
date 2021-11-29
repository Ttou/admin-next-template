import { Layout } from 'ant-design-vue'
import { computed, CSSProperties, defineComponent } from 'vue'

import { useSettingStore } from '@/store'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'
import * as css from './index.css'

export default defineComponent({
  name: 'Layout',
  setup() {
    const settingStore = useSettingStore()

    const setting = computed(() => settingStore.$state)

    const mainStyle = computed<CSSProperties>(() => {
      const ret: CSSProperties = {}

      if (setting.value.siderOpened) {
        ret.marginLeft = setting.value.siderOpenedWidth
        ret.width = `calc(100vw - ${setting.value.siderOpenedWidth})`
      } else {
        ret.marginLeft = setting.value.siderClosedWidth
        ret.width = `calc(100vw - ${setting.value.siderClosedWidth})`
      }

      return ret
    })

    const headerStyle = computed(() => {
      const ret = {
        height: setting.value.headerHeight
      } as CSSProperties

      if (setting.value.fixedHeader) {
        ret.position = 'sticky'
        ret.top = '0px'
      }

      return ret
    })

    const tabbarStyle = computed(() => {
      const ret = {} as CSSProperties

      if (setting.value.fixedHeader) {
        ret.position = 'sticky'
        ret.top = setting.value.headerHeight
      }

      return ret
    })

    return {
      settings: setting,
      mainStyle,
      headerStyle,
      tabbarStyle
    }
  },
  render() {
    return (
      <Layout class={css.layout}>
        <Layout.Sider
          class={css.layoutSider}
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
        <Layout class={css.layoutMain} style={this.mainStyle}>
          <Layout.Header class={css.layoutHeader} style={this.headerStyle}>
            <Navbar />
          </Layout.Header>
          <Tabbar style={this.tabbarStyle} />
          <Layout.Content class={css.layoutContent}>
            <Content />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
})

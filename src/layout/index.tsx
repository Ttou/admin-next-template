import { Layout } from 'ant-design-vue'
import { computed, CSSProperties, defineComponent } from 'vue'

import { Scrollbar } from '@/components'
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
      setting,
      mainStyle,
      headerStyle,
      tabbarStyle
    }
  },
  render() {
    const renderHeader = () => (
      <Layout.Header class={css.layoutHeader} style={this.headerStyle}>
        <Navbar />
      </Layout.Header>
    )

    const renderTabbar = () => <Tabbar style={this.tabbarStyle} />

    const renderContent = () => (
      <Layout.Content class={css.layoutContent}>
        <Content />
      </Layout.Content>
    )

    return (
      <Layout class={css.layout}>
        <Layout.Sider
          class={css.layoutSider}
          collapsed={!this.setting.siderOpened}
          trigger={null}
          theme={this.setting.siderTheme}
          width={this.setting.siderOpenedWidth}
          collapsedWidth={this.setting.siderClosedWidth}
          collapsible
        >
          <Logo />
          <Menu />
        </Layout.Sider>
        {this.setting.fixedHeader ? (
          <Layout class={css.layoutMain} style={this.mainStyle}>
            {renderHeader()}
            {renderTabbar()}
            <Scrollbar>{renderContent()}</Scrollbar>
          </Layout>
        ) : (
          <Scrollbar>
            <Layout class={css.layoutMain} style={this.mainStyle}>
              {renderHeader()}
              {renderTabbar()}
              {renderContent()}
            </Layout>
          </Scrollbar>
        )}
      </Layout>
    )
  }
})

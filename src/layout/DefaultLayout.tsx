import {
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElScrollbar
} from 'element-plus'
import { computed, CSSProperties, defineComponent } from 'vue'

import { useSettingStore } from '@/store'
import vars from '@/styles/var.module.css'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'
import styles from './DefaultLayout.module.css'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const settingStore = useSettingStore()

    const setting = computed(() => settingStore.$state)

    const asideWidth = computed(() =>
      setting.value.sideOpened
        ? setting.value.sideOpenedWidth
        : setting.value.sideClosedWidth
    )

    const mainStyle = computed<CSSProperties>(() => {
      const ret: CSSProperties = {}

      if (setting.value.sideOpened) {
        ret.marginLeft = setting.value.sideOpenedWidth
        ret.width = `calc(100vw - ${setting.value.sideOpenedWidth})`
      } else {
        ret.marginLeft = setting.value.sideClosedWidth
        ret.width = `calc(100vw - ${setting.value.sideClosedWidth})`
      }

      return ret
    })

    const headerStyle = computed(() => {
      const ret = {
        height: vars.headerHeight
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
        ret.top = vars.headerHeight
      }

      return ret
    })

    return {
      setting,
      asideWidth,
      mainStyle,
      headerStyle,
      tabbarStyle
    }
  },
  render() {
    const renderHeader = () => (
      <ElHeader class={styles.layoutHeader} style={this.headerStyle}>
        <Navbar />
      </ElHeader>
    )

    const renderTabbar = () => <Tabbar style={this.tabbarStyle} />

    const renderContent = () => (
      <ElMain class={styles.layoutContent}>
        <Content />
      </ElMain>
    )

    return (
      <ElContainer class={styles.layout}>
        <ElAside class={styles.layoutSide} width={this.asideWidth}>
          <Logo />
          <ElScrollbar>
            <Menu />
          </ElScrollbar>
        </ElAside>
        {this.setting.fixedHeader ? (
          <ElContainer class={styles.layoutMain} style={this.mainStyle}>
            {renderHeader()}
            {renderTabbar()}
            <ElScrollbar id="page">{renderContent()}</ElScrollbar>
          </ElContainer>
        ) : (
          <ElScrollbar>
            <ElContainer class={styles.layoutMain} style={this.mainStyle}>
              {renderHeader()}
              {renderTabbar()}
              {renderContent()}
            </ElContainer>
          </ElScrollbar>
        )}
      </ElContainer>
    )
  }
})

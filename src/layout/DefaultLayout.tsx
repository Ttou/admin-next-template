import {
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElScrollbar
} from 'element-plus'
import { computed, CSSProperties, defineComponent } from 'vue'

import { CSS_VARS } from '@/constants'
import { useSettingStore } from '@/store'

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
        height: CSS_VARS.headerHeight
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
        ret.top = CSS_VARS.headerHeight
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
    const ReuseHeader = () => (
      <ElHeader class={styles.layoutHeader} style={this.headerStyle}>
        <Navbar />
      </ElHeader>
    )
    const ReuseContent = () => (
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
          <ElContainer
            class={styles.layoutMain}
            style={this.mainStyle}
            direction="vertical"
          >
            <ReuseHeader />
            <Tabbar v-show={this.setting.tabbar} style={this.tabbarStyle} />
            <ElScrollbar
              wrapClass="page"
              wrapStyle="flex: 1"
              viewStyle="display: flex; min-height: 100%;"
            >
              <ReuseContent />
            </ElScrollbar>
          </ElContainer>
        ) : (
          <ElContainer
            class={styles.layoutMain}
            style={this.mainStyle}
            direction="vertical"
          >
            <ElScrollbar
              wrapClass="page"
              wrapStyle="flex: 1"
              viewStyle="display: flex; flex-direction: column; min-height: 100%;"
            >
              <ReuseHeader />
              <Tabbar v-show={this.setting.tabbar} style={this.tabbarStyle} />
              <ReuseContent />
            </ElScrollbar>
          </ElContainer>
        )}
      </ElContainer>
    )
  }
})

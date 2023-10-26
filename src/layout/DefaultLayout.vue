<template>
  <DefineHeader>
    <el-header :class="$style.layoutHeader" :style="headerStyle">
      <Navbar />
    </el-header>
  </DefineHeader>
  <DefineContent>
    <el-main :class="$style.layoutContent">
      <Content />
    </el-main>
  </DefineContent>
  <el-container :class="$style.layout">
    <el-aside :class="$style.layoutSide" :width="asideWidth">
      <Logo />
      <el-scrollbar>
        <Menu />
      </el-scrollbar>
    </el-aside>
    <el-container
      v-if="setting.fixedHeader"
      :class="$style.layoutMain"
      :style="mainStyle"
      direction="vertical"
    >
      <ReuseHeader />
      <Tabbar v-show="setting.tabbar" :style="tabbarStyle" />
      <el-scrollbar wrapClass="page">
        <ReuseContent />
      </el-scrollbar>
    </el-container>
    <el-container
      v-else
      :class="$style.layoutMain"
      :style="mainStyle"
      direction="vertical"
    >
      <el-scrollbar wrapClass="page">
        <ReuseHeader />
        <Tabbar v-show="setting.tabbar" :style="tabbarStyle" />
        <ReuseContent />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { computed, CSSProperties, defineComponent } from 'vue'

import { CSS_VARS } from '@/constants'
import { useSettingStore } from '@/store'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'

const [DefineHeader, ReuseHeader] = createReusableTemplate()
const [DefineContent, ReuseContent] = createReusableTemplate()

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Content,
    Logo,
    Menu,
    Navbar,
    Tabbar,
    DefineHeader,
    ReuseHeader,
    DefineContent,
    ReuseContent
  },
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
  }
})
</script>

<style module>
.layout {
  width: 100%;
  height: 100%;

  .layoutSide {
    position: fixed;
    overflow: hidden;
    height: 100vh;
    left: 0;
    background-color: var(--menu-bg);
    z-index: 100;
    transition: all 0.4s;
  }

  .layoutMain {
    background-color: #fff;
    transition: all 0.4s;
    height: 100%;
  }

  .layoutHeader {
    padding: 0 12px;
    background-color: #fff;
    z-index: 100;
  }

  .layoutContent {
    padding: 12px;
    overflow-x: hidden;
  }

  :global(.page + .is-horizontal) {
    display: none;
  }
}
</style>

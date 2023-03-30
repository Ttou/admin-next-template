<template>
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
    >
      <el-header :class="$style.layoutHeader" :style="headerStyle">
        <Navbar />
      </el-header>
      <Tabbar :style="tabbarStyle" />
      <el-scrollbar id="page">
        <el-main :class="$style.layoutContent">
          <Content />
        </el-main>
      </el-scrollbar>
    </el-container>
    <el-scrollbar v-else>
      <el-container :class="$style.layoutMain" :style="mainStyle">
        <el-header :class="$style.layoutHeader" :style="headerStyle">
          <Navbar />
        </el-header>
        <Tabbar :style="tabbarStyle" />
        <el-main :class="$style.layoutContent">
          <Content />
        </el-main>
      </el-container>
    </el-scrollbar>
  </el-container>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue'

import vars from '@/assets/styles/var.module.css'
import { useSettingStore } from '@/store'

import { Content, Logo, Menu, Navbar, Tabbar } from './components'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Content,
    Logo,
    Menu,
    Navbar,
    Tabbar
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
  }
})
</script>

<style module>
.layout {
  width: 100%;
  height: 100%;
}

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
}

.layoutHeader {
  padding: 0 12px;
  background-color: #fff;
  z-index: 100;
}

.layoutContent {
  padding: 12px 12px 0;
  overflow-x: hidden;
}

.layout :global(#page) {
  background-color: #fff;
}

.layout :global(#page .el-scrollbar__view) {
  display: flex;
  min-height: 100%;
}
</style>

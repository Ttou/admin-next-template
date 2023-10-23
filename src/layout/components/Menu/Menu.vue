<template>
  <el-menu
    mode="vertical"
    :class="$style.menu"
    :defaultActive="activeMenu"
    :backgroundColor="CSS_VARS.menuBg"
    :textColor="CSS_VARS.menuText"
    :activeTextColor="CSS_VARS.menuActiveText"
    :collapse="!setting.sideOpened"
    :collapseTransition="false"
    uniqueOpened
  >
    <template v-for="v in list" :key="v.path">
      <SubMenu v-if="v.children" :item="v" />
      <MainMenu v-else :item="v" />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash-unified'
import { computed, defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'

import { CSS_VARS } from '@/constants'
import { usePermissionStore, useSettingStore } from '@/store'

import MainMenu from './MainMenu.vue'
import SubMenu from './SubMenu.vue'

export default defineComponent({
  name: 'Menu',
  components: {
    MainMenu,
    SubMenu
  },
  setup() {
    const state = reactive({
      list: [] as any[]
    })

    const route = useRoute()
    const permissionStore = usePermissionStore()
    const settingStore = useSettingStore()

    const routes = computed(() => cloneDeep(permissionStore.routes))
    const setting = computed(() => settingStore.$state)
    const activeMenu = computed(() => route.path)

    function createMenu(routes: RouteRecordRaw[], basePath = '') {
      for (const route of routes) {
        route.path =
          basePath +
          (route.path.startsWith('/') ? route.path : `/${route.path}`)

        delete route.component
        delete route.redirect

        if (route.children) {
          if (route.children.length === 0) {
            continue
          } else {
            createMenu(route.children, route.path)
          }
        }
      }

      return routes
    }

    function init() {
      const menu = createMenu(routes.value)
      state.list = menu
    }

    onBeforeMount(() => {
      init()
    })

    return {
      ...toRefs(state),
      CSS_VARS,
      activeMenu,
      setting
    }
  }
})
</script>

<style module>
.menu {
  border-right: none;
  min-height: calc(100vh - var(--side-logo-height));

  :global(.iconify) {
    margin-right: 12px;
    font-size: 18px;
  }

  &:global(.el-menu--collapse) {
    width: var(--menu-collapse-width);
  }

  &:global(.el-menu--collapse .iconify) {
    margin: 0;
  }

  &:global(.el-menu--collapse .el-sub-menu__title) {
    justify-content: center;
    padding: 0;
  }

  & > :global(.el-menu-item:hover),
  & :global(.el-sub-menu__title:hover) {
    background-color: var(--menu-hover) !important;
  }

  & :global(.is-active > .el-sub-menu__title) {
    color: var(--sub-menu-active-text) !important;
  }

  & :global(.el-sub-menu .el-menu .el-sub-menu__title),
  & :global(.el-sub-menu .el-menu-item) {
    background-color: var(--sub-menu-bg) !important;
  }

  & :global(.nest-menu .el-sub-menu > .el-sub-menu__title:hover),
  & :global(.el-sub-menu .el-menu-item:hover) {
    background-color: var(--sub-menu-hover) !important;
  }

  &:global(.el-menu--collapse .el-menu-item > .el-menu-tooltip__trigger) {
    justify-content: center;
  }

  @at-root {
    :global(.el-menu--popup .el-sub-menu > .el-sub-menu__title:hover) {
      background-color: var(--sub-menu-hover) !important;
    }
  }
}
</style>

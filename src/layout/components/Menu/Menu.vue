<template>
  <el-menu
    mode="vertical"
    :class="$style.menu"
    :defaultActive="activeMenu"
    :backgroundColor="vars.menuBg"
    :textColor="vars.menuText"
    :activeTextColor="vars.menuActiveText"
    :collapse="!setting.sideOpened"
    :collapseTransition="false"
    uniqueOpened
  >
    <template v-for="v in list">
      <SubMenu v-if="v.children" :key="v.path" :item="v" />
      <MainMenu v-else :key="v.path" :item="v" />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash-unified'
import { computed, defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'

import vars from '@/assets/styles/var.module.css'
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
      vars,
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
}

.menu :global(.iconify) {
  margin-right: 12px;
}

.menu:global(.el-menu--collapse) {
  width: var(--menu-collapse-width);
}

.menu:global(.el-menu--collapse .iconify) {
  margin: 0;
}

.menu:global(.el-menu--collapse .el-sub-menu__title) {
  justify-content: center;
  padding: 0;
}

.menu :global(.el-sub-menu__title:hover) {
  background-color: var(--menu-hover) !important;
}

.menu :global(.is-active > .el-sub-menu__title) {
  color: var(--sub-menu-active-text) !important;
}

.menu :global(.el-sub-menu .el-menu .el-sub-menu__title),
.menu :global(.el-sub-menu .el-menu-item) {
  background-color: var(--sub-menu-bg) !important;
}

.menu :global(.nest-menu .el-sub-menu > .el-sub-menu__title:hover),
.menu :global(.el-sub-menu .el-menu-item:hover),
:global(.el-menu--popup .el-sub-menu > .el-sub-menu__title:hover) {
  background-color: var(--sub-menu-hover) !important;
}
</style>

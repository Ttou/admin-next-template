<template>
  <div :class="$style.tabbar">
    <el-tabs
      v-model="activeKey"
      @tabChange="handleSelectTab"
      @tabRemove="handleCloseTab"
    >
      <el-tab-pane
        v-for="v in visitedTabs"
        :key="v.fullPath"
        :name="v.fullPath"
        :label="v.meta.title"
        closable
      ></el-tab-pane>
    </el-tabs>
    <el-dropdown placement="bottom-end" @command="handleCommand">
      <template #default>
        <div :class="$style.tabsMenu">
          <Icon icon="@local:icon-park-outline:down" :inline="true" />
        </div>
      </template>
      <template #dropdown>
        <el-dropdown-menu :class="$style.tabsDropdownMenu">
          <el-dropdown-item command="refresh">
            <Icon icon="@local:icon-park-outline:redo" :inline="true" />
            刷新页面
          </el-dropdown-item>
          <el-dropdown-item
            command="closeLeft"
            :disabled="closeLeftDisabled"
            divided
          >
            <Icon icon="@local:icon-park-outline:to-left" :inline="true" />
            关闭左侧
          </el-dropdown-item>
          <el-dropdown-item command="closeRight" :disabled="closeRightDisabled">
            <Icon icon="@local:icon-park-outline:to-right" :inline="true" />
            关闭右侧
          </el-dropdown-item>
          <el-dropdown-item
            command="closeOther"
            :disabled="closeOtherDisabled"
            divided
          >
            <Icon icon="@local:icon-park-outline:close" :inline="true" />
            关闭其它
          </el-dropdown-item>
          <el-dropdown-item command="closeAll">
            <Icon icon="@local:icon-park-outline:close-one" :inline="true" />
            关闭所有
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  toRefs,
  watch
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { useSettingStore, useTabsStore } from '@/store'

export default defineComponent({
  name: 'Tabbar',
  components: {
    Icon
  },
  setup() {
    const state = reactive({
      activeKey: '',
      commandMap: {
        refresh: () => handleRefreshTab(),
        closeLeft: () => handleCloseLeftTabs(),
        closeRight: () => handleCloseRightTabs(),
        closeOther: () => handleCloseOtherTabs(),
        closeAll: () => handleCloseAllTabs()
      }
    })

    const route = useRoute()
    const router = useRouter()
    const tabsStore = useTabsStore()
    const settingStore = useSettingStore()

    const visitedTabs = computed(() => tabsStore.visitedTabs)

    const closeLeftDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.fullPath === state.activeKey) ===
        0
    )

    const closeRightDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.fullPath === state.activeKey) ===
        visitedTabs.value.length - 1
    )

    const closeOtherDisabled = computed(() => visitedTabs.value.length <= 1)

    function isActive(tab: any) {
      return state.activeKey === tab.fullPath
    }

    function addTabs() {
      const { name, path, fullPath } = route

      // 只添加配置过名称且不是异常和登录页面
      if (
        name &&
        [CONST_ROUTES.LOGIN, CONST_ROUTES.ERROR].indexOf(
          path as CONST_ROUTES
        ) === -1
      ) {
        tabsStore.addTab(route)
        state.activeKey = fullPath
      }
      return false
    }

    function handleRefreshTab() {
      tabsStore.delCachedTab(route).then(() => {
        const { fullPath } = route

        nextTick(() => {
          router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    }

    function handleCloseTab(tabName) {
      const tab = visitedTabs.value.find(v => v.fullPath === tabName) as any

      tabsStore.delTab(tab).then(({ visitedTabs }) => {
        if (isActive(tab)) {
          toLastTab(visitedTabs)
        }
      })
    }

    function handleCloseLeftTabs() {
      tabsStore.delLeftTabs(route)
    }

    function handleCloseRightTabs() {
      tabsStore.delRightTabs(route)
    }

    function handleCloseOtherTabs() {
      tabsStore.delOthersTabs(route)
    }

    function handleCloseAllTabs() {
      tabsStore.delAllTabs().then(({ visitedTabs }) => {
        toLastTab(visitedTabs)
      })
    }

    function handleSelectTab(activeKey: any) {
      router.push(activeKey)
    }

    function toLastTab(visitedTabs: any[]) {
      const latestView = visitedTabs.slice(-1)[0]

      if (latestView) {
        router.push(latestView.fullPath)
      } else {
        // 首页被关闭时跳转重定向
        if (route.name === settingStore.homeRoute.name) {
          router.replace({ path: '/redirect' + route.fullPath })
        } else {
          router.replace('/')
        }
      }
    }

    function handleCommand(command: any) {
      state.commandMap[command]()
    }

    watch(
      () => route.path,
      () => {
        addTabs()
      }
    )

    onMounted(() => {
      addTabs()
    })

    return {
      ...toRefs(state),
      visitedTabs,
      closeLeftDisabled,
      closeRightDisabled,
      closeOtherDisabled,
      handleCloseTab,
      handleSelectTab,
      handleCommand
    }
  }
})
</script>

<style module>
.tabbar {
  display: flex;
  justify-content: space-between;
  height: 42px;
  padding: 6px 12px;
  background-color: #f5f7f9;
  transition: all 0.2s ease;
  z-index: 50;

  :global(.el-tabs__active-bar) {
    display: none;
  }

  :global(.el-tabs__nav-wrap::after) {
    display: none;
  }

  :global(.el-tabs__item) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin: 0 6px 0 0;
    padding: 5px 16px !important;
    background-color: #fff;
    border-radius: 3px;
    border: none;
    user-select: none;
  }

  .tabsMenu {
    flex-grow: 0;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
  }
}

.tabsDropdownMenu {
  :global(svg) {
    margin-right: 5px;
  }
}
</style>

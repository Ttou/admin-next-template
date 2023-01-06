import { Icon } from '@iconify/vue'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'
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

import styles from './Tabbar.module.css'

export default defineComponent({
  name: 'Tabbar',
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
  },
  render() {
    return (
      <div class={styles.tabbar}>
        <ElTabs
          v-model={this.activeKey}
          onTabChange={this.handleSelectTab}
          onTabRemove={this.handleCloseTab}
        >
          {this.visitedTabs.map(v => (
            <ElTabPane
              name={v.fullPath}
              label={v.meta.title as string}
              closable
              key={v.fullPath}
            />
          ))}
        </ElTabs>
        <ElDropdown
          onCommand={this.handleCommand}
          v-slots={{
            ['default']: () => (
              <div class={styles.tabsMenu}>
                <Icon icon={'ant-design:down-outlined'} inline />
              </div>
            ),
            ['dropdown']: () => (
              <ElDropdownMenu class={styles.tabsDropdownMenu}>
                <ElDropdownItem command="refresh">
                  <Icon icon={'ant-design:reload-outlined'} inline />
                  刷新页面
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeLeft"
                  disabled={this.closeLeftDisabled}
                  divided
                >
                  <Icon icon={'ant-design:vertical-right-outlined'} inline />
                  关闭左侧
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeRight"
                  disabled={this.closeRightDisabled}
                >
                  <Icon icon={'ant-design:vertical-left-outlined'} inline />
                  关闭右侧
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeOther"
                  disabled={this.closeOtherDisabled}
                  divided
                >
                  <Icon icon={'ant-design:close-outlined'} inline />
                  关闭其它
                </ElDropdownItem>
                <ElDropdownItem command="closeAll">
                  <Icon icon={'ant-design:close-circle-outlined'} inline />
                  关闭所有
                </ElDropdownItem>
              </ElDropdownMenu>
            )
          }}
          placement={'bottom-end'}
        />
      </div>
    )
  }
})

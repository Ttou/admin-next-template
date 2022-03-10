import { Dropdown, Menu, MenuDivider, MenuItem, Tabs } from 'ant-design-vue'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
  withModifiers
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { SvgIcon } from '@/components'
import { ROUTE } from '@/constants'
import { useSettingStore, useTabsStore } from '@/store'

import styles from './index.module.css'

export default defineComponent({
  name: 'Tabs',
  setup() {
    const activeKey = ref('')

    const route = useRoute()
    const router = useRouter()
    const tabsStore = useTabsStore()
    const settingStore = useSettingStore()

    const visitedTabs = computed(() => tabsStore.visitedTabs)

    const closeLeftDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.path === activeKey.value) === 0
    )

    const closeRightDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.path === activeKey.value) ===
        visitedTabs.value.length - 1
    )

    const closeOtherDisabled = computed(() => visitedTabs.value.length <= 1)

    function isActive(tab: any) {
      return activeKey.value === tab.path
    }

    function addTabs() {
      const { name, path } = route

      // 只添加配置过名称且不是异常和登录页面
      if (name && [ROUTE.LOGIN, ROUTE.ERROR].indexOf(path as ROUTE) === -1) {
        tabsStore.addTab(route)
        activeKey.value = path
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

    function handleCloseTab(tab) {
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
        router.push(latestView.fullPath!)
      } else {
        // 首面被关闭时跳转重定向
        if (route.name === settingStore.homeRoute.name) {
          router.replace({ path: '/redirect' + route.fullPath })
        } else {
          router.replace('/')
        }
      }
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
      activeKey,
      visitedTabs,
      closeLeftDisabled,
      closeRightDisabled,
      closeOtherDisabled,
      handleCloseTab,
      handleCloseLeftTabs,
      handleCloseRightTabs,
      handleCloseOtherTabs,
      handleCloseAllTabs,
      handleSelectTab,
      handleRefreshTab
    }
  },
  render() {
    return (
      <div class={styles.tabbar}>
        <Tabs
          v-model:activeKey={this.activeKey}
          onChange={this.handleSelectTab}
        >
          {this.visitedTabs.map(view => (
            <Tabs.TabPane
              tab={() => (
                <div class={styles.tabContent}>
                  <span>{view.meta!.title}</span>
                  <SvgIcon
                    name="tabbar-close"
                    class={styles.tabCloseIcon}
                    onClick={withModifiers(
                      () => this.handleCloseTab(view),
                      ['stop']
                    )}
                  />
                </div>
              )}
              key={view.path}
            />
          ))}
        </Tabs>
        <Dropdown
          v-slots={{
            default: () => (
              <div class={styles.tabsMenu}>
                <SvgIcon name="tabbar-down" />
              </div>
            ),
            overlay: () => (
              <Menu class={styles.tabsDropdownMenu}>
                <MenuItem onClick={this.handleRefreshTab}>
                  <SvgIcon name="tabbar-refresh" />
                  刷新页面
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={this.handleCloseLeftTabs}
                  disabled={this.closeLeftDisabled}
                >
                  <SvgIcon name="tabbar-close-left" />
                  关闭左侧
                </MenuItem>
                <MenuItem
                  onClick={this.handleCloseRightTabs}
                  disabled={this.closeRightDisabled}
                >
                  <SvgIcon name="tabbar-close-right" />
                  关闭右侧
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={this.handleCloseOtherTabs}
                  disabled={this.closeOtherDisabled}
                >
                  <SvgIcon name="tabbar-close" />
                  关闭其它
                </MenuItem>
                <MenuItem onClick={this.handleCloseAllTabs}>
                  <SvgIcon name="tabbar-close-all" />
                  关闭所有
                </MenuItem>
              </Menu>
            )
          }}
          overlayStyle={{
            zIndex: 100002
          }}
        />
      </div>
    )
  }
})

import { Icon } from '@iconify/vue'
import {
  Dropdown,
  Menu,
  MenuDivider,
  MenuItem,
  TabPane,
  Tabs
} from 'ant-design-vue'
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

import { ROUTE } from '@/constants'
import { useSettingStore, useTabsStore } from '@/store'

import styles from './Tabbar.module.css'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const activeKey = ref('')

    const route = useRoute()
    const router = useRouter()
    const tabsStore = useTabsStore()
    const settingStore = useSettingStore()

    const visitedTabs = computed(() => tabsStore.visitedTabs)

    const closeLeftDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.fullPath === activeKey.value) ===
        0
    )

    const closeRightDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.fullPath === activeKey.value) ===
        visitedTabs.value.length - 1
    )

    const closeOtherDisabled = computed(() => visitedTabs.value.length <= 1)

    function isActive(tab: any) {
      return activeKey.value === tab.fullPath
    }

    function addTabs() {
      const { name, path, fullPath } = route

      // 只添加配置过名称且不是异常和登录页面
      if (name && [ROUTE.LOGIN, ROUTE.ERROR].indexOf(path as ROUTE) === -1) {
        tabsStore.addTab(route)
        activeKey.value = fullPath
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
            <TabPane
              tab={() => (
                <div class={styles.tabContent}>
                  <input data-key={view.fullPath} hidden />
                  <span>{view.meta!.title}</span>
                  <Icon
                    icon={'ant-design:close-outlined'}
                    class={styles.tabCloseIcon}
                    inline
                    onClick={withModifiers(
                      () => this.handleCloseTab(view),
                      ['stop']
                    )}
                  />
                </div>
              )}
              key={view.fullPath}
            />
          ))}
        </Tabs>
        <Dropdown
          v-slots={{
            default: () => (
              <div class={styles.tabsMenu}>
                <Icon icon={'ant-design:down-outlined'} inline />
              </div>
            ),
            overlay: () => (
              <Menu class={styles.tabsDropdownMenu}>
                <MenuItem onClick={this.handleRefreshTab}>
                  <Icon icon={'ant-design:reload-outlined'} inline />
                  刷新页面
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={this.handleCloseLeftTabs}
                  disabled={this.closeLeftDisabled}
                >
                  <Icon icon={'ant-design:vertical-right-outlined'} inline />
                  关闭左侧
                </MenuItem>
                <MenuItem
                  onClick={this.handleCloseRightTabs}
                  disabled={this.closeRightDisabled}
                >
                  <Icon icon={'ant-design:vertical-left-outlined'} inline />
                  关闭右侧
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={this.handleCloseOtherTabs}
                  disabled={this.closeOtherDisabled}
                >
                  <Icon icon={'ant-design:close-outlined'} inline />
                  关闭其它
                </MenuItem>
                <MenuItem onClick={this.handleCloseAllTabs}>
                  <Icon icon={'ant-design:close-circle-outlined'} inline />
                  关闭所有
                </MenuItem>
              </Menu>
            )
          }}
          placement={'bottomRight'}
          overlayStyle={{
            zIndex: 100002
          }}
        />
      </div>
    )
  }
})

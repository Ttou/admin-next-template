import {
  CloseCircleFilled,
  CloseOutlined,
  DownOutlined,
  RedoOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined
} from '@ant-design/icons-vue'
import { Dropdown, Menu, Tabs } from 'ant-design-vue'
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

import { ROUTE_ENUM } from '@/enums'
import { useTabsStore } from '@/store'

import * as css from './index.css'

export default defineComponent({
  name: 'Tabs',
  setup() {
    const activeKey = ref('')

    const route = useRoute()
    const router = useRouter()
    const tabsStore = useTabsStore()

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
      if (
        name &&
        [ROUTE_ENUM.LOGIN, ROUTE_ENUM.ERROR].indexOf(path as ROUTE_ENUM) === -1
      ) {
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
        if (route.name === 'Dashboard') {
          router.replace({ path: '/redirect' + route.fullPath })
        } else {
          router.push('/')
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
      <div class={css.tabbar}>
        <Tabs
          v-model={[this.activeKey, 'activeKey']}
          onChange={this.handleSelectTab}
        >
          {this.visitedTabs.map(view => (
            <Tabs.TabPane
              tab={() => (
                <div class={css.tabContent}>
                  <span>{view.meta!.title}</span>
                  <CloseOutlined
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
              <div class={css.tabsMenu}>
                <DownOutlined />
              </div>
            ),
            overlay: () => (
              <Menu>
                <Menu.Item onClick={this.handleRefreshTab}>
                  <RedoOutlined />
                  刷新页面
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  onClick={this.handleCloseLeftTabs}
                  disabled={this.closeLeftDisabled}
                >
                  <VerticalRightOutlined />
                  关闭左侧
                </Menu.Item>
                <Menu.Item
                  onClick={this.handleCloseRightTabs}
                  disabled={this.closeRightDisabled}
                >
                  <VerticalLeftOutlined />
                  关闭右侧
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  onClick={this.handleCloseOtherTabs}
                  disabled={this.closeOtherDisabled}
                >
                  <CloseOutlined />
                  关闭其它
                </Menu.Item>
                <Menu.Item onClick={this.handleCloseAllTabs}>
                  <CloseCircleFilled />
                  关闭所有
                </Menu.Item>
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

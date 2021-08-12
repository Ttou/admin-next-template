import './index.less'

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
  reactive,
  watch,
  withModifiers
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { Actions, Key } from '@/store'

export default defineComponent({
  name: 'Tabs',
  setup() {
    const state = reactive({
      activeKey: ''
    })

    const route = useRoute()
    const router = useRouter()
    const store = useStore(Key)

    const visitedTabs = computed(() => store.state.tabs.visitedTabs)

    const closeLeftDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.path === state.activeKey) === 0
    )

    const closeRightDisabled = computed(
      () =>
        visitedTabs.value.findIndex(tab => tab.path === state.activeKey) ===
        visitedTabs.value.length - 1
    )

    const closeOtherDisabled = computed(() => visitedTabs.value.length <= 1)

    function isActive(tab) {
      return state.activeKey === tab.path
    }

    function addTabs() {
      const { name, path } = route

      // 只添加配置过名称且不是异常和登录页面
      if (name && ['Login', 'Error'].indexOf(name as string) === -1) {
        store.dispatch(Actions.tabs.addTab, route)
        state.activeKey = path
      }
      return false
    }

    function handleRefreshTab() {
      store.dispatch(Actions.tabs.delCachedTab, route as any).then(() => {
        const { fullPath } = route

        nextTick(() => {
          router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    }

    function handleCloseTab(tab) {
      store.dispatch(Actions.tabs.delTab, tab).then(({ visitedTabs }) => {
        if (isActive(tab)) {
          toLastTab(visitedTabs)
        }
      })
    }

    function handleCloseLeftTabs() {
      store.dispatch(Actions.tabs.delLeftTabs, route)
    }

    function handleCloseRightTabs() {
      store.dispatch(Actions.tabs.delRightTabs, route)
    }

    function handleCloseOtherTabs() {
      store.dispatch(Actions.tabs.delOthersTabs, route)
    }

    function handleCloseAllTabs() {
      store.dispatch(Actions.tabs.delAllTabs).then(({ visitedTabs }) => {
        toLastTab(visitedTabs)
      })
    }

    function handleSelectTab(activeKey: string) {
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
      state,
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
      <div class="tabbar">
        <Tabs
          v-model={[this.state.activeKey, 'activeKey']}
          onChange={this.handleSelectTab}
        >
          {this.visitedTabs.map(view => (
            <Tabs.TabPane
              tab={() => (
                <div class="tab-content">
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
              <div class="tabs-menu">
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
        />
      </div>
    )
  }
})

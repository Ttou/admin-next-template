import { Icon } from '@iconify/vue'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTabPane,
  ElTabs,
  type TabPaneName
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

type ICommand =
  | 'refresh'
  | 'closeLeft'
  | 'closeRight'
  | 'closeOther'
  | 'closeAll'
type ICommandMap = Record<ICommand, () => void>

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
      } as ICommandMap
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

    function handleCloseTab(tabName: TabPaneName) {
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

    function handleCommand(command: ICommand) {
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
              key={v.fullPath}
              name={v.fullPath}
              label={v.meta.title as string}
              closable
            ></ElTabPane>
          ))}
        </ElTabs>
        <ElDropdown onCommand={this.handleCommand}>
          {{
            default: () => (
              <div class={styles.tabsMenu}>
                <Icon icon="@local:icon-park-outline:down" inline={true} />
              </div>
            ),
            dropdown: () => (
              <ElDropdownMenu class={styles.tabsDropdownMenu}>
                <ElDropdownItem command="refresh">
                  <Icon icon="@local:icon-park-outline:redo" inline={true} />
                  <span>{this.$t('app.messages.refreshPage')}</span>
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeLeft"
                  disabled={this.closeLeftDisabled}
                  divided
                >
                  <Icon icon="@local:icon-park-outline:to-left" inline={true} />
                  <span>{this.$t('app.messages.closeLeftPage')}</span>
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeRight"
                  disabled={this.closeRightDisabled}
                >
                  <Icon
                    icon="@local:icon-park-outline:to-right"
                    inline={true}
                  />
                  <span>{this.$t('app.messages.closeRightPage')}</span>
                </ElDropdownItem>
                <ElDropdownItem
                  command="closeOther"
                  disabled={this.closeOtherDisabled}
                  divided
                >
                  <Icon icon="@local:icon-park-outline:close" inline={true} />
                  <span>{this.$t('app.messages.closeOtherPage')}</span>
                </ElDropdownItem>
                <ElDropdownItem command="closeAll">
                  <Icon
                    icon="@local:icon-park-outline:close-one"
                    inline={true}
                  />
                  <span>{this.$t('app.messages.closeAllPage')}</span>
                </ElDropdownItem>
              </ElDropdownMenu>
            )
          }}
        </ElDropdown>
      </div>
    )
  }
})

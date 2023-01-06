import { ElMenu } from 'element-plus'
import { cloneDeep } from 'lodash-unified'
import { computed, defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'

import { usePermissionStore, useSettingStore } from '@/store'
import vars from '@/styles/var.module.css'

import MainMenu from './MainMenu'
import styles from './Menu.module.css'
import SubMenu from './SubMenu'

export default defineComponent({
  name: 'Menu',
  components: {
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
      activeMenu,
      setting
    }
  },
  render() {
    const renderItem = (item: Menu) =>
      item.children ? <SubMenu item={item} /> : <MainMenu item={item} />

    return (
      <ElMenu
        class={styles.menu}
        defaultActive={this.activeMenu}
        mode={'vertical'}
        backgroundColor={vars.menuBg}
        textColor={vars.menuText}
        activeTextColor={vars.menuActiveText}
        collapse={!this.setting.sideOpened}
        collapseTransition={false}
        uniqueOpened
      >
        {this.list.map(renderItem)}
      </ElMenu>
    )
  }
})

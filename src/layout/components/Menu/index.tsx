import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import { Key } from '@/store'

import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import { Route } from './types'

export default defineComponent({
  name: 'Menu',
  components: {
    SubMenu
  },
  setup() {
    const state = reactive({
      list: [] as any,
      openKeys: [] as any,
      selectedKeys: [] as any
    })

    const route = useRoute()
    const store = useStore(Key)

    const routes = computed(() => store.state.permission.routes)
    const settings = computed(() => store.state.settings)

    function isDashboard(route: Route) {
      return route.name === 'Dashboard'
    }

    function createMenu(routes: Route[], basePath = '') {
      for (const route of routes) {
        if (!isDashboard(route)) {
          route.path =
            basePath +
            (route.path.startsWith('/') ? route.path : `/${route.path}`)
        } else {
          route.path = `/${route.path}`
        }

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
      const _routes = createMenu(cloneDeep(routes.value))
      state.list = _routes
    }

    watch(
      () => route.path,
      val => {
        init()
        state.openKeys = [...route.matched.map(item => item.path)]
        state.selectedKeys = [val]
      },
      {
        immediate: true
      }
    )

    return {
      state,
      settings
    }
  },
  render() {
    return (
      <Menu
        mode="inline"
        theme={this.settings.siderTheme}
        v-models={[
          [this.state.openKeys, 'openKeys'],
          [this.state.selectedKeys, 'selectedKeys']
        ]}
      >
        {this.state.list.map(item =>
          item.children ? <SubMenu item={item} /> : <MainMenu item={item} />
        )}
      </Menu>
    )
  }
})

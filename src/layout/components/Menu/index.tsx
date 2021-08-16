import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref, unref, watch } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import { Key } from '@/store'

import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import type { Item } from './types'

export default defineComponent({
  name: 'Menu',
  components: {
    SubMenu
  },
  setup() {
    const state = ref({
      list: [] as any,
      openKeys: [] as any,
      selectedKeys: [] as any
    })

    const route = useRoute()
    const store = useStore(Key)

    const routes = computed(() => cloneDeep(store.state.permission.routes))
    const settings = computed(() => store.state.settings)

    function createMenu(routes: RouteRecordRaw[], basePath = '') {
      for (const route of routes) {
        if (route.name !== 'Dashboard') {
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
      const _routes = createMenu(routes.value)
      unref(state).list = _routes
    }

    watch(
      () => route.path,
      val => {
        init()
        unref(state).openKeys = [...route.matched.map(item => item.path)]
        unref(state).selectedKeys = [val]
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
    const renderItem = (item: Item) =>
      item.children ? <SubMenu item={item} /> : <MainMenu item={item} />

    return (
      <Menu
        mode="inline"
        theme={this.settings.siderTheme}
        v-models={[
          [this.state.openKeys, 'openKeys'],
          [this.state.selectedKeys, 'selectedKeys']
        ]}
      >
        {this.state.list.map(renderItem)}
      </Menu>
    )
  }
})

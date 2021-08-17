import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { computed, CSSProperties, defineComponent, ref, watch } from 'vue'
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
    const list = ref([] as any[])
    const openKeys = ref([] as any[])
    const selectedKeys = ref([] as any[])

    const route = useRoute()
    const store = useStore(Key)

    const routes = computed(() => cloneDeep(store.state.permission.routes))
    const settings = computed(() => store.state.settings)

    const style = computed(() => {
      const ret = {} as CSSProperties

      ret.minHeight = `calc(100vh - ${settings.value.siderLogoHeight})`

      return ret
    })

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
      list.value = _routes
    }

    watch(
      () => route.path,
      val => {
        init()
        openKeys.value = [...route.matched.map(item => item.path)]
        selectedKeys.value = [val]
      },
      {
        immediate: true
      }
    )

    return {
      list,
      openKeys,
      selectedKeys,
      settings,
      style
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
          [this.openKeys, 'openKeys'],
          [this.selectedKeys, 'selectedKeys']
        ]}
        style={this.style}
      >
        {this.list.map(renderItem)}
      </Menu>
    )
  }
})

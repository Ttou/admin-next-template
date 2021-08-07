import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { resolve } from 'path'
import { computed, defineComponent, onMounted, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
    const router = useRouter()
    const store = useStore(Key)

    const settings = computed(() => store.state.settings)

    function createMenu(routes: Route[], basePath = '/') {
      for (const route of routes) {
        route.path = resolve(basePath, route.path)

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

    watch(
      () => route.path,
      val => {
        state.openKeys = [...route.matched.map(item => item.path)]
        state.selectedKeys = [val]
      },
      {
        immediate: true
      }
    )

    onMounted(() => {
      const routes = router.options.routes

      const newRoutes = createMenu(cloneDeep(routes) as any)

      state.list = newRoutes
    })

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
          item.children ? (
            <SubMenu menuInfo={item} key={item.key} />
          ) : (
            <MainMenu menuInfo={item} />
          )
        )}
      </Menu>
    )
  }
})

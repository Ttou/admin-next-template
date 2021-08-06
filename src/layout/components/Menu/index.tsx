import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { resolve } from 'path'
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

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
      openKeys: [],
      selectedKeys: []
    })

    const router = useRouter()

    function createMenu(routes: Route[], basePath = '/') {
      for (const route of routes) {
        route.path = resolve(basePath, route.path)
        route.key = route.path

        delete route.component
        delete route.redirect

        if (route.children) {
          createMenu(route.children, route.path)
        }
      }

      return routes
    }

    onMounted(() => {
      const routes = router.options.routes

      const newRoutes = createMenu(cloneDeep(routes) as any)

      state.list = newRoutes

      console.log(newRoutes)
    })

    return {
      state
    }
  },
  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
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

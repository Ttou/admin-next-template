import { Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
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

    function createMenu(routes: Route[], basePath = '') {
      for (const route of routes) {
        route.path =
          basePath + (/^\//.test(route.path) ? route.path : `/${route.path}`)

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
      const routes = createMenu(cloneDeep(router.options.routes) as any)
      state.list = routes
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
      init()
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
            <SubMenu item={item} key={item.key} />
          ) : (
            <MainMenu item={item} />
          )
        )}
      </Menu>
    )
  }
})

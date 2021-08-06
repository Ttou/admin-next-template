import './index.less'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { Layout, Menu } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { resolve } from 'path'
import { defineComponent, nextTick, onMounted, reactive } from 'vue'
import { RouteRecordRaw, RouterLink, RouterView, useRouter } from 'vue-router'

import { MainMenu, SubMenu } from './components'

export default defineComponent({
  name: 'Layout',
  components: {
    SubMenu
  },
  setup() {
    const state = reactive({
      collapsed: false,
      openKeys: [],
      selectedKeys: [],
      list: []
    })

    const router = useRouter()

    function handleToggleCollapsed() {
      state.collapsed = !state.collapsed
    }

    function createMenu(routes: RouteRecordRaw[], basePath = '/') {
      for (const route of routes) {
        if (route.meta) {
          if (route.meta.hidden) {
            route.hidden = route.meta.hidden
          }

          if (route.meta.title) {
            route.title = route.meta.title
          }

          if (route.meta.icon) {
            route.icon = route.meta.icon
          }

          delete route.meta
        }

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
      nextTick(() => {
        const routes = router.options.routes

        const newRoutes = createMenu(cloneDeep(routes))

        state.list = newRoutes

        console.log(newRoutes)
      })
    })

    return {
      state,
      handleToggleCollapsed
    }
  },
  render() {
    return (
      <Layout class="layout">
        <Layout.Sider
          collapsed={this.state.collapsed}
          trigger={null}
          theme="dark"
          width={'256px'}
          collapsible
        >
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
                <MainMenu {...item} key={item.key} />
              )
            )}
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header class="layout-header">
            <div class="collapsed-icon" onClick={this.handleToggleCollapsed}>
              {this.state.collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )}
            </div>
          </Layout.Header>
          <Layout.Content>
            <RouterView />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
})

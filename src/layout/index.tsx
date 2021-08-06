import './index.less'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { Layout } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'
import { RouterView } from 'vue-router'

import { Menu } from './components'

export default defineComponent({
  name: 'Layout',
  setup() {
    const state = reactive({
      collapsed: false
    })

    function handleToggleCollapsed() {
      state.collapsed = !state.collapsed
    }

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
          <Menu />
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

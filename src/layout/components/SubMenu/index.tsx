import { Menu } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { propTypes } from '@/utils'

export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: propTypes.object().def({})
  },
  setup() {
    return {}
  },
  render() {
    return (
      <Menu.SubMenu
        key={this.menuInfo.key}
        icon={this.menuInfo.icon}
        title={this.menuInfo.title}
      >
        {this.menuInfo.children.map(item =>
          item.children ? (
            <sub-menu menuInfo={item} key={item.key}></sub-menu>
          ) : (
            <Menu.Item icon={item.icon} key={item.key}>
              <RouterLink to={item.path}>{item.title}</RouterLink>
            </Menu.Item>
          )
        )}
      </Menu.SubMenu>
    )
  }
})

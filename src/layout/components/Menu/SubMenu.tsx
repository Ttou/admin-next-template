import { Menu } from 'ant-design-vue'
import { defineComponent } from 'vue'

import { propTypes } from '@/utils'

import MainMenu from './MainMenu'
import type { MenuInfo } from './types'

export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: propTypes.object<MenuInfo>().isRequired
  },
  render() {
    return (
      <Menu.SubMenu
        key={this.menuInfo.key}
        icon={this.menuInfo.meta.icon}
        title={this.menuInfo.meta.title}
      >
        {this.menuInfo.children.map(item =>
          item.children ? (
            <sub-menu menuInfo={item} key={item.key}></sub-menu>
          ) : (
            <MainMenu menuInfo={item} />
          )
        )}
      </Menu.SubMenu>
    )
  }
})

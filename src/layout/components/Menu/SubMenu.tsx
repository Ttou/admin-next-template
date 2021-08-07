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
    return this.menuInfo.children?.length === 1 &&
      !this.menuInfo.meta.alwaysShow ? (
      <MainMenu menuInfo={this.menuInfo.children?.[0]} />
    ) : (
      <Menu.SubMenu
        key={this.menuInfo.path}
        icon={this.menuInfo.meta.icon}
        title={this.menuInfo.meta.title}
      >
        {this.menuInfo.children?.map(item =>
          item.children ? (
            <sub-menu menuInfo={item} key={item.path}></sub-menu>
          ) : (
            <MainMenu menuInfo={item} />
          )
        )}
      </Menu.SubMenu>
    )
  }
})

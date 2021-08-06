import { Menu } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { propTypes } from '@/utils'

import type { MenuInfo } from './types'

export default defineComponent({
  name: 'MainMenu',
  props: {
    menuInfo: propTypes.object<MenuInfo>().isRequired
  },
  render() {
    return (
      <Menu.Item icon={this.menuInfo.meta.icon} key={this.menuInfo.key}>
        <RouterLink to={this.menuInfo.path}>
          {this.menuInfo.meta.title}
        </RouterLink>
      </Menu.Item>
    )
  }
})

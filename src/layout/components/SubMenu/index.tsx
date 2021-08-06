import { Menu } from 'ant-design-vue'
import { defineComponent } from 'vue'

import { propTypes } from '@/utils'

import { MainMenu } from '../'

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
            <MainMenu {...item} key={item.key} />
          )
        )}
      </Menu.SubMenu>
    )
  }
})

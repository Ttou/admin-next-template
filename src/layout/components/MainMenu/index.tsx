import { Menu } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { propTypes } from '@/utils'

export default defineComponent({
  name: 'MainMenu',
  props: {
    title: propTypes.vnode().def(null),
    icon: propTypes.vnode().def(null),
    path: propTypes.string().def('')
  },
  render() {
    return (
      <Menu.Item icon={this.icon}>
        <RouterLink to={this.path}>{this.title}</RouterLink>
      </Menu.Item>
    )
  }
})

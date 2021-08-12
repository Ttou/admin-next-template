import { Menu } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { propTypes } from '@/utils'

import type { Item } from './types'

export default defineComponent({
  name: 'MainMenu',
  props: {
    item: propTypes.object<Item>().isRequired
  },
  setup(props) {
    const show = computed(() => {
      if (props.item.meta) {
        if (props.item.meta.hidden) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })

    return {
      show
    }
  },
  render() {
    return this.show ? (
      <Menu.Item icon={this.item.meta.icon} key={this.item.path}>
        <RouterLink to={this.item.path}>{this.item.meta.title}</RouterLink>
      </Menu.Item>
    ) : null
  }
})

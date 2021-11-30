import { Menu } from 'ant-design-vue'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { SvgIcon } from '@/components'

import type { Item } from './types'

export default defineComponent({
  name: 'MainMenu',
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true
    }
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
      <Menu.Item
        icon={<SvgIcon name={this.item.meta.icon} />}
        key={this.item.path}
      >
        <RouterLink to={this.item.path}>{this.item.meta.title}</RouterLink>
      </Menu.Item>
    ) : null
  }
})

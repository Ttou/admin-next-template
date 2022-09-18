import { Icon } from '@iconify/vue'
import { MenuItem } from 'ant-design-vue'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import type { MenuItem as Item } from './MenuTypes'

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
      <MenuItem
        icon={this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null}
        key={this.item.path}
      >
        <RouterLink to={this.item.path}>{this.item.meta.title}</RouterLink>
      </MenuItem>
    ) : null
  }
})

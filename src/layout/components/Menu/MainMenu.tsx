import { Icon } from '@iconify/vue'
import { ElMenuItem } from 'element-plus'
import { type PropType, computed, defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'MainMenu',
  props: {
    item: {
      type: Object as PropType<Menu>,
      required: true
    },
    collapse: {
      type: Boolean,
      default: false
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
      <ElMenuItem
        index={this.item.path}
        v-slots={{
          ['title']: () => (
            <>
              {this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null}
              {!this.collapse ? (
                <RouterLink to={this.item.path}>
                  {this.item.meta.title}
                </RouterLink>
              ) : null}
            </>
          )
        }}
      ></ElMenuItem>
    ) : null
  }
})

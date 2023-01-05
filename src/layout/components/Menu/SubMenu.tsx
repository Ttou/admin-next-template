import { Icon } from '@iconify/vue'
import { ElSubMenu } from 'element-plus'
import { type PropType, computed, defineComponent } from 'vue'

import MainMenu from './MainMenu'

export default defineComponent({
  name: 'SubMenu',
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
    const onlyOneChild = computed(() => {
      if (props.item.children!.length === 1) {
        if (props.item.meta) {
          if (props.item.meta.alwaysShow) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      } else {
        return false
      }
    })

    return {
      onlyOneChild
    }
  },
  render() {
    return this.onlyOneChild ? (
      <MainMenu item={this.item.children![0]} />
    ) : (
      <ElSubMenu
        index={this.item.path}
        v-slots={{
          ['title']: () => (
            <>
              {this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null}
              {!this.collapse ? <span>{this.item.meta.title}</span> : null}
            </>
          )
        }}
      >
        {this.item.children?.map(item =>
          item.children ? (
            <sub-menu item={item} collapse={this.collapse} />
          ) : (
            <MainMenu item={item} collapse={this.collapse} />
          )
        )}
      </ElSubMenu>
    )
  }
})

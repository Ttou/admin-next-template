import { Icon } from '@iconify/vue'
import { ElSubMenu } from 'element-plus'
import { computed, defineComponent, type PropType } from 'vue'

import MainMenu from './MainMenu'

export default defineComponent({
  name: 'SubMenu',
  props: {
    item: {
      type: Object as PropType<Menu>,
      required: true
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
              {this.item.meta.icon ? (
                <Icon class="el-icon" icon={this.item.meta.icon} />
              ) : null}
              <span>{this.item.meta.title}</span>
            </>
          )
        }}
      >
        {this.item.children?.map(item =>
          item.children ? <sub-menu item={item} /> : <MainMenu item={item} />
        )}
      </ElSubMenu>
    )
  }
})

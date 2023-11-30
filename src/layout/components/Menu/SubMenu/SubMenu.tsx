import { Icon } from '@iconify/vue'
import { ElSubMenu } from 'element-plus'
import { computed, defineComponent } from 'vue'

import { MainMenu } from '../MainMenu'

export default defineComponent({
  name: 'SubMenu',
  props: {
    item: {
      type: Object,
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
      <MainMenu item={this.item.children[0]} />
    ) : (
      <ElSubMenu index={this.item.path}>
        {{
          title: () => (
            <>
              {this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null}
              <span>{this.item.meta.title}</span>
            </>
          ),
          default: () =>
            this.item.children.map(v =>
              v.children ? (
                <sub-menu item={v} key={v.path} />
              ) : (
                <MainMenu item={v} key={v.path} />
              )
            )
        }}
      </ElSubMenu>
    )
  }
})

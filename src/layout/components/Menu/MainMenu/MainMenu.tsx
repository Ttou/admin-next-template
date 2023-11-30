import { Icon } from '@iconify/vue'
import { ElMenuItem } from 'element-plus'
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainMenu',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

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

    function handleJump() {
      if (route.path === props.item.path) {
        return
      }
      router.push(props.item.path).catch(err => {
        console.error(err)
      })
    }

    return {
      show,
      handleJump
    }
  },
  render() {
    return this.show ? (
      <ElMenuItem index={this.item.path} onClick={this.handleJump}>
        {{
          default: () =>
            this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null,
          title: () => <span>{this.item.meta.title}</span>
        }}
      </ElMenuItem>
    ) : null
  }
})

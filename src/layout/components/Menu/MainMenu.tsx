import { Icon } from '@iconify/vue'
import { ElMenuItem } from 'element-plus'
import { type PropType, computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainMenu',
  props: {
    item: {
      type: Object as PropType<Menu>,
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
      <ElMenuItem
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
        onClick={this.handleJump}
      />
    ) : null
  }
})

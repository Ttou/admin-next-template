import { ElButton, ElResult } from 'element-plus'
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type Status = '403' | '404' | '500'

const STATUS_MAP = {
  403: {
    title: '权限不够',
    icon: 'error'
  },
  404: {
    title: '页面不存在',
    icon: 'error'
  },
  500: {
    title: '服务器异常',
    icon: 'error'
  }
}

export default defineComponent({
  name: 'ErrorView',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const status = computed(() => {
      return route.query.status as Status
    })

    function handleClick() {
      router.replace('/')
    }

    return {
      status,
      handleClick
    }
  },
  render() {
    return (
      <ElResult
        title={this.status}
        subTitle={STATUS_MAP[this.status].title}
        icon={STATUS_MAP[this.status].icon}
        v-slots={{
          ['extra']: () => (
            <ElButton type="primary" onClick={this.handleClick}>
              返回首页
            </ElButton>
          )
        }}
      />
    )
  }
})

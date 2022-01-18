import { Button, Result } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { SUB_TITLE_MAP } from './constants'
import type { Status } from './types'

export default defineComponent({
  name: 'ErrorView',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const status = computed(() => {
      return route.query.status as Status
    })

    const subTitle = computed(() => SUB_TITLE_MAP[status.value!])

    function handleClick() {
      router.replace('/')
    }

    return {
      status,
      subTitle,
      handleClick
    }
  },
  render() {
    return (
      <Result status={this.status} title={this.status} subTitle={this.subTitle}>
        {{
          extra: () => (
            <Button type="primary" onClick={this.handleClick}>
              返回首页
            </Button>
          )
        }}
      </Result>
    )
  }
})

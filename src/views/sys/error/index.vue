<template>
  <el-result :title="status" :subTitle="subTitle" :icon="icon">
    <template #extra>
      <el-button type="primary" @click="handleClick">返回首页</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
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

    const subTitle = computed(() => STATUS_MAP[status.value].title)

    const icon = computed(() => STATUS_MAP[status.value].icon)

    function handleClick() {
      router.replace('/')
    }

    return {
      status,
      subTitle,
      icon,
      handleClick
    }
  }
})
</script>

<template>
  <div>
    <el-input v-model="inputValue">
      <template #suffix>
        <el-button
          type="primary"
          style="margin-right: -11px"
          @click="handleCopy"
        >
          复制
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { copyText, getElementFnFromInstance } from '@/utils'

export default defineComponent({
  setup() {
    const state = reactive({
      inputValue: 'http://www.baidu.com'
    })

    const { $message } = getElementFnFromInstance()

    async function handleCopy() {
      const result = await copyText(state.inputValue)

      if (result) {
        $message.success('复制成功')
      } else {
        $message.error('复制失败')
      }
    }

    return {
      ...toRefs(state),
      handleCopy
    }
  }
})
</script>

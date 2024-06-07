<template>
  <div class="view">
    <div class="btnsWrap">
      <el-button @click="handleGetHTML">获取 HTML</el-button>
      <el-button @click="handleGetTXT">获取 TXT</el-button>
      <el-button @click="handleClear">清除内容</el-button>
    </div>
    <ProEditor ref="editorRef" :content="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { ProEditor, type ProEditorRef } from '@/components'
import { getElementFnFromInstance } from '@/utils'

export default defineComponent({
  components: {
    ProEditor
  },
  setup() {
    const state = reactive({
      editorRef: undefined as Undefined<ProEditorRef>,
      content: '<p><strong>演示内容</strong></p>'
    })

    const { $message } = getElementFnFromInstance()

    function handleGetHTML() {
      const value = state.editorRef?.editor?.getHtml()
      $message.info(value!)
    }

    function handleGetTXT() {
      const value = state.editorRef?.editor?.getText()
      $message.info(value!)
    }

    function handleClear() {
      state.editorRef?.editor?.clear()
    }

    return {
      ...toRefs(state),
      handleGetHTML,
      handleGetTXT,
      handleClear
    }
  }
})
</script>

<style scoped>
.view {
  .btnsWrap {
    margin-bottom: 10px;
  }
}
</style>

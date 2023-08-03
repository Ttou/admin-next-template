<template>
  <div class="view">
    <div class="btnsWrap">
      <el-button @click="handleGetHTML">获取 HTML</el-button>
      <el-button @click="handleGetTXT">获取 TXT</el-button>
      <el-button @click="handleClear">清除内容</el-button>
    </div>
    <ProEditor ref="editorRef" v-bind="editorConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { ProEditor, type ProEditorProps, type ProEditorRef } from '@/components'
import { getElementFnFromInstance } from '@/utils'

export default defineComponent({
  components: {
    ProEditor
  },
  setup() {
    const state = reactive({
      editorConfig: {
        editorHtml: '',
        editorVisible: false
      } as ProEditorProps,
      editorRef: undefined as Undefined<ProEditorRef>
    })

    const { $message } = getElementFnFromInstance()

    function handleGetHTML() {
      const value = state.editorRef?.editor.getHtml()
      $message.info(value!)
    }

    function handleGetTXT() {
      const value = state.editorRef?.editor.getText()
      $message.info(value)
    }

    function handleClear() {
      state.editorRef?.editor.clear()
    }

    onMounted(() => {
      setTimeout(() => {
        state.editorConfig.editorHtml = '<p><strong>哈哈</strong></p>'
        state.editorConfig.editorVisible = true
      }, 1500)
    })

    return {
      ...toRefs(state),
      handleGetHTML,
      handleGetTXT,
      handleClear
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  .btnsWrap {
    margin-bottom: 10px;
  }
}
</style>

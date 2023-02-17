import { ElButton, ElMessage, ElSpace } from 'element-plus'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { ProEditor, type ProEditorProps, type ProEditorRef } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    const state = reactive({
      editorConfig: {
        editorHtml: '',
        editorVisible: false
      } as ProEditorProps,
      editorRef: {} as ProEditorRef
    })

    function handleGetHTML() {
      const value = state.editorRef.editor.getHtml()
      ElMessage.info(value!)
    }

    function handleGetTXT() {
      const value = state.editorRef.editor.getText()
      ElMessage.info(value)
    }

    function handleClear() {
      state.editorRef.editor.clear()
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
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.btnsWrap}>
          <ElSpace>
            <ElButton onClick={this.handleGetHTML}>获取 HTML</ElButton>
            <ElButton onClick={this.handleGetTXT}>获取 TXT</ElButton>
            <ElButton onClick={this.handleClear}>清除内容</ElButton>
          </ElSpace>
        </div>
        <ProEditor ref="editorRef" {...this.editorConfig} />
      </div>
    )
  }
})

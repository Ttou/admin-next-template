import { Button, message, Space } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

import { type ProEditorProps, type ProEditorRef, ProEditor } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'DemoEditor',
  setup() {
    const editorConfig = ref({
      editorHtml: '',
      editorVisible: false
    } as ProEditorProps)
    const editorRef = ref({} as ProEditorRef)

    function handleGetHTML() {
      const value = editorRef.value.editor.getHtml()
      message.info(value!)
    }

    function handleGetTXT() {
      const value = editorRef.value.editor.getText()
      message.info(value)
    }

    function handleClear() {
      editorRef.value.editor.clear()
    }

    onMounted(() => {
      setTimeout(() => {
        editorConfig.value.editorHtml = '<p><b>哈哈</b></p>'
        editorConfig.value.editorVisible = true
      }, 1500)
    })

    return {
      editorConfig,
      editorRef,
      handleGetHTML,
      handleGetTXT,
      handleClear
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.btnsWrap}>
          <Space>
            <Button onClick={this.handleGetHTML}>获取 HTML</Button>
            <Button onClick={this.handleGetTXT}>获取 TXT</Button>
            <Button onClick={this.handleClear}>清除内容</Button>
          </Space>
        </div>
        <ProEditor ref="editorRef" {...this.editorConfig} />
      </div>
    )
  }
})

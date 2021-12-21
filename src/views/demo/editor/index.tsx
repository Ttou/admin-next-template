import { Button, message, Space } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { ProEditor } from '@/components'
import type { ProEditorProps, ProEditorRef } from '@/components/ProEditor/types'

import * as css from './index.css'

export default defineComponent({
  name: 'DemoEditor',
  setup() {
    const editorConfig = ref({} as ProEditorProps)
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
      <div class={css.view}>
        <div class={css.btnsWrap}>
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

import { Button, message, Space } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'

import { ProEditor } from '@/components'
import type { EditorRef } from '@/components/ProEditor/types'

import * as css from './index.css'

export default defineComponent({
  name: 'DemoEditor',
  setup() {
    const editorRef = ref({} as EditorRef)

    function handleGetHTML() {
      const value = editorRef.value.editor.txt.html()

      message.info(value!)
    }

    function handleGetTXT() {
      const value = editorRef.value.editor.txt.text()

      message.info(value)
    }

    function handleClear() {
      editorRef.value.editor.txt.clear()
    }

    return {
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
        <ProEditor ref="editorRef" />
      </div>
    )
  }
})

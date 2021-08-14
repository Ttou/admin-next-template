import './index.less'

import { Button, message, Space } from 'ant-design-vue'
import { defineComponent, ref, unref } from 'vue'

import { ProEditor } from '@/components'
import type { EditorRef } from '@/components/ProEditor/types'

export default defineComponent({
  name: 'DemoEditor',
  setup() {
    const editorRef = ref({} as EditorRef)

    function handleGetHTML() {
      const value = unref(editorRef).editor.txt.html()

      message.info(value!)
    }

    function handleGetTXT() {
      const value = unref(editorRef).editor.txt.text()

      message.info(value)
    }

    function handleClear() {
      unref(editorRef).editor.txt.clear()
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
      <div class="demo-editor-view">
        <div class="btns-wrap">
          <Space>
            <Button onClick={this.handleGetHTML}>获取 HTML</Button>
            <Button onClick={this.handleGetTXT}>获取 TXT</Button>
            <Button onClick={this.handleClear}>清楚内容</Button>
          </Space>
        </div>
        <ProEditor ref="editorRef" />
      </div>
    )
  }
})

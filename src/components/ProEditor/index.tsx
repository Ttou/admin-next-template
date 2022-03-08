import '@wangeditor/editor/dist/css/style.css'

import { IDomEditor } from '@wangeditor/editor'
import {
  Editor,
  getEditor,
  removeEditor,
  Toolbar
} from '@wangeditor/editor-for-vue'
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ProEditor',
  props,
  setup() {
    const editor = ref<Nullable<IDomEditor>>(null)
    const editorId = ref(`pro-editor-${Math.random().toString().slice(-5)}`)

    onMounted(() => {
      nextTick(() => {
        editor.value = getEditor(editorId.value)
      })
    })

    onBeforeUnmount(() => {
      if (!editor.value) return

      editor.value.destroy()
      removeEditor(editorId.value)
    })

    return {
      editor,
      editorId
    }
  },
  render() {
    return this.editorVisible ? (
      <div style={this.wrapStyle}>
        <Toolbar editorId={this.editorId} style={this.toolbarStyle} />
        <Editor
          editorId={this.editorId}
          defaultHtml={this.editorHtml}
          style={this.editorStyle}
        />
      </div>
    ) : (
      <div style={this.wrapStyle}>
        <div
          style={{
            ...this.editorStyle,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          编辑器正在初始化...
        </div>
      </div>
    )
  }
})

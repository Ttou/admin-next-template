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
    const editorId = ref(`w-e-${Math.random().toString().slice(-5)}`)

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
    return (
      <div style={this.wrapStyle}>
        <Toolbar editorId={this.editorId} style={this.toolbarStyle} />
        <Editor editorId={this.editorId} style={this.editorStyle} />
      </div>
    )
  }
})

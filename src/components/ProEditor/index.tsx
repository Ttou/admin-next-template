import '@wangeditor/editor/dist/css/style.css'

import { IDomEditor } from '@wangeditor/editor'
import {
  Editor,
  getEditor,
  removeEditor,
  Toolbar
} from '@wangeditor/editor-for-vue'
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'

import props from './props'

export default defineComponent({
  name: 'ProEditor',
  props,
  setup(props) {
    const editor = ref<Nullable<IDomEditor>>(null)
    const editorId = ref(`pro-editor-${Math.random().toString().slice(-5)}`)

    function init() {
      nextTick(() => {
        editor.value = getEditor(editorId.value)
      })
    }

    watch(
      () => props.editorVisible,
      (newVal, oldVal) => {
        if (newVal) {
          init()
        }
      }
    )

    onMounted(() => {
      init()
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
        <Toolbar
          editorId={this.editorId}
          defaultConfig={this.toolbarConfig}
          style={this.toolbarStyle}
        />
        <Editor
          editorId={this.editorId}
          defaultConfig={this.editorConfig}
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

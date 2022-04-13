import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { defineComponent, onBeforeUnmount, shallowRef } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ProEditor',
  props,
  setup(props) {
    const editor = shallowRef<Nullable<IDomEditor>>(null)

    function handleCreated(_editor: IDomEditor) {
      editor.value = _editor
    }

    onBeforeUnmount(() => {
      if (!editor.value) return

      editor.value.destroy()
    })

    return {
      editor,
      handleCreated
    }
  },
  render() {
    return this.editorVisible ? (
      <div style={this.wrapStyle}>
        <Toolbar
          editor={this.editor!}
          defaultConfig={this.toolbarConfig}
          style={this.toolbarStyle}
        />
        <Editor
          defaultConfig={this.editorConfig}
          defaultHtml={this.editorHtml}
          style={this.editorStyle}
          onOnCreated={this.handleCreated}
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

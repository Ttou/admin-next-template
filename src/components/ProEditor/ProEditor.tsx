import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  shallowRef,
  type StyleValue
} from 'vue'

import { proEditorProps } from './ProEditor.constant'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  setup(props) {
    const editor = shallowRef<Nullable<IDomEditor>>(null)

    const computedWrapStyle = computed<StyleValue>(() => ({
      border: '1px solid #ccc',
      zIndex: 9999,
      ...props.wrapStyle
    }))

    const computedToolbarStyle = computed<StyleValue>(() => ({
      borderBottom: '1px solid #ccc',
      ...props.toolbarStyle
    }))

    const computedEditorStyle = computed<StyleValue>(() => ({
      height: '500px',
      ...props.editorStyle
    }))

    function handleCreated(_editor: IDomEditor) {
      editor.value = _editor
    }

    onBeforeUnmount(() => {
      if (!editor.value) return

      editor.value.destroy()
    })

    return {
      editor,
      computedWrapStyle,
      computedToolbarStyle,
      computedEditorStyle,
      handleCreated
    }
  },
  render() {
    return this.editorVisible ? (
      <div style={this.computedWrapStyle}>
        <Toolbar
          editor={this.editor!}
          defaultConfig={this.toolbarConfig}
          style={this.computedToolbarStyle}
        />
        <Editor
          defaultConfig={this.editorConfig}
          defaultHtml={this.editorHtml}
          style={this.computedEditorStyle}
          onOnCreated={this.handleCreated}
        />
      </div>
    ) : (
      <div style={this.computedWrapStyle}>
        <div
          style={{
            ...(this.computedEditorStyle as any),
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

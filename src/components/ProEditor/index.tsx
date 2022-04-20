import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {
  type CSSProperties,
  computed,
  defineComponent,
  onBeforeUnmount,
  shallowRef
} from 'vue'

import props from './props'

export default defineComponent({
  name: 'ProEditor',
  props,
  setup(props) {
    const editor = shallowRef<Nullable<IDomEditor>>(null)

    const _wrapStyle = computed(
      () =>
        ({
          border: '1px solid #ccc',
          zIndex: 9999,
          ...props.wrapStyle
        } as CSSProperties)
    )

    const _toolbarStyle = computed(
      () =>
        ({
          borderBottom: '1px solid #ccc',
          ...props.toolbarStyle
        } as CSSProperties)
    )

    const _editorStyle = computed(
      () => ({ height: '500px', ...props.editorStyle } as CSSProperties)
    )

    function handleCreated(_editor: IDomEditor) {
      editor.value = _editor
    }

    onBeforeUnmount(() => {
      if (!editor.value) return

      editor.value.destroy()
    })

    return {
      editor,
      _wrapStyle,
      _toolbarStyle,
      _editorStyle,
      handleCreated
    }
  },
  render() {
    return this.editorVisible ? (
      <div style={this._wrapStyle}>
        <Toolbar
          editor={this.editor!}
          defaultConfig={this.toolbarConfig}
          style={this._toolbarStyle}
        />
        <Editor
          defaultConfig={this.editorConfig}
          defaultHtml={this.editorHtml}
          style={this._editorStyle}
          onOnCreated={this.handleCreated}
        />
      </div>
    ) : (
      <div style={this._wrapStyle}>
        <div
          style={{
            ...this._editorStyle,
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

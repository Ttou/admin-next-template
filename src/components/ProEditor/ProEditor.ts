import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  reactive,
  type StyleValue,
  toRefs
} from 'vue'

import { proEditorProps } from './ProEditor.constant'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  setup(props) {
    const state = reactive({
      editor: undefined as Undefined<IDomEditor>
    })

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
      state.editor = _editor
    }

    onBeforeUnmount(() => {
      if (!state.editor) return

      state.editor.destroy()
    })

    return {
      ...toRefs(state),
      computedWrapStyle,
      computedToolbarStyle,
      computedEditorStyle,
      handleCreated
    }
  },
  render() {
    return this.editorVisible
      ? h('div', { style: this.computedWrapStyle }, [
          h(Toolbar, {
            editor: this.editor,
            defaultConfig: this.toolbarConfig,
            style: this.computedToolbarStyle
          }),
          h(Editor, {
            defaultConfig: this.editorConfig,
            defaultHtml: this.editorHtml,
            style: this.computedEditorStyle,
            onOnCreated: this.handleCreated
          })
        ])
      : h(
          'div',
          { style: this.computedWrapStyle },
          h(
            'div',
            {
              style: {
                ...(this.computedEditorStyle as any),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            },
            '编辑器正在初始化...'
          )
        )
  }
})

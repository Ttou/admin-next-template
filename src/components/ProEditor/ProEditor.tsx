import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {
  defineComponent,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  shallowRef
} from 'vue'

import { proEditorProps } from './ProEditor.define'
import styles from './ProEditor.module.css'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const editorRef = shallowRef<IDomEditor>()
    const valueHtml = ref(props.modelValue)

    function handleCreated(editor: IDomEditor) {
      editorRef.value = editor
    }

    function handleChange(editor: IDomEditor) {
      emit('update:modelValue', editor.getHtml())
    }

    onMounted(() => {})

    onBeforeUnmount(() => {
      if (editorRef.value === null) return
      editorRef.value?.destroy()
    })

    onActivated(() => {})

    onDeactivated(() => {})

    return {
      editor: editorRef,
      valueHtml,
      handleCreated,
      handleChange
    }
  },
  render() {
    return (
      <div class={styles.proEditor}>
        <Toolbar
          class={styles.toolbar}
          defaultConfig={this.toolbarConfig}
          mode={this.mode}
          editor={this.editor!}
        />
        <Editor
          class={styles.editor}
          v-model={this.valueHtml}
          defaultConfig={this.editorConfig}
          mode={this.mode}
          onOnCreated={this.handleCreated}
          onOnChange={this.handleChange}
          style={{
            height: this.height
          }}
        />
      </div>
    )
  }
})

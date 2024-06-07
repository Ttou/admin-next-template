import 'aieditor/dist/style.css'

import { AiEditor } from 'aieditor'
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  shallowRef
} from 'vue'

import { defaultOptions, proEditorProps } from './ProEditor.define'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  setup(props) {
    const editorRef = ref<Element>()
    const editor = shallowRef<AiEditor>()

    const editorStyle = computed<CSSProperties>(() => {
      return {
        height: props.height
      }
    })

    onMounted(() => {
      editor.value = new AiEditor({
        element: editorRef.value!,
        content: props.content,
        ...Object.assign({}, defaultOptions, props.options)
      })
    })

    onUnmounted(() => {
      editor.value?.destroy()
    })

    return {
      editor,
      editorRef,
      editorStyle
    }
  },
  render() {
    return <div ref="editorRef" style={this.editorStyle}></div>
  }
})

import 'aieditor/dist/style.css'

import { AiEditor } from 'aieditor'
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  shallowRef,
  toRefs
} from 'vue'

import { defaultOptions, proEditorProps } from './ProEditor.define'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  setup(props) {
    const state = reactive({
      editorRef: shallowRef<HTMLDivElement>(),
      editor: shallowRef<AiEditor>()
    })

    const editorStyle = computed<CSSProperties>(() => {
      return {
        height: props.height
      }
    })

    onMounted(() => {
      state.editor = new AiEditor({
        element: state.editorRef!,
        content: props.content,
        ...Object.assign({}, defaultOptions, props.options)
      })
    })

    onUnmounted(() => {
      state.editor?.destroy()
    })

    return {
      ...toRefs(state),
      editorStyle
    }
  },
  render() {
    return <div ref="editorRef" style={this.editorStyle}></div>
  }
})

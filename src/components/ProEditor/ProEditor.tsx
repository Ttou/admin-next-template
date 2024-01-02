import {
  defineComponent,
  onActivated,
  onDeactivated,
  onMounted,
  reactive,
  toRefs
} from 'vue'

import { genRandomID } from '@/utils'

import { proEditorProps } from './ProEditor.define'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      ue: {} as UEditor,
      editorId: `editor_${genRandomID(6)}`
    })

    function init() {
      state.ue = UE.getEditor(state.editorId, {
        serverUrl: '/api/editor',
        UEDITOR_CORS_URL: '/ueditor-plus/',
        UEDITOR_HOME_URL: '/ueditor-plus/'
      })

      state.ue.addListener('contentChange', handleContentChange)

      state.ue.addListener('ready', () => {
        handleContentEcho()
      })
    }

    function handleContentChange() {
      const content = state.ue.getContent()
      emit('update:modelValue', content)
    }

    function handleContentEcho() {
      state.ue.setContent(props.modelValue, false)
    }

    onMounted(() => {
      init()
    })

    onActivated(() => {
      state.ue.addListener('ready', handleContentEcho)
    })

    onDeactivated(() => {
      state.ue.removeListener('ready', handleContentEcho)
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return <script id={this.editorId} type="text/plain"></script>
  }
})

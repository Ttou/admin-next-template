import { defineComponent, onMounted, ref } from 'vue'
import E from 'wangeditor'

import { propTypes } from '@/utils'

import type { EditorConfig, EditorInstance } from './types'

export default defineComponent({
  name: 'ProEditor',
  props: {
    config: propTypes.object<EditorConfig>().def({
      height: 500
    } as EditorConfig)
  },
  setup(props) {
    const editor = ref({} as EditorInstance)
    const editorEl = ref<ElementRef>(null)

    function init() {
      editor.value = new E(editorEl.value)

      Object.assign(editor.value.config, props.config)

      editor.value.create()
    }

    onMounted(() => {
      init()
    })

    return {
      editor,
      editorEl
    }
  },
  render() {
    return <div ref="editorEl"></div>
  }
})

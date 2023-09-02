<template>
  <div ref="editorRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { proEditorProps } from './ProEditor.constant'

export default defineComponent({
  name: 'ProEditor',
  props: proEditorProps(),
  setup() {
    const state = reactive({
      editorRef: {} as ElementRef,
      ue: {} as UEditor
    })

    function init() {
      state.ue = UE.getEditor(state.editorRef!, {
        serverUrl: '/api/editor',
        UEDITOR_CORS_URL: '/ueditor-plus/',
        UEDITOR_HOME_URL: '/ueditor-plus/'
      })

      state.ue.addListener('langReady', type => {
        if (type === 'langReady') {
          console.log('语言文件加载完成')
        }
      })
    }

    onMounted(() => {
      init()
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<template>
  <div v-if="editorVisible" :style="computedWrapStyle">
    <Toolbar
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :style="computedToolbarStyle"
    />
    <Editor
      :defaultConfig="editorConfig"
      :defaultHtml="editorHtml"
      :style="computedEditorStyle"
      @onCreated="handleCreated"
    />
  </div>
  <div v-else :style="computedWrapStyle">
    <div
      :style="[
        computedEditorStyle,
        { display: 'flex', justifyContent: 'center', alignItems: 'center' }
      ]"
    >
      编辑器正在初始化...
    </div>
  </div>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css'

import type { IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { computed, defineComponent, onBeforeUnmount, shallowRef } from 'vue'

import { props } from './ProEditor.constant'

export default defineComponent({
  name: 'ProEditor',
  components: {
    Editor,
    Toolbar
  },
  props: props(),
  setup(props) {
    const editor = shallowRef<IDomEditor>()

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
  }
})
</script>

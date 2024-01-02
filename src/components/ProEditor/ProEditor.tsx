import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs
} from 'vue'

import { genRandomID } from '@/utils'

export default defineComponent({
  name: 'ProEditor',
  setup() {
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

      state.ue.addListener('langReady', type => {
        if (type === 'langReady') {
          console.log('语言文件加载完成')
        }
      })
    }

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      state.ue.destroy()
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return <div id={this.editorId}></div>
  }
})

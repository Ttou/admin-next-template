import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import type { CSSProperties, PropType } from 'vue'

export default {
  wrapStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({ border: '1px solid #ccc', zIndex: 9999 })
  },
  toolbarConfig: {
    type: Object as PropType<IToolbarConfig>,
    default: () => ({})
  },
  toolbarStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({ borderBottom: '1px solid #ccc' })
  },
  editorConfig: {
    type: Object as PropType<IEditorConfig>,
    default: () => ({})
  },
  editorStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({ height: '500px' })
  },
  editorHtml: {
    type: String,
    default: ''
  },
  editorVisible: {
    type: Boolean,
    default: true
  }
}

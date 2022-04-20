import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import type { CSSProperties, PropType } from 'vue'

export default {
  wrapStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  },
  toolbarConfig: {
    type: Object as PropType<IToolbarConfig>,
    default: () => ({})
  },
  toolbarStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  },
  editorConfig: {
    type: Object as PropType<IEditorConfig>,
    default: () => ({})
  },
  editorStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
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

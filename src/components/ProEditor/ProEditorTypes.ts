import type {
  IDomEditor,
  IEditorConfig,
  IToolbarConfig
} from '@wangeditor/editor'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export const proEditorProps = () => ({
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
})

export type ProEditorProps = Partial<
  ExtractPropTypes<ReturnType<typeof proEditorProps>>
>

export type ProEditorRef = {
  editor: IDomEditor
  editorId: string
}

export default proEditorProps

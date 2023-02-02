import type {
  IDomEditor,
  IEditorConfig,
  IToolbarConfig
} from '@wangeditor/editor'
import type { CSSProperties, PropType } from 'vue'

export const proEditorProps = () => ({
  /**
   * 包裹样式
   */
  wrapStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  },
  /**
   * 工具栏配置
   */
  toolbarConfig: {
    type: Object as PropType<IToolbarConfig>,
    default: () => ({})
  },
  /**
   * 工具栏样式
   */
  toolbarStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  },
  /**
   * 编辑器配置
   */
  editorConfig: {
    type: Object as PropType<IEditorConfig>,
    default: () => ({})
  },
  /**
   * 编辑器样式
   */
  editorStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): CSSProperties => ({})
  },
  /**
   * 编辑器网页内容
   */
  editorHtml: {
    type: String,
    default: ''
  },
  /**
   * 编辑器可见
   */
  editorVisible: {
    type: Boolean,
    default: true
  }
})

export type ProEditorProps = ComponentProps<typeof proEditorProps>

export type ProEditorRef = {
  editor: IDomEditor
  editorId: string
}

import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { bool, object, string } from 'vue-types'

export const proEditorProps = () => ({
  /**
   * 包裹样式
   */
  wrapStyle: object<CSSProperties>().def(() => ({})),
  /**
   * 工具栏配置
   */
  toolbarConfig: object<Partial<IToolbarConfig>>().def(() => ({})),
  /**
   * 工具栏样式
   */
  toolbarStyle: object<CSSProperties>().def(() => ({})),
  /**
   * 编辑器配置
   */
  editorConfig: object<Partial<IEditorConfig>>().def(() => ({})),
  /**
   * 编辑器样式
   */
  editorStyle: object<CSSProperties>().def(() => ({})),
  /**
   * 编辑器网页内容
   */
  editorHtml: string().def(''),
  /**
   * 编辑器可见
   */
  editorVisible: bool().def(true)
})

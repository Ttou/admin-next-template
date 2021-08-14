import type E from 'wangeditor'
import type { ConfigType } from 'wangeditor/src/config'

export type Editor = E

export type EditorConfig = ConfigType

export type EditorRef = {
  editor: Editor
  editorEl: HTMLElement
}

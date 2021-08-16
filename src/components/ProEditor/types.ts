import type E from 'wangeditor'
import type { ConfigType } from 'wangeditor/src/config'

export type EditorInstance = E

export type EditorConfig = ConfigType

export type EditorRef = {
  editor: EditorInstance
  editorEl: HTMLElement
}

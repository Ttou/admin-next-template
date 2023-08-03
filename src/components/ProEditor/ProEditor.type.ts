import type { IDomEditor } from '@wangeditor/editor'

import { proEditorProps } from './ProEditor.constant'

export type ProEditorProps = ComponentProps<typeof proEditorProps>

export type ProEditorRef = {
  editor: IDomEditor
}

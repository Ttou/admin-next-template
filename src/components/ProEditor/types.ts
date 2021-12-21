import { IDomEditor } from '@wangeditor/editor'
import { ExtractPropTypes } from 'vue'

import type props from './props'

export type ProEditorProps = ExtractPropTypes<typeof props>

export type ProEditorRef = {
  editor: IDomEditor
  editorId: string
}

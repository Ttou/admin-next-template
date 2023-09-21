import { proEditorProps } from './ProEditor.constant'
import type ProEditor from './ProEditor.vue'

export type ProEditorProps = ReturnType<typeof proEditorProps>

export type ProEditorRef = InstanceType<typeof ProEditor>

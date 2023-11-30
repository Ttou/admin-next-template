import type ProEditor from './ProEditor'

export const proEditorProps = () => ({})

export type ProEditorProps = ReturnType<typeof proEditorProps>

export type ProEditorRef = InstanceType<typeof ProEditor>

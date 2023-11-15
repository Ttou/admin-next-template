import type ProEditor from './ProEditor.vue'

export const proEditorProps = () => ({})

export type ProEditorProps = ReturnType<typeof proEditorProps>

export type ProEditorRef = InstanceType<typeof ProEditor>

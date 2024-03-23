import { string } from 'vue-types'

import type ProEditor from './ProEditor'

export const proEditorProps = () => ({
  modelValue: string().def('')
})

export type ProEditorProps = Partial<
  ExtractPropTypes<ReturnType<typeof proEditorProps>>
>

export type ProEditorRef = InstanceType<typeof ProEditor>

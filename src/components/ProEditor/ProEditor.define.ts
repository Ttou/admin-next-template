import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { object, string } from 'vue-types'

import type ProEditor from './ProEditor'

export const proEditorProps = () => ({
  modelValue: string().def(''),
  editorConfig: object<Partial<IEditorConfig>>().def({}),
  toolbarConfig: object<Partial<IToolbarConfig>>().def({}),
  mode: string<'default' | 'simple'>().def('default'),
  height: string().def('400px')
})

export type ProEditorProps = Partial<
  ExtractPropTypes<ReturnType<typeof proEditorProps>>
>

export type ProEditorRef = InstanceType<typeof ProEditor>

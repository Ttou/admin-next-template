import type { AiEditorOptions } from 'aieditor'
import { object, string } from 'vue-types'

import type ProEditor from './ProEditor'

type IEditorOptions = Omit<AiEditorOptions, 'element' | 'content'>

export const proEditorProps = () => ({
  content: string().def(''),
  height: string().def('400px'),
  options: object<IEditorOptions>().def({})
})

export const defaultOptions: IEditorOptions = {
  theme: 'light',
  placeholder: '点击输入内容...',
  toolbarKeys: [
    'undo',
    'redo',
    'brush',
    'eraser',
    '|',
    'heading',
    'font-family',
    'font-size',
    '|',
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'code',
    'subscript',
    'superscript',
    'hr',
    'todo',
    'emoji',
    '|',
    'highlight',
    'font-color',
    '|',
    'align',
    'line-height',
    '|',
    'bullet-list',
    'ordered-list',
    'indent-decrease',
    'indent-increase',
    'break',
    '|',
    'image',
    'video',
    'attachment',
    'quote',
    'code-block',
    'table',
    '|',
    'printer',
    'fullscreen'
    // 'ai'
  ]
}

export type ProEditorProps = Partial<
  ExtractPropTypes<ReturnType<typeof proEditorProps>>
>

export type ProEditorRef = InstanceType<typeof ProEditor>

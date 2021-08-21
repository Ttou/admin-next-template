import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue'

/**
 * 复制文本
 * @param {string} value 文本
 */
export async function copyText(value: string) {
  const { copied, copy, isSupported } = useClipboard()

  if (!isSupported) {
    message.warn('不支持复制到剪贴板')
    return false
  }

  await copy(value)

  return copied.value
}

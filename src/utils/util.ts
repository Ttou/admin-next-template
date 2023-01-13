import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { nanoid } from 'nanoid'

/**
 * 复制文本
 * @param {string} value 文本
 */
export async function copyText(value: string) {
  const { copied, copy, isSupported } = useClipboard()

  if (!isSupported) {
    ElMessage.warning('不支持复制到剪贴板')
    return false
  }

  await copy(value)

  return copied.value
}

/**
 * 获取图片链接
 * @param {string} imgPath 图片路径
 */
export function getImgUrl(imgPath: string) {
  return new URL(`../assets/${imgPath}`, import.meta.url).href
}

/**
 * 生成随机ID
 */
export function genRandomID(size?: number) {
  return nanoid(size)
}

/**
 * 获取图片文件
 * @param {string} imgPath 图片路径
 */
export function getImgFile(imgPath: string) {
  return new URL(`../assets/images/${imgPath}`, import.meta.url).href
}

/**
 * 获取图片文件
 * @param {string} imgPath 图片路径
 * @description 使用该函数引用的图片打包时无法被压缩；不论是否引用，该路径下的资源都会被 Vite 打包
 * @deprecated
 */
export function getImgFile(imgPath: string) {
  // return new URL(`../assets/images/${imgPath}`, import.meta.url).href
}

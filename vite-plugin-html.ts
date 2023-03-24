import ejs from 'ejs'
import { PluginOption } from 'vite'

/**
 * index.html 处理插件
 * @param options 写法参照 ejs 文档
 * @see https://ejs.co/#docs
 */
export function customHtml(options: Record<string, any>): PluginOption {
  return {
    name: 'custom:html',
    enforce: 'pre',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return ejs.render(html, { ...options }, { root: __dirname })
      }
    }
  }
}

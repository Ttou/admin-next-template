import vue from '@vitejs/plugin-vue'
import ejs from 'ejs'
import { resolve } from 'path'
import elementPlus from 'unplugin-element-plus/vite'
import { defineConfig, loadEnv, PluginOption } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'

/**
 * index.html 处理插件
 * @param options 写法参照 ejs 文档
 * @see https://ejs.co/#docs
 */
function processIndexHtml(options: Record<string, any>): PluginOption {
  return {
    name: 'self:processHtml',
    enforce: 'pre',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return ejs.render(html, { ...options }, { root: __dirname })
      }
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    base: mode === 'development' ? '/' : `/${env.VITE_APP_NAME}/`,
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
    },
    plugins: [
      vue(),
      compression(),
      elementPlus({
        include: ['**/*.vue', '**/*.ts', '**/*.js', '**/*.vue?vue']
      }),
      processIndexHtml({
        injectVer: `<meta name="version-no" content="${new Date().getTime()}"/>`,
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`
      }),
      eslint({
        lintInWorker: true
      }),
      stylelint({
        lintInWorker: true
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
        prodEnabled: true,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'
          setupProdMockServer()
        `
      })
    ],
    optimizeDeps: {
      include: ['dayjs/locale/zh-cn'],
      exclude: ['vue-demi']
    },
    server: {
      host: true,
      port: 8080
    }
  }
})

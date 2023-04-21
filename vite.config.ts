import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import elementPlus from 'unplugin-element-plus/vite'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'

import { customHtml } from './vite-plugin-html'

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
        useSource: false
      }),
      eslint({
        lintInWorker: true
      }),
      stylelint({
        lintInWorker: true
      }),
      customHtml({
        injectVer: `<meta name="version-no" content="${new Date().getTime()}"/>`,
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`
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
      open: true,
      port: 8080
    },
    build: {
      chunkSizeWarningLimit: 2048
    }
  }
})

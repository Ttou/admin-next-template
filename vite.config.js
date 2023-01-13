import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/admin-next-template/',
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
      vueJsx(),
      compression(),
      createHtmlPlugin({
        inject: {
          data: {
            title: '后台管理系统'
          }
        },
        minify: true
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
      include: ['lodash-unified', 'dayjs/locale/zh-cn'],
      exclude: ['vue-demi']
    },
    server: {
      host: true,
      port: 8080
    }
  }
})

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import elementPlus from 'unplugin-element-plus/vite'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'

const versionNo = new Date().getTime()

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
      vueJsx(),
      compression(),
      createHtmlPlugin({
        inject: {
          data: {
            title: '后台管理系统',
            injectVer: `<meta name="version-no" content="${versionNo}"/>`
          }
        },
        minify: true
      }),
      elementPlus({
        include: [
          '**/*.vue',
          '**/*.ts',
          '**/*.js',
          '**/*.tsx',
          '**/*.jsx',
          '**/*.vue?vue&type=script*'
        ]
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

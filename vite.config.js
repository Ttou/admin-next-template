import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/admin-next-template/',
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // @see https://gitee.com/ant-design-vue/ant-design-vue/blob/next/components/style/themes/default.less
          modifyVars: {}
        }
      },
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
    },
    optimizeDeps: {
      include: ['ant-design-vue/es/locale/zh_CN', 'dayjs/locale/zh-cn'],
      exclude: ['vue-demi']
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
    server: {
      host: true,
      port: 8080
    }
  }
})

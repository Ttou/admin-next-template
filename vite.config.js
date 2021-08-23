import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'
import svgIcons from 'vite-plugin-svg-icons'

export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/admin-next-template/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'vue-types',
        replacement:
          process.env.NODE_ENV === 'development'
            ? 'vue-types'
            : 'vue-types/shim'
      }
    ]
  },
  plugins: [
    vue(),
    vueJsx(),
    compression(),
    svgIcons({
      iconDirs: [resolve(__dirname, 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
    injectHtml({
      injectData: {
        title: '后台管理系统'
      }
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
    port: 3000
  }
})

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import svgIcons from 'vite-plugin-svg-icons'

export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/admin-next-template/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // @see https://gitee.com/ant-design-vue/ant-design-vue/blob/next/components/style/themes/default.less
        modifyVars: {}
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src')
      }
    ]
  },
  optimizeDeps: {
    include: ['ant-design-vue/es/locale/zh_CN', 'moment/dist/locale/zh-cn'],
    exclude: ['vue-demi']
  },
  plugins: [
    vue(),
    vueJsx(),
    vanillaExtractPlugin(),
    compression(),
    svgIcons({
      iconDirs: [resolve('src/icons')],
      symbolId: 'icon-[dir]-[name]'
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

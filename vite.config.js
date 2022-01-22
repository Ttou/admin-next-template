import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import html from 'vite-plugin-html'
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
    },
    modules: {
      generateScopedName: '[local]__[hash:base64:5]'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
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
    compression(),
    svgIcons({
      iconDirs: [resolve('src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    html({
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
    port: 3000
  },
  test: {
    environment: 'happy-dom',
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})

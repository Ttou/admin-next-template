import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { compression } from 'vite-plugin-compression2'
import eslint from 'vite-plugin-eslint2'
import { viteMockServe } from 'vite-plugin-mock'
import stylelint from 'vite-plugin-stylelint'

import { optimizeElement } from './vite-optimize-element'
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
      alias: [
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`
        },
        ...(mode === 'production'
          ? [
              {
                find: 'vue-types',
                replacement: 'vue-types/shim'
              }
            ]
          : [])
      ]
    },
    plugins: [
      vue(),
      compression(),
      components({
        dts: false,
        dirs: [],
        resolvers: [
          ElementPlusResolver({
            importStyle: false
          })
        ]
      }),
      eslint({
        lintInWorker: true
      }),
      stylelint({
        lintInWorker: true
      }),
      customHtml({
        injectVer: `<meta name="version-no" content="${new Date().getTime()}"/>`,
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`,
        injectScript: `
          <script type="text/javascript" src="/ueditor-plus/ueditor.config.js"></script>
          <script type="text/javascript" src="/ueditor-plus/ueditor.all.js"></script>
        `
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
      include: ['dayjs/locale/zh-cn', ...optimizeElement],
      exclude: ['vue-demi']
    },
    build: {
      cssTarget: ['chrome61'],
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (/[\\/]node_modules[\\/]/.test(id)) {
              return 'chunk-libs'
            }
          }
        }
      }
    },
    server: {
      host: true,
      open: true,
      port: 8080
    },
    preview: {
      host: true,
      open: true,
      port: 8080
    }
  }
})

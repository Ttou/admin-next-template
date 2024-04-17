import { resolve } from 'node:path'

import { customHtml } from '@ttou/vite-html'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VxeTableResolver from '@vxecli/import-unplugin-vue-components'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import imagemin from 'unplugin-imagemin/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { compression as compression2 } from 'vite-plugin-compression2'

import { browserslist } from './package.json'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    base: mode === 'development' ? '/' : `/${env.VITE_APP_NAME}/`,
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      },
      postcss: {
        plugins: [autoprefixer(), postcssNested({ preserveEmpty: true })]
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
      vueJsx(),
      legacy({
        targets: browserslist
      }),
      components({
        dts: false,
        dirs: [],
        resolvers: [
          ElementPlusResolver({
            importStyle: false
          }),
          VxeTableResolver({
            importStyle: false
          })
        ]
      }),
      customHtml({
        injectVer: `<meta name="version-no" content="${new Date().getTime()}"/>`,
        injectTitle: `<title>${env.VITE_APP_TITLE}</title>`,
        injectScript: `
          <script type="text/javascript" src="/ueditor-plus/ueditor.config.js"></script>
          <script type="text/javascript" src="/ueditor-plus/ueditor.all.js"></script>
          <script type="text/javascript" src="/ueditor-plus/lang/zh-cn/zh-cn.js"></script>
        `
      }),
      compression2({
        exclude: [/\.(svg)$/, /.DS_Store$/, /ueditor-plus/]
      }),
      imagemin({
        mode: 'sharp',
        beforeBundle: true
      })
    ],
    optimizeDeps: {
      include: ['dayjs/locale/zh-cn'],
      exclude: ['vue-demi']
    },
    build: {
      cssTarget: ['chrome61'],
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
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

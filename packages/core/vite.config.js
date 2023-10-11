/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:19:08
 * @FilePath: /compoment-library-master/packages/core/vite.config.js
 * @Description:
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { alias } from '../../config'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // ...
  },
  plugins: [VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue(),
      vueJsx: VueJsx(),
    },
  })],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'myComponent',
      fileName: 'my-component',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias,
  },
})

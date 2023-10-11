import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { alias } from '../config'

export default defineConfig({
  plugins: [VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue(),
      vueJsx: VueJsx(),
    },
  })],
  resolve: {
    alias: {
      ...alias,
      '~@my-component/core': '@my-component/core',
    },
  },
})

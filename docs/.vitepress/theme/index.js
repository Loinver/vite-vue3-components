/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:14:06
 * @FilePath: /compoment-library-master/docs/.vitepress/theme/index.js
 * @Description:
 */
import theme from 'vitepress/theme'
import MC from '@my-component/core'
import Demo from './components/Demo.vue'
import '@my-component/core/style/index.scss'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.use(MC)
  },
}

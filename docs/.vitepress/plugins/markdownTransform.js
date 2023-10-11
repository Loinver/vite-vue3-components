/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:13:34
 * @FilePath: /compoment-library-master/docs/.vitepress/plugins/markdownTransform.js
 * @Description:
 */
export default function markDownTransform() {
  return {
    name: 'md-transform',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md'))
        return
      if (id.endsWith('index.md'))
        return

      const allComponents = `<script setup>
      let temp = import.meta.globEager('../demos/**/*.vue');
      let demos = {};
      for (let key in temp) {
        demos[key.slice(9,-4)] = temp[key].default;
      }
      </script>\n`
      code = allComponents + code
      return `${code}\n`
    },
  }
}

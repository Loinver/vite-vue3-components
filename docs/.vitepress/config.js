/**
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-10-12 17:29:38
 * @FilePath: /vite-vue3-components/docs/.vitepress/config.js
 * @Description:
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import markdownItContainer from 'markdown-it-container';
import { alias } from '../../config';
import nav from './config/nav';
import sidebar from './config/sidebar';
import markDownTransform from './plugins/markdownTransform';

export default defineConfig({
  title: 'MyComponent',
  description: 'MyComponent!',
  themeConfig: {
    nav,
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(markdownItContainer, 'demo', {
        validate: (params) => {
          return !!params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const componentAddress = tokens[idx + 2]?.content || '';
            let code = '';
            if (tokens[idx + 2].type === 'inline') {
              code = readFileSync(resolve('./demos', `./${componentAddress}.vue`), 'utf-8');
            }

            return `<Demo :demos='demos'
            code="${md.utils.escapeHtml(md.options.highlight(code, 'html', ''))}"
          componentAddress="${componentAddress}" >`;
          }
          return '</Demo>';
        },
      });
    },
  },
  vite: {
    plugins: [markDownTransform()],
    resolve: {
      alias: [
        ...Object.keys(alias).map((key) => ({
          find: key,
          replacement: alias[key],
        })),
        { find: /^~/, replacement: '' },
      ],
    },
  },
});

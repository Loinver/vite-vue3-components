<!--
 * @Author: Linyer honeyliner@163.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: Linyer honeyliner@163.com
 * @LastEditTime: 2023-09-25 10:40:53
 * @FilePath: /compoment-library-master/docs/.vitepress/theme/components/Demo.vue
 * @Description:
-->
<script setup>
import { ref } from 'vue'
const props = defineProps({
  demos: [Object, String],
  code: String,
  componentAddress: String,
})
const isShow = ref(false)
const showCode = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="docs-demo">
    <div class="docs-demo-component">
      <component :is="props.demos[props.componentAddress]" />
    </div>
    <div
      class="docs-demo-code language-vue-html"
      :class="{
        'is-show': isShow,
      }"
      v-html="code"
    />
    <div class="docs-demo-footer">
      <span class="demo-footer-button" @click="showCode">{{ isShow ? '隐藏' : '显示' }}代码</span>
    </div>
  </div>
</template>

<style scoped>
.docs-demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}
.docs-demo .docs-demo-component {
  padding: 24px;
}
.docs-demo .docs-demo-code {
  margin: 0;
  border-radius: 0;
  height: 0;
}
.docs-demo .is-show {
  height: auto;
}
.docs-demo .docs-demo-footer {
  padding: 5px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
}
.docs-demo .docs-demo-footer .demo-footer-button {
  font-size: 14px;
  transition: .3s;
  cursor: pointer;
  color: var(--vp-carbon-ads-text-color);
}
.docs-demo .docs-demo-footer .demo-footer-button:hover {
  color: var(--vp-carbon-ads-hover-text-color);
}
</style>

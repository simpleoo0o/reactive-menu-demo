import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/reset.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import markdown from 'highlight.js/lib/languages/markdown';
import shell from 'highlight.js/lib/languages/shell';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css' // 样式

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('xml', xml)

const app = createApp(App)

app.use(router)

app.mount('#app')

// 创建v-highlight全局指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

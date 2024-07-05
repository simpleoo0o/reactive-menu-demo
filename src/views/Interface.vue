<script setup>
import { ref, onMounted } from 'vue'
import code from 'reactive-menu/useReactiveMenu.d.ts?raw'
import * as monaco from 'monaco-editor'

const $monaco = ref(null)
console.log(code)
let monacoIns = null
onMounted(() => {
  monacoIns = monaco.editor.create($monaco.value, {
    value: code,
    language: 'typescript',
    readOnly: true
  })
  console.log(monacoIns)
})
</script>

<template>
  <div class="menu-editor">
    <div ref="$monaco" class="monaco-editor"></div>
  </div>
</template>

<style scoped lang="scss">
.menu-editor {
  height: 100%;

  .monaco-editor {
    height: 100%;
  }
}
</style>

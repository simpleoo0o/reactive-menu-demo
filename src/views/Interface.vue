<script setup>
import { ref, onMounted, inject } from 'vue'
import code from '@plantdata/reactive-menu-item-vue3/interface.ts?raw'
import * as monaco from 'monaco-editor'
const $monaco = ref(null)
console.log(code);
let monacoIns = null
onMounted(() => {
    monacoIns = monaco.editor.create($monaco.value, {
        value: code,
        language: 'typescript',
        readOnly: true
    })
    console.log(monacoIns);
})
</script>

<template>
    <div class="menu-editor">
        <div class="monaco-editor" ref="$monaco"></div>
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

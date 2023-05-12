<script setup>
import { ref, onMounted, inject } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
import menus from '../menus'
// import 'monaco-editor/esm/vs/editor/editor.all.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import * as monaco from 'monaco-editor'

const $monaco = ref(null)

const reactiveMenuData = inject('reactiveMenuData')
let monacoIns = null
onMounted(() => {
    monacoIns = monaco.editor.create($monaco.value, {
        value: JSON.stringify(reactiveMenuData.menus, null, 4),
        language: 'json'
    })
})

function save () {
    if (monacoIns) {
        const str = monacoIns.getValue()
        try {
            const newMenus = JSON.parse(str)
            reactiveMenuData.methods.updateMenus(newMenus)
        } catch (e) {
            ElMessage({
                type: 'error',
                message: e.message,
            })
        }
    }
}

function reset () {
    if (monacoIns) {
        monacoIns.setValue(JSON.stringify(menus, null, 4))
    }
}
</script>

<template>
    <div class="menu-editor">
        <div class="menu-editor-tool">
            <el-button type="primary" @click="reset">重置</el-button>
            <el-button type="primary" @click="save">应用(刷新不保存)</el-button>
        </div>

        <div class="monaco-editor" ref="$monaco"></div>
    </div>
</template>

<style scoped lang="scss">
.menu-editor {
  height: 100%;
  display: flex;
  flex-direction: column;

  .menu-editor-tool {
    display: flex;
    justify-content: flex-end;
    margin: 16px;
    flex: none;
  }

  .monaco-editor {
    height: 1px;
    flex: auto;
  }
}

</style>

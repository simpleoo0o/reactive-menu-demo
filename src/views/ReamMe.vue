<script setup>
import { marked }from 'marked'
import readMe from '@plantdata/reactive-menu-item-vue3/README.md?raw'
const html = marked(readMe).replace(/language-vue/g, 'language-html');
console.log(html);
</script>

<template>
    <div class="read-me">
        <div v-highlight v-html="html"></div>
    </div>
</template>
<style scoped lang="scss">
.read-me {
    height: 100%;
    padding: 0 16px;
    overflow: auto;
}
</style>

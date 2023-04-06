<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed, inject } from "vue";
const reactiveMenuData = inject('reactiveMenuData')
const route = useRoute()
const currentMenuStr = computed(() => {
    return JSON.stringify(reactiveMenuData.currentMenu, null, 2)
})
</script>

<template>
    <RouterView/>
    routerName: {{ route.name }}
    <br>
    query: {{ route.query }}
    <hr>
    <h5>当前菜单配置：</h5>
    <pre>{{currentMenuStr}}</pre>
</template>

<style scoped>
</style>

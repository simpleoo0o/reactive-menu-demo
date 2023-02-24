<template>
    <reactive-menu-tree :menu-data="reactiveMenuData.menus"/>
</template>

<script setup>
import ReactiveMenuTree from "@plantdata/reactive-menu-item-vue3/ReactiveMenuTree.vue";
import { inject } from "vue";

const reactiveMenuData = inject('reactiveMenuData')
</script>

<style scoped>

</style>

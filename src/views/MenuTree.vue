<template>
  <reactive-menu-tree :menu-data="reactiveMenuData.menus" />
</template>

<script setup>
import ReactiveMenuTree from 'reactive-menu-item/ReactiveMenuTree.vue'
import { inject } from 'vue'

const reactiveMenuData = inject('reactiveMenuData')
</script>

<style scoped></style>

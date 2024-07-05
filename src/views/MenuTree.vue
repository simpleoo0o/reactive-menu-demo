<template>
  <reactive-menu-tree :menu-data="reactiveMenu.menus" />
</template>

<script setup>
import { ReactiveMenuTree } from 'reactive-menu'
import { inject } from 'vue'

const reactiveMenu = inject('reactiveMenu')
</script>

<style scoped></style>

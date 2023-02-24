<script setup>
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <RouterView/>
    routerName: {{ route.name }}
    <br>
    query: {{ route.query }}
</template>

<style scoped>
</style>

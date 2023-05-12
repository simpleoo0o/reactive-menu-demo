<script setup>
import * as _ from 'lodash'
import { RouterView, useRoute } from 'vue-router'
import { computed, inject } from "vue";
import { ElButton } from 'element-plus'

const reactiveMenuData = inject('reactiveMenuData')

const route = useRoute()

const currentMenuStr = computed(() => {
    return JSON.stringify(reactiveMenuData.currentMenu, null, 2)
})
const matchMenuStr = computed(() => {
    return JSON.stringify(reactiveMenuData.currentMenuWithParents.at(-1), null, 2)
})

const submenu = computed(() => {
    return _.filter(reactiveMenuData.currentMenuWithParents.at(-1)?.children, ['type', 'submenu'])
})

function goDetail (item) {
    reactiveMenuData.methods.jump(item)
}
</script>

<template>
    <RouterView/>
    routerName: {{ route.name }}
    <br>
    query: {{ route.query }}
    <template v-if="submenu?.length">
        <hr>
        <el-button
                v-for="item of submenu"
                :key="item.id"
                @click="goDetail(item)">{{ item.name }}</el-button>
    </template>
    <hr>
    <h5>匹配菜单配置：</h5>
    <pre>{{matchMenuStr}}</pre>
    <hr>
    <h5>当前菜单配置：</h5>
    <pre>{{currentMenuStr}}</pre>
</template>

<style scoped>
</style>

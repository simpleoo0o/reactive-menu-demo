<script setup>
import { RouterView, useRouter } from "vue-router";
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu } from 'element-plus'
import reactiveMenu from '@plantdata/reactive-menu-item-vue3/reactive-menu'
import menus from '../menus'
import ReactiveMenuItem from "@plantdata/reactive-menu-item-vue3/ReactiveMenuItem.vue";
import { computed } from "vue";

const calcMock = computed(() => {
    return {
        kgName: 'k_g_n_a_m_e',
        apk: 'k_p_a'
    }
})
const reactiveMenuData = reactiveMenu(menus, calcMock)
const router = useRouter()

function goHome () {
    reactiveMenuData.methods.jump(reactiveMenuData.menus.find((o) => {
        return o.config.isDefault
    }) || reactiveMenuData.menus[0])
}
</script>

<template>
    <el-container class="container">
        <el-header>
            <div
              @click="goHome"
              class="logo">LOGO
            </div>
            <el-menu
              :default-active="reactiveMenuData.topActiveIndex"
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
            >
                <reactive-menu-item v-for="item of reactiveMenuData.menus" :key="item.id" :data="item"/>
            </el-menu>
        </el-header>
        <el-container class="body">
            <el-aside width="200px" v-if="reactiveMenuData.secondMenus && reactiveMenuData.secondMenus.length">
                <el-menu
                  :default-active="reactiveMenuData.activeIndex"
                  class="el-menu-demo"
                  mode="vertical"
                  :ellipsis="false">
                    <reactive-menu-item v-for="item of reactiveMenuData.secondMenus" :key="item.id" :data="item">
                        <!--                        <template #menu-item="{data}">-->
                        <!--                            {{data.name}}={{data.id}}-->
                        <!--                        </template>-->
                        <!--                        <template #menu-item-group="{data}">-->
                        <!--                            {{data.name}}==={{data.id}}-->
                        <!--                        </template>-->
                    </reactive-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <RouterView/>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .el-header {
        flex: none;
        background: #eee;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            flex: none;
            font-size: 32px;
            background: #aaa;
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .el-menu {
            flex: none;
        }
    }

    .body {
        flex: auto;
        height: 1px;

        .el-aside {
            background: #eee;
        }

        .main{
            padding: 0;
        }
    }

}
</style>

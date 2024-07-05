<script setup>
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu } from 'element-plus'
import menus from '../menus'
import { ReactiveMenuItem, useReactiveMenu } from 'reactive-menu'
import { computed, ref } from 'vue'

const collapse = ref(false)

const calcMock = computed(() => {
  return {
    kgName: 'k_g_n_a_m_e',
    apk: 'k_p_a'
  }
})
const reactiveMenu = useReactiveMenu(menus, {
  mock: calcMock,
  config: {
    resetId: true
  }
})

function goHome() {
  reactiveMenu.methods.goDefault()
}

function handleCollapse() {
  collapse.value = !collapse.value
}
</script>

<template>
  <el-container class="container">
    <el-header>
      <div class="logo" @click="goHome">LOGO</div>
      <el-menu
        :default-active="reactiveMenu.topActiveIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <reactive-menu-item v-for="item of reactiveMenu.menus" :key="item.id" :data="item" />
      </el-menu>
    </el-header>
    <el-container class="body">
      <el-aside v-if="reactiveMenu?.secondMenus?.length" :width="collapse ? 'auto' : '200px'">
        <div class="menu-control" @click="handleCollapse">
          <div class="menu-control-line-container" :class="{ collapse: collapse }">
            <div class="menu-control-line"></div>
            <div class="menu-control-line"></div>
            <div class="menu-control-line"></div>
          </div>
        </div>
        <el-menu
          :collapse="collapse"
          :default-active="reactiveMenu.activeIndex"
          class="el-menu-demo"
          mode="vertical"
          :ellipsis="false"
        >
          <reactive-menu-item
            v-for="item of reactiveMenu.secondMenus"
            :key="item.id"
            :data="item">
          </reactive-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <RouterView />
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
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: var(--el-menu-bg-color);

    .logo {
      flex: none;
      font-size: 32px;
      color: #fff;
      cursor: pointer;
      width: 200px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .el-menu {
      flex: none;
      border: none;
    }
  }

  .body {
    flex: auto;
    height: 1px;

    .el-aside{
      background: var(--el-menu-bg-color);
      .el-menu {
        border: none;
      }
    }

    .menu-control {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 18px;
      line-height: 18px;
      background: #484e63;
      cursor: pointer;

      .menu-control-line-container {
        transition: transform 0.3s;

        &.collapse {
          transform: rotate(90deg);
        }

        .menu-control-line {
          width: 10px;
          height: 2px;
          background: #fff;
          margin: 2px 0;
        }
      }
    }

    .main {
      padding: 0;
    }
  }
}
</style>

<style lang="scss">
body{
  --el-menu-bg-color: #141414;
  --el-menu-text-color: #d9d9d9;
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: #434343;
  --el-menu-hover-text-color: #fff;

  .reactive-menu-item{
    &.is-active{
      background: var(--el-menu-hover-bg-color) !important;
      border-color: var(--el-color-primary) !important;
      .el-sub-menu__title{
        border-color: var(--el-color-primary) !important;
      }
    }
  }
}
</style>

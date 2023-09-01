<script setup>
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu } from 'element-plus'
import menus from '../menus'
import { ReactiveMenuItem, useReactiveMenu } from 'reactive-menu-item'
import { computed, ref } from 'vue'

const collapse = ref(false)

const calcMock = computed(() => {
  return {
    kgName: 'k_g_n_a_m_e',
    apk: 'k_p_a'
  }
})
const reactiveMenuData = useReactiveMenu(menus, {
  mock: calcMock,
  config: {
    resetId: true
  }
})

function goHome() {
  reactiveMenuData.methods.goDefault()
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
        :default-active="reactiveMenuData.topActiveIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <reactive-menu-item v-for="item of reactiveMenuData.menus" :key="item.id" :data="item" />
      </el-menu>
    </el-header>
    <el-container class="body">
      <el-aside v-if="reactiveMenuData?.secondMenus?.length" :width="collapse ? 'auto' : '200px'">
        <div class="menu-control" @click="handleCollapse">
          <div class="menu-control-line-container" :class="{ collapse: collapse }">
            <div class="menu-control-line"></div>
            <div class="menu-control-line"></div>
            <div class="menu-control-line"></div>
          </div>
        </div>
        <el-menu
          :collapse="collapse"
          :default-active="reactiveMenuData.activeIndex"
          class="el-menu-demo"
          mode="vertical"
          :ellipsis="false"
        >
          <reactive-menu-item
            v-for="item of reactiveMenuData.secondMenus"
            :key="item.id"
            :data="item"
          >
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
    height: 48px;

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
    }
  }

  .body {
    flex: auto;
    height: 1px;

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
@import '../assets/reactive-menu-item.scss';

$top-menu-map: map-merge(
  $--rmi,
  (
    'bg': (
      'default': #141414,
      'active': #434343,
      'hover': #434343
    ),
    'font-color': (
      'default': #d9d9d9,
      'active': #fff,
      'hover': #fff
    ),
    'icon-color': (
      'default': #d9d9d9,
      'active': #fff,
      'hover': #fff
    ),
    'border-width': (
      'default': 0 0 2px 0,
      'active': 0 0 2px 0,
      'hover': 0 0 2px 0
    ),
    'border-color': (
      'default': #141414,
      'active': #00b38a,
      'hover': #434343
    ),
    'line-height': (
      'default': 46px,
      'active': 46px,
      'hover': 46px
    )
  )
);
$second-menu-map: map-merge(
  $--rmi,
  (
    'bg': (
      'default': #333743,
      'active': #40465c,
      'hover': #40465c
    ),
    'font-color': (
      'default': #909399,
      'active': #fff,
      'hover': #fff
    ),
    'icon-color': (
      'default': #909399,
      'active': #fff,
      'hover': #fff
    ),
    'border-width': (
      'default': 0 3px 0 0,
      'active': 0 3px 0 0,
      'hover': 0 3px 0 0
    ),
    'border-color': (
      'default': #333743,
      'active': #5677fc,
      'hover': #40465c
    )
  )
);
.el-container {
  .el-header {
    background: #141414;

    .el-menu {
      @include menu($top-menu-map);

      & > .reactive-menu-item-sub-menu {
        &.reactive-menu-item-active {
          .el-sub-menu__title {
            @include menu-item($top-menu-map, 'active');
          }
        }
      }
    }
  }

  .el-aside {
    max-width: 200px;
    background: #333743;
    @include menu($second-menu-map);
  }
}

.el-popper.reactive-menu-item-sub-menu-popper {
  .el-menu {
    background: map-get(map-get($top-menu-map, 'bg'), 'default') !important;

    .reactive-menu-item-menu-item {
      @include menu-item($top-menu-map, 'default');

      &:not(.is-disabled):not(.reactive-menu-item-active):hover {
        @include menu-item($top-menu-map, 'hover');
      }

      &:focus {
        @include menu-item($top-menu-map, 'default');
      }

      &.reactive-menu-item-active {
        @include menu-item($top-menu-map, 'active');
        border: none;
      }
    }
  }
}

.el-popper.second-reactive-menu-item-sub-menu-popper {
  .el-menu {
    background: map-get(map-get($second-menu-map, 'bg'), 'default') !important;

    .reactive-menu-item-menu-item {
      @include menu-item($second-menu-map, 'default');

      &:not(.is-disabled):not(.reactive-menu-item-active):hover {
        @include menu-item($second-menu-map, 'hover');
      }

      &:focus {
        @include menu-item($second-menu-map, 'default');
      }

      &.reactive-menu-item-active {
        @include menu-item($second-menu-map, 'active');
        border: none;
      }
    }
  }
}
</style>

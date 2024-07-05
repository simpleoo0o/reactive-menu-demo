<script setup>
import {
  Layout as ALayout,
  Menu as AMenu,
  LayoutHeader as ALayoutHeader,
  LayoutContent as ALayoutContent,
  LayoutSider as ALayoutSider,
  Breadcrumb as ABreadcrumb,
  BreadcrumbItem as ABreadcrumbItem
} from 'ant-design-vue'
import { useReactiveMenu } from 'reactive-menu'
import AntdvMenuItem from '../components/AntdvMenuItem.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const menus = [
  {
    name: '一级菜单1',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      boundary: true,
      icon: 'path://M730.693067 914.972261l-16.194764-67.456928c49.604433-21.933066 13.293733-135.168893 85.054388-212.540332h-85.53258c-61.559229 27.767006-69.433455 100.005853-154.328445 97.933688-67.425049-1.625852-146.900532-30.285483-280.284176-97.933688H162.760562c86.202049 71.792534 224.208213 135.32829 310.410261 208.109087l51.931633 71.888173h-57.223623v109.027739h339.069892v-109.027739H730.693067zM449.739423 3.729896h108.995859V120.823138c179.83201 26.077395 320.42041 173.296722 336.392018 356.284798H321.743408c-4.271847-97.519255 30.699916-189.714642 87.477226-278.8496-126.752716 60.475328-205.813767 151.427415-227.523676 278.8496h-73.641543C124.154541 292.366489 267.357056 144.031381 449.739423 120.185548V3.729896zM45.507923 525.150276h923.420317v81.770804H45.507923v-81.770804z',
      viewBox: '0 0 1024 1024'
    },
    children: [
      {
        name: '普通菜单',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
          isDefault: false,
          icon: 'path://M730.693067 914.972261l-16.194764-67.456928c49.604433-21.933066 13.293733-135.168893 85.054388-212.540332h-85.53258c-61.559229 27.767006-69.433455 100.005853-154.328445 97.933688-67.425049-1.625852-146.900532-30.285483-280.284176-97.933688H162.760562c86.202049 71.792534 224.208213 135.32829 310.410261 208.109087l51.931633 71.888173h-57.223623v109.027739h339.069892v-109.027739H730.693067zM449.739423 3.729896h108.995859V120.823138c179.83201 26.077395 320.42041 173.296722 336.392018 356.284798H321.743408c-4.271847-97.519255 30.699916-189.714642 87.477226-278.8496-126.752716 60.475328-205.813767 151.427415-227.523676 278.8496h-73.641543C124.154541 292.366489 267.357056 144.031381 449.739423 120.185548V3.729896zM45.507923 525.150276h923.420317v81.770804H45.507923v-81.770804z',
          viewBox: '0 0 1024 1024',
          route: {
            name: 'antdvTemplate',
            query: [
              {
                key: 'type',
                required: true,
                value: '普通菜单'
              }
            ]
          }
        }
      },
      {
        name: '普通sub菜单',
        enable: true,
        checked: true,
        type: 'menu',
        order: 1,
        config: {
          isDefault: true,
          icon: 'path://M730.693067 914.972261l-16.194764-67.456928c49.604433-21.933066 13.293733-135.168893 85.054388-212.540332h-85.53258c-61.559229 27.767006-69.433455 100.005853-154.328445 97.933688-67.425049-1.625852-146.900532-30.285483-280.284176-97.933688H162.760562c86.202049 71.792534 224.208213 135.32829 310.410261 208.109087l51.931633 71.888173h-57.223623v109.027739h339.069892v-109.027739H730.693067zM449.739423 3.729896h108.995859V120.823138c179.83201 26.077395 320.42041 173.296722 336.392018 356.284798H321.743408c-4.271847-97.519255 30.699916-189.714642 87.477226-278.8496-126.752716 60.475328-205.813767 151.427415-227.523676 278.8496h-73.641543C124.154541 292.366489 267.357056 144.031381 449.739423 120.185548V3.729896zM45.507923 525.150276h923.420317v81.770804H45.507923v-81.770804z',
          viewBox: '0 0 1024 1024'
        },
        children: [
          {
            name: '叶子菜单1',
            enable: true,
            checked: true,
            type: 'menu',
            order: 1,
            config: {
              isDefault: true,
              route: {
                name: 'antdvTemplate',
                query: [
                  {
                    key: 'type',
                    required: true,
                    value: '叶子菜单1'
                  }
                ]
              }
            }
          },
          {
            name: '叶子菜单2',
            enable: true,
            checked: true,
            type: 'menu',
            order: 1,
            config: {
              isDefault: false,
              route: {
                name: 'antdvTemplate',
                query: [
                  {
                    key: 'type',
                    required: true,
                    value: '叶子菜单2'
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  {
    name: '一级菜单2',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'path://M730.693067 914.972261l-16.194764-67.456928c49.604433-21.933066 13.293733-135.168893 85.054388-212.540332h-85.53258c-61.559229 27.767006-69.433455 100.005853-154.328445 97.933688-67.425049-1.625852-146.900532-30.285483-280.284176-97.933688H162.760562c86.202049 71.792534 224.208213 135.32829 310.410261 208.109087l51.931633 71.888173h-57.223623v109.027739h339.069892v-109.027739H730.693067zM449.739423 3.729896h108.995859V120.823138c179.83201 26.077395 320.42041 173.296722 336.392018 356.284798H321.743408c-4.271847-97.519255 30.699916-189.714642 87.477226-278.8496-126.752716 60.475328-205.813767 151.427415-227.523676 278.8496h-73.641543C124.154541 292.366489 267.357056 144.031381 449.739423 120.185548V3.729896zM45.507923 525.150276h923.420317v81.770804H45.507923v-81.770804z',
      viewBox: '0 0 1024 1024',
      route: {
        name: 'antdvTemplate',
        query: [
          {
            key: 'type',
            required: true,
            value: '一级菜单2'
          }
        ]
      }
    }
  },
  {
    name: 'element-plus示例',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'path://M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z',
      viewBox: '0 0 1024 1024',
      target: '_blank',
      route: {
        name: 'elHome'
      }
    }
  }
]
const reactiveMenu = useReactiveMenu(menus, {
  config: {
    resetId: true,
    autoIndex: true
  }
})
const topMenu = ref(null)

function goHome() {
  reactiveMenu.methods.goDefault()
}
</script>

<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" @click="goHome" />
      <a-menu
        ref="topMenu"
        :selected-keys="[reactiveMenu.topActiveIndex]"
        :open-keys="reactiveMenu.currentMenuWithParents.map((o) => o.id)"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <antdv-menu-item v-for="item of reactiveMenu.menus" :key="item.id" :data="item" />
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        v-if="reactiveMenu.secondMenus?.length"
        width="200"
        style="background: #fff"
      >
        <a-menu
          :selected-keys="[reactiveMenu.activeIndex]"
          :open-keys="reactiveMenu.currentMenuWithParents.map((o) => o.id)"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <antdv-menu-item
            v-for="item of reactiveMenu.secondMenus"
            :key="item.id"
            :data="item"
          />
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="item of reactiveMenu.currentMenuWithParents" :key="item.id">
            {{ item.name }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.ant-layout {
  height: 100%;
}

.ant-layout-content {
  overflow: auto;
}
</style>

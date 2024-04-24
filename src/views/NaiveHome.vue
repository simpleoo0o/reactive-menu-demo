<script setup>
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NEllipsis,
  NImage,
  NMenu
} from 'naive-ui'
import { useReactiveMenu } from 'reactive-menu-item'

import { computed, h, nextTick, ref, watch } from 'vue'
import * as _ from 'lodash'
import { RouterView } from 'vue-router'

const topMenu = ref(null)
const sideMenu = ref(null)
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
            name: 'naiveTemplate',
            query: [
              {
                key: 'type',
                isReal: true,
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
                name: 'naiveTemplate',
                query: [
                  {
                    key: 'type',
                    isReal: true,
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
                name: 'naiveTemplate',
                query: [
                  {
                    key: 'type',
                    isReal: true,
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
        name: 'naiveTemplate',
        query: [
          {
            key: 'type',
            isReal: true,
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
      route: {
        name: 'elHome'
      }
    }
  },
  {
    name: 'Ant Design Vue示例',
    enable: true,
    checked: true,
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi42ICg2NzQ5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VnVlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI2OS42NDQxMTYlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxNDhFRkYiIG9mZnNldD0iMzcuODYwMDY4NyUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBBNjBGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xOS44MTkxNTUzJSIgeTE9Ii0zNi43OTMxNDY0JSIgeDI9IjEzOC41NzkxOSUiIHkyPSIxNTcuNjM3NTA3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRjc4RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVnVlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgOS4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTg5Ljk2LDkwLjQ4IEM3OC41OCw5My40OCA2OC4zMyw4My4zNiA2Ny42Miw4Mi40OCBMNDYuNjYwNDQ4Nyw2Mi4yMjkyMjU4IEM0NS41MDIzODQ5LDYxLjExMDMyMzYgNDQuODQyNjg0NSw1OS41NzI4ODM1IDQ0LjgyOTY5ODcsNTcuOTYyNjM5NiBMNDQuNTAzNTU2NCwxNy41MjA5OTQ4IEM0NC40OTQ4ODYxLDE2LjQ0NTg3NDQgNDQuMDUzNzcxNCwxNS40MTk1MDk1IDQzLjI3OTY4NjQsMTQuNjczMzUxNyBMMjkuNjQ1OTk5OSwxLjUzMTUzNzM3IEMyOC4wNTU0NzUsLTAuMDAxNjA1MDQwMDUgMjUuNTIzMjQyMywwLjA0NDkxMjY1ODggMjMuOTkwMDk5OSwxLjYzNTQzNzU2IEMyMy4yNzE1MTIxLDIuMzgwOTIwNjYgMjIuODcsMy4zNzYwMDgzNCAyMi44Nyw0LjQxMTQzNzQ2IEwyMi44Nyw2NC4zODY0NzUxIEMyMi44Nyw2Ny4wODA3ODkxIDIzLjk1NzIyMzMsNjkuNjYxMTA2NyAyNS44ODU0MDksNzEuNTQyOTc0OCBMNjMuNjAwNDYxNSwxMDguMzUyMDYxIEM2NS45NDY2MzIzLDExMC42NDE4NzMgNjkuNjk2MzU4NCwxMTAuNjI0NjA1IDcyLjAyMTM0MDMsMTA4LjMxMzI4MSIgaWQ9IlBhdGgtQ29weSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni40MTUwMDAsIDU0LjgzMTE1Nykgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNTYuNDE1MDAwLCAtNTQuODMxMTU3KSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY4LDkwLjExNjMxMjIgQzU2LjYyLDkzLjExNjMxMjIgNDUuNDYsODMuMzYgNDQuNzUsODIuNDggTDIzLjc5MDQ0ODcsNjIuMjI5MjI1OCBDMjIuNjMyMzg0OSw2MS4xMTAzMjM2IDIxLjk3MjY4NDUsNTkuNTcyODgzNSAyMS45NTk2OTg3LDU3Ljk2MjYzOTYgTDIxLjYzMzU1NjQsMTcuNTIwOTk0OCBDMjEuNjI0ODg2MSwxNi40NDU4NzQ0IDIxLjE4Mzc3MTQsMTUuNDE5NTA5NSAyMC40MDk2ODY0LDE0LjY3MzM1MTcgTDYuNzc1OTk5OSwxLjUzMTUzNzM3IEM1LjE4NTQ3NSwtMC4wMDE2MDUwNDAwNSAyLjY1MzI0MjMyLDAuMDQ0OTEyNjU4OCAxLjEyMDA5OTkxLDEuNjM1NDM3NTYgQzAuNDAxNTEyMTI1LDIuMzgwOTIwNjYgMy45MDIxMTg3OGUtMTMsMy4zNzYwMDgzNCAzLjkwNzk4NTA1ZS0xMyw0LjQxMTQzNzQ2IEwzLjk0MzUxMjE4ZS0xMyw2NC4zODY0NzUxIEMzLjk0NjgxMTc3ZS0xMyw2Ny4wODA3ODkxIDEuMDg3MjIzMjYsNjkuNjYxMTA2NyAzLjAxNTQwOTAzLDcxLjU0Mjk3NDggTDQwLjc4MDcwOTIsMTA4LjQwMTEwMSBDNDMuMTA2OTMwNCwxMTAuNjcxNDQ0IDQ2LjgxODAxNTEsMTEwLjY3NjUyNSA0OS4xNTA0NDQ1LDEwOC40MTI1NjEiIGlkPSJQYXRoIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQzLjI5ODM0ODgsMTkuMDk5MTkzMSBMMjcuNTU2NjA3OSwzLjg4MjQ2MjQ0IEMyNi43NjI0MjgxLDMuMTE0NzY5NjcgMjYuNzQwOTU2MSwxLjg0ODYyMTc3IDI3LjUwODY0ODgsMS4wNTQ0NDE5NCBDMjcuODg1NDgyNiwwLjY2NDYwNjYxMSAyOC40MDQ0NDM4LDAuNDQ0NDcyNjUxIDI4Ljk0NjYzODYsMC40NDQ0NzI2NTEgTDYwLjM5MjUwMjEsMC40NDQ0NzI2NTEgQzYxLjQ5NzA3MTYsMC40NDQ0NzI2NTEgNjIuMzkyNTAyMSwxLjMzOTkwMzE1IDYyLjM5MjUwMjEsMi40NDQ0NzI2NSBDNjIuMzkyNTAyMSwyLjk4NTgzNzUgNjIuMTczMDM5NiwzLjUwNDA3NzQyIDYxLjc4NDI1MTIsMy44ODA3OTk0MiBMNDYuMDgwMTI4NSwxOS4wOTc1MzAxIEM0NS4zMDUxNTc5LDE5Ljg0ODQ0ODggNDQuMDc0MjE2NywxOS44NDkxODQ3IDQzLjI5ODM0ODgsMTkuMDk5MTkzMSBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
      viewBox: '0 0 1024 1024',
      route: {
        name: 'antdvHome'
      }
    }
  }
]
const topActiveKey = ref(null)
const sideActiveKey = ref(null)
const reactiveMenuData = useReactiveMenu(menus, {
  config: {
    resetId: true,
    autoIndex: true
  }
})
resetActiveIndex()

const topMenuOptions = computed(() => {
  return buildNaiveMenuOptions(reactiveMenuData.menus)
})
const sideMenuOptions = computed(() => {
  return buildNaiveMenuOptions(reactiveMenuData.secondMenus)
})

watch(
  () => reactiveMenuData.activeIndex,
  () => {
    resetActiveIndex()
  }
)

function buildNaiveMenuOptions(menus) {
  for (const menu of menus) {
    if (menu.children?.length && !menu.config.boundary) {
      menu.childList = buildNaiveMenuOptions(menu.children, {
        mock: {}
      })
    }
  }
  return _.filter(menus, (menu) => {
    return menu.type === 'menu'
  })
}

function renderMenuLabel(option) {
  return h(NEllipsis, null, { default: () => option.name })
}

function renderMenuIcon(option) {
  if (!option.config.icon) {
    return
  }
  if (option.config.icon.startsWith('path://')) {
    return h(
      'svg',
      {
        viewBox: option.config.viewBox || '0 0 24 24'
      },
      h('path', {
        d: option.config.icon.replace('path://', '')
      })
    )
  } else if (option.config.icon.startsWith('image://')) {
    return h(NImage, {
      src: option.config.icon.replace('image://', '')
    })
  }
  return h('i', {
    class: option.config.icon
  })
}

function resetActiveIndex(ref) {
  nextTick(() => {
    topActiveKey.value = reactiveMenuData.topActiveIndex
    sideActiveKey.value = reactiveMenuData.activeIndex
    topMenu.value?.showOption(reactiveMenuData.topActiveIndex)
    sideMenu.value?.showOption(reactiveMenuData.activeIndex)
  })
}

function handleUpdateMenu(key, menu) {
  const isSelf = key === reactiveMenuData.currentMenu?.id
  if (
    menu.config.disabledDefaultClick ||
    menu.config.disabled ||
    (isSelf && !reactiveMenuData.config.selfJump)
  ) {
    resetActiveIndex()
    return
  }

  const jumpMenu = reactiveMenuData.methods.jump(menu)
  if (
    !jumpMenu ||
    (jumpMenu && jumpMenu.config?.target && jumpMenu.config.target !== '_self') ||
    jumpMenu !== menu
  ) {
    resetActiveIndex()
  }
}
</script>

<template>
  <n-layout class="naive-home">
    <n-layout-header bordered>
      <n-menu
        ref="topMenu"
        v-model:value="topActiveKey"
        mode="horizontal"
        :inverted="false"
        key-field="id"
        children-field="childList"
        :render-label="renderMenuLabel"
        :render-icon="renderMenuIcon"
        :options="topMenuOptions"
        @update:value="handleUpdateMenu"
      />
    </n-layout-header>
    <n-layout :has-sider="sideMenuOptions?.length">
      <n-layout-sider v-if="sideMenuOptions?.length" bordered>
        <n-menu
          ref="sideMenu"
          v-model:value="sideActiveKey"
          mode="vertical"
          :inverted="false"
          key-field="id"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :options="sideMenuOptions"
          @update:value="handleUpdateMenu"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="scss">
.naive-home {
  height: 100%;

  :deep(.n-menu-item) {
    img {
      max-width: 24px;
      max-height: 24px;
    }
  }
}
</style>

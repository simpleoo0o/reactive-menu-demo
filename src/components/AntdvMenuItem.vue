<script setup>
import {filter, find} from 'lodash-es'
import {
  SubMenu as ASubMenu,
  MenuItem as AMenuItem,
  MenuItemGroup as AMenuItemGroup
} from 'ant-design-vue'
import { computed, inject } from 'vue'
import { MenuContent } from 'reactive-menu'

const reactiveMenu = inject('reactiveMenu')

const props = defineProps({
  data: Object
})
const emit = defineEmits(['on-click'])
const menuChildren = computed(() => {
  if (props.data.config.boundary) {
    return []
  }
  return filter(props.data.children, ['type', 'menu'])
})
const type = computed(function () {
  if (props.data.config.menuItemGroup) {
    return 'menuItemGroup'
  } else if (menuChildren.value && menuChildren.value.length) {
    return 'submenu'
  } else if (props.data.type === 'menu') {
    return 'menuItem'
  }
  return ''
})
const isActive = computed(function () {
  return !!find(reactiveMenu.currentMenuWithParents, ['id', props.data.id])
})

function handleClick() {
  window.event.stopPropagation()
  window.event.stopImmediatePropagation()
  const isSelf = props.data.id === reactiveMenu.currentMenu?.id
  emit('on-click', {
    type,
    isSelf,
    data: props.data
  })
  if (
    props.data.config.disabledDefaultClick ||
    props.data.config.disabled ||
    (isSelf && !reactiveMenu.config.selfJump)
  ) {
    resetActiveIndex()
    return
  }

  const menu = reactiveMenu.methods.jump(props.data)
  if (!menu || (menu && menu.config?.target && menu.config.target !== '_self')) {
    resetActiveIndex()
  }
}

function onClick(...args) {
  emit('on-click', ...args)
}

function classGet(type) {
  const classMap = {
    'reactive-menu-item': true,
    [`reactive-menu-item-${type}`]: true
  }
  for (const item of props.data.config.classList || []) {
    classMap[item] = true
  }
  classMap[`reactive-menu-item-active-${type}`] = isActive.value
  classMap['reactive-menu-item-active'] = isActive.value
  return classMap
}

function resetActiveIndex() {
  // const activeMenuIndex = findLast(reactiveMenu.currentMenuWithParents, (item) => {
  //   return find(rootMenu.items, ['index', item.id])
  // })?.id
  // const activeIndex = toRef(rootMenu, 'activeIndex')
  // if (activeMenuIndex) {
  //   activeIndex.value = activeMenuIndex
  // } else {
  //   activeIndex.value = null
  //   // reactiveMenu.currentMenu = null
  //   // reactiveMenu.currentMenuWithParents = []
  //   // nextTick(() => {
  //   //   reactiveMenu.methods.matchRoute()
  //   // })
  // }
}
</script>

<template>
  <component
    :is="data.config.element"
    v-if="data.config && data.config.element"
    :data="data"
    :class="classGet('component')"
  >
  </component>
  <a-menu-item-group
    v-else-if="type === 'menuItemGroup'"
    :key="data.id"
    :disabled="data.config?.disabled"
    :class="classGet('menu-item-group')"
    v-bind="data.config.attributes"
    @click.stop="handleClick"
  >
    <template #title>
      <slot name="menu-item-group" :data="data">
        <menu-content :menu-data="data" />
      </slot>
    </template>
    <a-menu-item v-for="item of menuChildren" :key="item.id" :data="item" @on-click="onClick">
      <template #menu-item-group="scope">
        <slot name="menu-item-group" :data="scope.data"> </slot>
      </template>
      <template #sub-menu="scope">
        <slot name="sub-menu" :data="scope.data"> </slot>
      </template>
      <template #menu-item="scope">
        <slot name="menu-item" :data="scope.data"> </slot>
      </template>
    </a-menu-item>
  </a-menu-item-group>
  <a-sub-menu
    v-else-if="type === 'submenu'"
    :key="data.id"
    popper-class="reactive-menu-item-sub-menu-popper"
    v-bind="data.config.attributes"
    :disabled="data.config?.disabled"
    :index="data.id"
    :class="classGet('sub-menu')"
    @click.stop="handleClick"
  >
    <template #title>
      <slot name="sub-menu" :data="data">
        <menu-content :menu-data="data" />
      </slot>
    </template>
    <antdv-menu-item v-for="item of menuChildren" :key="item.id" :data="item" @on-click="onClick">
      <template #menu-item-group="scope">
        <slot name="menu-item-group" :data="scope.data"> </slot>
      </template>
      <template #sub-menu="scope">
        <slot name="sub-menu" :data="scope.data"> </slot>
      </template>
      <template #menu-item="scope">
        <slot name="menu-item" :data="scope.data"> </slot>
      </template>
    </antdv-menu-item>
  </a-sub-menu>
  <a-menu-item
    v-else-if="type === 'menuItem'"
    :key="data.id"
    v-bind="data.config.attributes"
    :disabled="data.config?.disabled"
    :index="data.id"
    :class="classGet('menu-item')"
    @click="handleClick"
  >
    <slot name="menu-item" :data="data">
      <menu-content :menu-data="data" />
    </slot>
  </a-menu-item>
</template>

<style scoped></style>

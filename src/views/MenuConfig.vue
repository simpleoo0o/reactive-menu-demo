<script setup>
import { inject } from 'vue'
import { ElForm, ElFormItem, ElSwitch } from 'element-plus'

const reactiveMenu = inject('reactiveMenu')
</script>
<template>
  <el-form ref="form" :model="reactiveMenu.config" label-width="120px">
    <el-form-item label="autoIndex">
      <el-switch v-model="reactiveMenu.config.autoIndex"></el-switch>
    </el-form-item>
    <el-form-item label="selfJump">
      <el-switch v-model="reactiveMenu.config.selfJump"></el-switch>
    </el-form-item>
    <el-form-item label="disableMock">
      <el-switch v-model="reactiveMenu.config.disableMock"></el-switch>
    </el-form-item>
    <el-form-item label="resetId">
      <el-switch v-model="reactiveMenu.config.resetId" disabled></el-switch>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>

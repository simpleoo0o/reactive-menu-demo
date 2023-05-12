<script setup>
import { inject } from "vue";
import { ElForm, ElFormItem, ElSwitch } from 'element-plus'

const reactiveMenuData = inject('reactiveMenuData')
</script>
<template>
    <el-form ref="form" :model="reactiveMenuData.config" label-width="120px">
        <el-form-item label="autoIndex">
            <el-switch v-model="reactiveMenuData.config.autoIndex"></el-switch>
        </el-form-item>
        <el-form-item label="selfJump">
            <el-switch v-model="reactiveMenuData.config.selfJump"></el-switch>
        </el-form-item>
        <el-form-item label="disableMock">
            <el-switch v-model="reactiveMenuData.config.disableMock"></el-switch>
        </el-form-item>
        <el-form-item label="resetId">
            <el-switch v-model="reactiveMenuData.config.resetId" disabled></el-switch>
        </el-form-item>
    </el-form>
</template>

<style scoped lang="scss">

</style>

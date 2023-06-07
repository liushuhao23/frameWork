<!--
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-11 17:34:35
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-13 14:53:49
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button type="primary"  @click="dialogVisible = true"
      >click to open the Dialog</el-button
    >

    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ref } from 'vue';
const dialogVisible = ref(false)
const handleClose= () => {
  //
}

</script>

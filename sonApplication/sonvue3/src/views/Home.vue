<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-07 16:42:09
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-11 23:20:04
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="go">222</button>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
const go = () => {
  window.history.pushState(history.state, '', 'http://localhost:3000/courses/')

// 主动触发一次popstate事件
window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
}

</script>

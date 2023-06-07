<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-07 16:42:09
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-12 10:57:50
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/tttt">tttt</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  height: 100vh;
  color: #2c3e50;
  background-color: #ffffff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

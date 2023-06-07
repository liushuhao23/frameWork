/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-08-01 22:06:26
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-08-01 22:06:30
 */
const compiler = require("@vue/compiler-sfc");

const sourceCode = `
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "test",
  el: "#app",
  data() {
    return {
      msg: "Hello Vue",
    };
  },
};
<\/script>
<style scoped lang="scss">
h1 {
  color: red;
  span {
      color:blue;
  }
}
</style>
`;

const ans = compiler.parse(sourceCode, {sourceMap:false});

const { template, script, styles } = ans.descriptor;
console.log(template.content, 'template')
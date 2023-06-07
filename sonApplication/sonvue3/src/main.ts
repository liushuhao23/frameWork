/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-07 16:42:09
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-13 14:06:46
 */
import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/index'


createApp(App).use(store).use(router).mount('#app')

/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-11 17:34:35
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-13 14:26:36
 */
import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app');

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-30 20:40:23
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-05-30 20:49:18
 */
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    'storybook/background': { hidden: true },
  },
  theme,
});

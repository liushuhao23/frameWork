/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-28 20:59:44
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-05 14:19:52
 */
const typography = require('@tailwindcss/typography');
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [typography],
};

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-28 20:59:44
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-07 18:07:32
 */
const typography = require('@tailwindcss/typography');
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html', './public/index.html'],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'ball': "url('/src/web/assets/images/ball.png')",
        'ball-bg': "url('/src/web/assets/images/bg.png')",
        'ball2': "url('/src/web/assets/images/ball2.png')"
       }
    },
  },
  plugins: [typography],
};

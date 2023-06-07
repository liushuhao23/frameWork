/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-28 13:26:36
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-05-31 20:04:59
 */
const commonStyle = require('../theme/common')

const Styles = {
  ':root,.theme-dark': {
    '--sc-bgcolor': '#1b1b24',
  },
  '#root,.theme-light': {
    '--sc-bgcolor': 'rgb(255, 255, 255)',
    '--test': '#ffffff',

  },
  ...commonStyle
}

module.exports = Styles;

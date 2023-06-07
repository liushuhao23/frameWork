/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-10 15:48:45
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-15 23:01:01
 */
function firstToUpper (str) {
  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

module.exports = { firstToUpper }

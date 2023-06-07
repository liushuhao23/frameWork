/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-07 10:37:37
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-15 22:57:49
 */
const path = require('path')
const configRootPath = process.cwd()

/**
 * @description 获取配置文件路径
 * @author liushuhao
 * @date
 */
function getConfigPath (pathUrl) {
  const defaultPath = './src/menu/index.ts'
  return path.resolve(configRootPath, pathUrl || defaultPath)
}
module.exports = { getConfigPath }

/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-17 21:40:24
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-17 22:01:42
 */
const fs = require('fs')
const path = require('path')
const { logInfo } = require('../utils/log')
// 收集所有的文件路径
const fileDisplay = (filePath) => {
  // 根据文件路径读取文件，返回文件列表
  return new Promise((resolve, reject) => {
    const arr = []
    const files = fs.readdirSync(filePath)
    logInfo(files, 'files')
    files.forEach((filename) => {
      // 获取当前文件的绝对路径
      const filedir = path.join(filePath, filename)
      // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
      fs.stat(filedir, (eror, stats) => {
        if (eror) return console.error('Error:(spec)', eror)
        // 是否是文件
        const isFile = stats.isFile()
        // 是否是文件夹
        const isDir = stats.isDirectory()
        if (isFile) {
          arr.push(filedir)
        }
        // 如果是文件夹
        if (isDir) fileDisplay(filedir)
      })
    })
    logInfo(arr)
    resolve(arr)
  })
}

module.exports = { fileDisplay }

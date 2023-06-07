/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-06 20:14:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-15 22:06:02
 */

const { clg } = require('./console')
const util = require('util')

// is String
function isString (target) {
  return typeof target === 'string'
}

function logError (
  msg,
  ...rest
) {
  clg('magenta', `[Plugin-Conversion-Error] ${util.inspect(msg, { showHidden: false, depth: null })}`, ...rest)
  // console.error(`[plugin-Conversion] ${msg}`, ...rest)
}

function logInfo (
  msg,
  ...rest
) {
  clg('blue', `[Plugin-Conversion-Info]${util.inspect(msg, { showHidden: false, depth: null })}`, ...rest)
}

function successInfo (
  msg,
  ...rest
) {
  clg('green', `[Plugin-Conversion-Info]${util.inspect(msg, { showHidden: false, depth: null })}`, ...rest)
}

module.exports = { isString, logError, logInfo, successInfo }

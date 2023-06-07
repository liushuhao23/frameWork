/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-12 23:24:33
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-15 22:00:54
 */
const JSONStringify = (option) => {
  return JSON.stringify(
    option,
    (key, val) => {
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`
      }
      // 处理undefined丢失问题
      if (typeof val === 'undefined') {
        return 'undefined'
      }
      return val
    },
    2
  )
}
// 对象序列化解析
const JSONParse = (objStr) => {
  return JSON.parse(objStr, (k, v) => {
    if (typeof v === 'string' && v.indexOf && v.indexOf('function') > -1) {
      // eval 可能在eslint中报错，需要加入下行注释
      // eslint-disable-next-line
      return eval(`(function(){return ${v}})()`)
    }
    return v
  })
}

export { JSONStringify, JSONParse }

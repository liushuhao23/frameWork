/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-10 23:44:56
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-25 00:00:52
 */
const { firstToUpper } = require('../../utils/index')
const childrenRender = (data) => {
  let temp = 'const childrenRouters = ['
  let routerImport = ''
  for (let i = 0; i < data.length; i++) {
    routerImport += `import  ${firstToUpper(data[i].value)}  from '${data[i].routerImportUrl}';`
    temp += `{ path: '/${data[i].value}',  element: < ${firstToUpper(data[i].value)} />},`
  }
  temp += '];'
  temp += 'export default childrenRouters;'
  temp = routerImport + temp
  return temp
}
module.exports = { childrenRender }

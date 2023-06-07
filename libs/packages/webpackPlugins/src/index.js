/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-06 19:57:09
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-10-17 14:37:24
 */

const fsNode = require('fs')
const prettier = require('prettier')
const path = require('path')
const { getConfigPath } = require('./utils/config.js')
const { firstToUpper } = require('./utils/index.js')
const fs = require('fs-extra')
const { logError, successInfo } = require('./utils/log.js')
const { prettierrc } = require('./prettierrc/prettierrc.js')
const { reactRender } = require('./temp/react/index.js')
const { childrenRender } = require('./temp/react/childern.js')

class Conversion {
  options = {
    url: '',
    targetUrl: '',
    routerUrl: '',
    isFileList: false
  };

  constructor (options) {
    if (options && Object.keys(options).length) {
      options.url && (this.options.url = getConfigPath(options.url))
      options.targetUrl && (this.options.targetUrl = options.targetUrl)
      options.routerUrl && (this.options.routerUrl = options.routerUrl)
      options.hasOwnProperty('isFileList') && (this.options.isFileList = options.isFileList)
    }
  }

  apply (complier) {
    this.init()
    complier.hooks.watchRun.tap('conversion', async (compiler) => {
      if (compiler.modifiedFiles && compiler.modifiedFiles.has(this.options.url)) {
        this.init()
      }
    })
  }

  async init () {
    const existsFlag = await fs.pathExists(this.options.url)
    if (!existsFlag) logError('配置文件路径不存在 ')
    else this.getFileContent()
  }

  async getFileContent () {
    delete require.cache[require.resolve(path.resolve(process.cwd(), getConfigPath(this.options.url)))]
    const data = require(path.resolve(process.cwd(), getConfigPath(this.options.url)))
    const targetUrl = path.resolve(process.cwd(), getConfigPath(this.options.targetUrl))
    const getFileList = (dataArr) => {
      const fileRes = []
      const stack = dataArr
      while (stack.length) {
        const length = stack.length
        for (let i = 0; i < length; i++) {
          const target = stack.shift()
          if (target?.children) {
            for (let j = 0; j < target.children.length; j++) {
              stack.push(target.children[j])
              if (!target.children[j].children || target.children[j].children?.length === 0) {
                fileRes.push(target.children[j])
              }
            }
          }
        }
      }
      return fileRes
    }
    const fileList = getFileList(data)
    // 根据菜单数据  生成文件
    const newFileList = this.createMenuFile(fileList, targetUrl)
    this.createRouterFile(newFileList)
  }

  createMenuFile (data, targetUrl) {
    const dataArr = JSON.parse(JSON.stringify(data))
    const fillMap = {}
    const createFillListflag = this.options.isFileList
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i].path = path.resolve(process.cwd(), targetUrl + `/${dataArr[i].parent}/` + `${dataArr[i].value}`)
      if (createFillListflag) {
        fillMap[dataArr[i].value] = {
          name: data[i].name,
          path: `${dataArr[i].parent}/${dataArr[i].value}`
        }
      }
      fsNode.access(
        path.resolve(process.cwd(), targetUrl + `/${dataArr[i].parent}/` + `${dataArr[i].value}.tsx`),
        fs.constants.F_OK,
        (err) => {
          if (err) {
            fs.outputFileSync(
              path.resolve(process.cwd(), targetUrl + `/${dataArr[i].parent}/` + `${dataArr[i].value}.tsx`),
              prettier.format(reactRender(firstToUpper(dataArr[i].value)), { ...prettierrc, parser: 'typescript' })
            )
          }
        }
      )
    }
    createFillListflag && this.createFileList(fillMap, targetUrl)
    return dataArr
  }

  createFileList (data, targetUrl) {
    const temp = `const fileList = ${JSON.stringify(data)}
      export default fileList;`
    fs.outputFileSync(
      path.resolve(process.cwd(), `${targetUrl}/index.ts`),
      prettier.format(temp, { ...prettierrc, parser: 'typescript' })
    )
  }

  /**
   * @description: 创建路由文件
   * @return {*}
   * @author: liushuhao
   */
  async createRouterFile (data) {
    fsNode.access(path.resolve(`${getConfigPath(this.options.routerUrl)}/index.tsx`), fs.constants.F_OK, async (err) => {
      if (err) await fs.outputFileSync(`${getConfigPath(this.options.routerUrl)}/index.tsx`, '')
      else {
        await fs.remove(`${getConfigPath(this.options.routerUrl)}/index.tsx`)
      }
      data.forEach(item => {
        const urlObj = path.relative(`${getConfigPath(this.options.routerUrl)}`, item.path).split(path.sep)
        item.routerImportUrl = urlObj.reduce((x, y) => x + '/' + y)
      })
      const childernFileStr = childrenRender(data)
      fs.outputFileSync(`${getConfigPath(this.options.routerUrl)}/index.tsx`, prettier.format(childernFileStr, { ...prettierrc, parser: 'typescript' }))
      successInfo('生成目录文件成功')
    })
  }
}
// const instance = new Conversion({
//   url: 'src/web/menu/index.js',
//   targetUrl: 'src/web/components/article',
//   routerUrl: 'src/web/routers/children',
//   isFileList: true
// })
// instance.init()
module.exports = Conversion

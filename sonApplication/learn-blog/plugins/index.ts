
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-06 19:57:09
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-06 20:49:14
 */
const paths = require('path')
const fs = require('fs-extra')
// import { logError } from "./utils/error"
class Conversion {
    options = {}
    constructor(options) {
        this.options = { ...options }
    }
    apply(complier) {
        complier.hooks.watchRun.tap('conversion', async compiler => {
            if (compiler.modifiedFiles 
                && compiler.modifiedFiles.has(`${paths.join(__dirname, '../src/components/menu/resource/index.ts')}`)) {
            }
        })
        // logError('111', {name: 'sss'})
    }
}
module.exports = { Conversion }
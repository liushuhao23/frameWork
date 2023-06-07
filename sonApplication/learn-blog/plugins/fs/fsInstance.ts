/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-06 20:12:20
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-06 20:14:03
 */
const fs = require('fs-extra')

export class FsInstance {
     pathExists(file: string) {
        fs.pathExists(file, (err) =>{
            
        })
     }
}
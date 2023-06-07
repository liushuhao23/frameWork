/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-30 23:34:45
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 23:31:03
 */
const shell = require('shelljs');
var exec = shell.exec;
const packages = require('../package.json');

// console.log('输出',  str, 'str')
//再把这些白名单的内容写进去到一个packages/package.json
shell.cp('-R', 'src/components/', 'packages');
shell.rm('packages/index.ts');
shell.rm('packages/components/index.ts');
shell.cp('-R', 'src/components/index.ts', 'packages');
shell.sed('-i', "'./",  "'./components/",  'packages/index.ts');


shell.cp('-R', 'plugin/', 'packages');
shell.cd('packages');
if (exec('npm publish').code !== 0) {
    shell.echo('Error: aaa');
    shell.exit(1);
}


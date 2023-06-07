/* eslint-disable @typescript-eslint/no-var-requires */
import json from '@rollup/plugin-json'
// import { terser } from 'rollup-plugin-terser'
import { cleandir } from 'rollup-plugin-cleandir'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import commonjs from 'rollup-plugin-commonjs'

// const extensions = ['.js', '.ts']

export default {
  // 输入目录
  input: ['./src/index.js'],
  // 输出目录
  output: {
    dir: './dist/core',
    format: 'cjs'
  },
  plugins: [
    // 清理文件夹
    cleandir('./dist'),
    // 处理别名
    alias({
      entries: [{ find: '@', replacement: '../src' }]
    }),
    // 解析typescript
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNEXT'
        }
      }
    }),
    copy({
      targets: [
        { src: 'src/temp', dest: 'dist/core' }
      ]
    }),
    // 将JSON转换为ES6版本
    // json(),
    // 代码压缩
    // terser(),
    // 解析代码中依赖的node_modules
    resolve(),
    commonjs()
  ]
}

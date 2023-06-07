/*
 * @Author: ChunkDing
 * @Date: 2022-01-29 16:08:42
 * @Description:
 * Copyright (c) 2022 by ChunkDing, All Rights Reserved.
 */
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const env = process.env.NODE_ENV //当前环境

module.exports = {
  // 项目部署的基础路径
  publicPath: '/',

  productionSourceMap: env !== 'production',

  // 将构建好的文件输出到哪里（或者说将编译的文件）
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: '',

  indexPath: 'index.html',

  chainWebpack: config => {
    //  config.resolve.extensions.set('.ts')
    config.resolve.alias.set('@', resolve('src'))
    .set('@assets', resolve('src/assets'))
    .set('@components', resolve('src/components'))
    .set('@public', resolve('public'))
    .set('@utils', resolve('src/utils'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    port: 3001,
    host: 'localhost',
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    hot: true,
  },
  // 三方插件的选项
  pluginOptions: {}
}
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-01 22:19:08
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-15 17:16:15
 */
const { join, resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const logo = join(__dirname, 'icon.png');
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const notifier = require('node-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
// const { Conversion } = require('../plugins/index.ts')
const Conversion = require('@works/webpack-conversion')
// var ICON = path.join(__dirname, 'icon.png');

const prot = 3004;

module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:' + prot,
    },
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port: prot,
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js',
    assetModuleFilename: 'images/[name].[ext]',
  },
  stats: 'errors-only',
  devtool: false,
  plugins: [
    new Conversion(
      {
          url: 'src/web/menu/index.ts',
          targetUrl: 'src/web/components/article',
          routerUrl: 'src/web/routers/children'
      }
    ),
    new HtmlWebpackPlugin({
      title: 'work-react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-dev.html'),
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + prot],
        notes: ['💊 构建信息请及时关注窗口右上角'],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: '👒 Webpack构建失败',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
        });
      },
      clearConsole: true,
    }),
    new webpack.SourceMapDevToolPlugin({ exclude: '/node_modules/*' }),
  ],
};

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-01 22:19:08
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-07 12:35:32
 */
const { join, resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const logo = join(__dirname, 'icon.png');
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const notifier = require('node-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// var ICON = path.join(__dirname, 'icon.png');

const prot = 3002;

module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/blog': {
        target: 'http://localhost:8888',
        changeOrigin: true,
      },
      // '/algorithm': {
      //   target: 'http://localhost:8888',
      //   changeOrigin: true,
      //   bypass: function (req, res, proxyOptions) {
      //     if (req.headers.accept.indexOf('html') !== -1) {
      //       console.log('Skipping proxy for browser request.');
      //       return '/index.html';
      //     }
      //   },
      //   pathRewrite:{ '^/algorithm': ''}
      // },
    },
    // static: {
    //   directory: join(__dirname, 'src/web/assets'),
    // },
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
    // new BundleAnalyzerPlugin(),
    // new WebpackBuildNotifierPlugin({
    //   title: '💿 work React脚手架',
    //   logo,
    //   suppressSuccess: true,
    // }),
    new Dotenv({
      path: './.env.development',
    }),
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
        // console.log(error);
        notifier.notify({
          title: '👒 Webpack构建失败',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          // icon: join(__dirname, 'icon.png'),
        });
      },
      clearConsole: true,
    }),
    new webpack.SourceMapDevToolPlugin({ exclude: '/node_modules/*' }),
  ],
};

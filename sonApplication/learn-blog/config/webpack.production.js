/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-01 22:19:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-11 09:08:41
 */
const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const { join, resolve } = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// optimize-css-assets-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    path: join(__dirname, '../dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    assetModuleFilename: 'images/[name].[hash:5][ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [
      //esbuild prepack压缩
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      }),
      new CssMinimizerPlugin({
        parallel: os.cpus().length - 1,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'work-react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-prod.html'),
    }),
    // new MiniCssExtractPlugin(),
  ],
};

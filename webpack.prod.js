const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(commonConfig, {
   mode: 'production',
   optimization: {
      minimizer: [
         // jsの圧縮する
         new TerserPlugin({
            extractComments: false, // .LICENSE.txtのようなファイル出力なし
            terserOptions: {
               compress: {
                  drop_console: true // consoleを削除する
               }
            }
         }),
         new OptimizeCSSAssetsPlugin({}) // 出力されるCSSを最適化する
      ]
   }
});

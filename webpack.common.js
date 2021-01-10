const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const webpack = require('webpack');
const globImporter = require('node-sass-glob-importer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
   entry: {
      app: './resources/js/app.js'
   },
   output: {
      path: path.resolve(__dirname, 'public'), // 出力先のパス
      filename: 'js/[name].js', // 出力するファイル名
      chunkFilename: 'js/[name].js' // splitChunksのファイル名
   },
   optimization: {
      splitChunks: {
         // 適切にファイルを分割
         chunks: 'initial', // 静的モジュールのみ分割
         cacheGroups: {
            vendor: {
               test: /node_modules/, // node_modules配下が分割の対象
               name: 'vendor'
            }
         }
      }
   },
   module: {
      rules: [
         {
            enforce: 'pre', // ES5に変換する前にコード検証を行う
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
               fix: true // 一部のエラーを自動修正する
            }
         },
         {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.(scss|css)$/,
            use: [
               {
                  loader: 'vue-style-loader',
                  options: {
                     sourceMap: true
                  }
               },
               MiniCssExtractPlugin.loader, // ④ CSSを個別に出力
               {
                  loader: 'css-loader', // ③ CSSをモジュール（js形式）に変換
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'postcss-loader', // ②autoprefixerを使用
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'sass-loader', // ① SassをCSSにコンパイル
                  options: {
                     sourceMap: true,
                     sassOptions: {
                        importer: globImporter()
                     }
                  }
               }
            ]
         },
         {
            test: /\.(jpe?g|gif|png|svg)$/,
            use: [
               {
                  loader: 'file-loader', // 画像の出力
                  options: {
                     name: '[name].[contenthash].[ext]',
                     outputPath: 'images', // 画像の出力先
                     publicPath: 'images' // 出力されるファイル（CSSなど）に指定される画像のパス
                  }
               },
               'image-webpack-loader' // 画像の圧縮
            ]
         }
      ]
   },
   plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(), // output.path(public)を削除してからビルド開始
      // stylelintの適用
      new StylelintPlugin({
         configFile: path.resolve(__dirname, '.stylelintrc.js'),
         syntax: 'scss',
         fix: true
      }),
      // バンドルされるCSSを別のCSSファイルに抽出
      new MiniCssExtractPlugin({
         filename: './css/[name].css'
      }),
      // html設定
      new HtmlWebpackPlugin({
         title: 'ホーム | portfolio',
         filename: 'index.html',
         template: './resources/views/index.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'ポートフォリオ詳細 | portfolio',
         filename: 'portfolio.html',
         template: './resources/views/detail/portfolio.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'WordPress詳細 | portfolio',
         filename: 'wordpress.html',
         template: './resources/views/detail/wordpress.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'Sass詳細 | portfolio',
         filename: 'sass.html',
         template: './resources/views/detail/sass.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'オブジェクト指向詳細 | portfolio',
         filename: 'objective.html',
         template: './resources/views/detail/objective.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'Todo詳細 | portfolio',
         filename: 'todo.html',
         template: './resources/views/detail/todo.html',
         chunks: ['app']
      }),
      new HtmlWebpackPlugin({
         title: 'SNS詳細 | portfolio',
         filename: 'sns.html',
         template: './resources/views/detail/sns.html',
         chunks: ['app']
      })
   ],
   resolve: {
      modules: [path.resolve(__dirname, 'resources'), 'node_modules'],
      extensions: ['.vue', '.js'],
      alias: {
         '@scss': path.resolve(__dirname, 'resources/scss'),
         '@imgs': path.resolve(__dirname, 'resources/images')
      }
   }
};

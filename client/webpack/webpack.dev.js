/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const writeFilePlugin = require('write-file-webpack-plugin');
const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ENV = 'development';

module.exports = (options) => webpackMerge(commonConfig({env: ENV}), {
  devtool: 'source-map',
  mode: ENV,
  entry: [
    './src/webapp/app/index'
  ],
  output: {
    path: utils.root('target/classes/static/'),
    filename: 'app/[name].bundle.js',
    chunkFilename: 'app/[id].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    stats: options.stats,
    hot: true,
    contentBase: './target/classes/static/',
    proxy: [{
      context: [
        '/',
        '/app'
      ],
      target: `http${options.tls ? 's' : ''}://localhost:8080`,
      secure: false,
      changeOrigin: options.tls
    }],
    watchOptions: {
      ignored: /node_modules/
    },
    https: options.tls,
    historyApiFallback: true
  },
  plugins: [
    new BrowserSyncPlugin({
      https: options.tls,
      host: 'localhost',
      port: 9000,
      proxy: {
        target: `http${options.tls ? 's' : ''}://localhost:9060`,
        proxyOptions: {
          changeOrigin: false  //pass the Host header to the backend unchanged  https://github.com/Browsersync/browser-sync/issues/430
        }
      },
      socket: {
        clients: {
          heartbeatTimeout: 60000
        }
      }
    }, {
      reload: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new writeFilePlugin(),
    new webpack.WatchIgnorePlugin([
      utils.root('src/test'),
    ])
  ].filter(Boolean)
});

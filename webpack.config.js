const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const babelSettings = JSON.parse(fs.readFileSync('.babelrc'))

const SRC = path.resolve(__dirname, 'src')

const config = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [SRC],
        loader: 'babel-loader',
        query: babelSettings,
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js',
  }
}


module.exports = config

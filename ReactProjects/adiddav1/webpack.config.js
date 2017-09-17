
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'lib')
const config = {
  entry: ['babel-polyfill','./lib/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js?/, exclude: /node_modules/, use: 'babel-loader' }
      ,
                    {
                        test: /\.css$/,
                        include : APP_DIR,
                        use: [
                            {loader : "style-loader"},
                            {loader : "css-loader"}
                        ]
                    }
    ]
  }
};

module.exports = config;

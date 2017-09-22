
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
                        use: ['style-loader', 'css-loader', 'sass-loader'],
                        },


                    {
                      test: /\.json$/,
                      loader: 'raw-loader'
                    }
                    ,{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}

    ]
  }
};

module.exports = config;

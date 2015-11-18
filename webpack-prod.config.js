var path = require('path');
//var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    bundle: path.join(__dirname, 'entry.jsx'),
    vendors: ['react']
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.(png|svg)$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]'
        }
    },{
      test: /\.scss$/,
      loaders: ['style','css?root=..','sass']
    }, {
      test: /\.jsx$/,
      loaders: ['babel-loader']
    }],
    plugins: [
      new CommonsChunkPlugin('vendors.js')
    ]
  }
};

module.exports = config;

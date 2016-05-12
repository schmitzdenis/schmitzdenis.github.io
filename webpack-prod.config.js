var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    bundle: path.join(__dirname, 'entry.jsx'),
    vendors: ['react', 'jquery', 'foundation-sites', 'moment']
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
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015','react']
      }
    }],
    plugins: [
      new CommonsChunkPlugin('vendors.js'),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};

module.exports = config;

'use strict';

let path = require('path');
let webpack = require('webpack');

var config = {
  entry: {
    bundle: path.join(__dirname, 'entry.jsx'),
    vendors: ['react', 'jquery', 'foundation-sites', 'moment']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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
      loaders: ['style', 'css?root=..', 'sass?sourceMap=true']
    },{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel-loader']
    }],
    noParse: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  devServer: {
    noInfo: true, //  --no-info option
    progress: true,
    colors: true,
    watch: true,
    quiet: false,
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    proxy: {
      '/api/*': {
        target: 'https://codeapp.heroku.com',
        secure: true,
      },
    }
  },
  devtool: 'eval-source-map',
  debug: true,
};

module.exports = config;

var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = 'production';

var config = {
  entry: {
    bundle: path.join(__dirname, 'entry.jsx')
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
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap&root=..', 'sass?sourceMap'],
    }, {
      test: /\.jsx$/,
      loader: 'babel'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/foundation-sites/scss")]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(), //--optimize-minimize
    new webpack.optimize.OccurenceOrderPlugin(), // --optimize-occurence-order
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  devServer: {
    noInfo: true,
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
  //devtool: 'eval-source-map',
  debug: false,
};

module.exports = config;

var path = require('path');
var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;

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
    }, {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(mp4|ogg|svg)$/,
      loader: 'file-loader'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/foundation-sites/scss")]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
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
  devtool: 'eval-source-map',
  debug: false,
};

if (env === 'production') {
  config.plugins = [...config.plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ];
  config.devtool = false;
  config.debug = false;
}

module.exports = config;

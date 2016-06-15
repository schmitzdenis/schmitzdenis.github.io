var path = require('path');
var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;

var config = {
  entry: {
    bundle: [path.join(__dirname, 'entry.jsx')]
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
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(mp4|ogg|svg)$/,
      loader: 'file-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel'
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
        //target: 'https://codeapp.heroku.com',
        target: {
          "host": "localhost",
          "protocol": 'http:',
          "port": 5000
        },
        ignorePath: true,
        changeOrigin: true,
        secure: false
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
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        dead_code: true
      },
      minimize: true,
      sourceMap: false,
      'screw-ie8': true
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
} else {
  config.entry.bundle = [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    ...config.entry.bundle
  ];
  config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin()
  ];
  config.module.loaders = [{
      test: /\.jsx$/,
      loader: 'react-hot'
    },
    ...config.module.loaders
  ];
}

module.exports = config;

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
      test: /\.(png|svg)$/,
      loader: 'file',
      query: {
        name: '[path][name].[ext]'
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?root=..', 'sass']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
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

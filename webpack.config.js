var path = require('path');
var config = {
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: {
    bundle: path.join(__dirname, 'entry.jsx'),
    vendors: ['react']
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
    }, {
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel-loader']
    }],
    noParse: []
  },

  debug: true,
  devtool: 'eval-source-map',
  devServer: {
    noInfo: true, //  --no-info option
    progress: true,
    watch: true,
    quiet: false,
    port: 3000,
    stats: {
      colors: true
    },
    proxy: {
      '/api/*': {
        target: 'https://codeapp.heroku.com',
        secure: true,
      },
    }
  }
};

module.exports = config;

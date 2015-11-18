var path = require('path');
//var pathToReact = path.resolve('node_modules/react/dist/react.min.js');

var config = {
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: {
    bundle: path.join(__dirname, 'entry.jsx'),
    vendors:['react']
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  /*
    alias: {
         'react': pathToReact
    }
    */
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
      loaders: ['style','css?root=..','sass?sourceMap']
    },{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel-loader?sourceMap']
    }]
    //noParse: [pathToReact]
  },

  debug: true,
  devtool: 'eval-source-map',
  devServer: {
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    progress: true,
    watch: true,
    quiet: false,
    port: 3000,
    stats: {
      colors: true
    }
  }
};

module.exports = config;

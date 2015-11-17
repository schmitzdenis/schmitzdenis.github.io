var path = require('path');

var config = {
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: {
    javascript: path.join(__dirname, 'entry.jsx'),
    //html: path.join(__dirname, 'index.html')
      /*cname: path.join(__dirname ,'CNAME')*/
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.png$/,
      loader: 'url-loader',
      query: {
        mimetype: 'image/png'
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass'
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    }],
    noParse: [
      'index.html',
      'CNAME'
    ],
  },

  /*
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  */

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
    //https:true,
    stats: {
      colors: true
    }
  }
};

module.exports = config;

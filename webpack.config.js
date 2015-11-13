var path = require('path');

module.exports = {
  entry: {
    javascript : path.join(__dirname, 'entry.jsx'),
    html: path.join(__dirname, 'index.html'),
    cname: path.join(__dirname ,'CNAME')
  },
  output: {
    path: path.resolve(__dirname ,'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file?name=[name].[ext]'
    },{
      test: /\.png$/,
      loader: 'url-loader',
      query: { mimetype: 'image/png' }
    },{
      test: /\CNAME$/,
      exclude: /node_modules/,
      loader: 'file?name=[name]'
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass'
    },{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel-loader']
    }]
  },
  /*
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  */
  debug:true,
  devtool: 'eval-source-map',
  devServer: {
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    progress: true,
    watch: true,
    quiet: false,
    port:3000,
    //https:true,
    stats: { colors: true }
  },resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

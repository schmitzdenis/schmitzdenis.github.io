module.exports = {
  entry:  './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ['style', 'css'],
      query: {
        root: '.'
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  devtool: 'eval-source-map',
  devServer: {
    //contentBase: "./build",
    //contentBase: __dirname,
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    progress:true,
    watch:true,
    quiet:false,
    //port:8080,
    //https:true,
    //stats: { colors: true }
  }
};

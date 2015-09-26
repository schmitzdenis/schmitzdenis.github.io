module.exports = {
  entry: './entry.js',
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
    }, {
      //tell webpack to use jsx-loader for all *.jsx files
      test: /\.jsx$/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    }]
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  devtool: 'eval-source-map',
  devServer: {
    //contentBase: "./build",
    //contentBase: __dirname,
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    progress: true,
    watch: true,
    quiet: false,
    //port:8080,
    //https:true,
    //stats: { colors: true }
  },resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

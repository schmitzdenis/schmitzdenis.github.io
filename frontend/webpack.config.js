module.exports = {
  entry: {
    javascript : './entry.js',
    html: './index.html',
    cname: './CNAME'
  },
  output: {
    path: __dirname +'/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file?name=[name].[ext]'
    },{
      test: /\CNAME$/,
      exclude: /node_modules/,
      loader: 'file?name=[name]'
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ['style', 'css'],
      query: {
        root: '.'
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass'
    }, {
      //tell webpack to use jsx-loader for all *.jsx files
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel-loader']
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

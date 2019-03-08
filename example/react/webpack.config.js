const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude node_modules transpiling except onion-context module
        exclude: /node_modules\/(?!onion-context)/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          compact: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

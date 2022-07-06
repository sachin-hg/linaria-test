const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    app: './src/App.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  optimization: { noEmitOnErrors: true },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    // }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.linaria\.js/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'emotion'
            }
          }
        ]
      },
      {
        test: /\.linaria\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'linaria'
            }
          },
          {
            loader: '@linaria/webpack-loader',
            options: { sourceMap: dev, evaluate: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // 'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: dev }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  }
  // devServer: {
  //   historyApiFallback: true,
  //   publicPath: '/dist/',
  //   contentBase: path.join(__dirname, 'public'),
  //   compress: true,
  //   port: 8080,
  // },
}

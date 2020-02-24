const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    open: false,
    compress: true,
    inline: true,
    proxy: {
      '/presentations/*': 'http://localhost:8888'
    }
  },
};
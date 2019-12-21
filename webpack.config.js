const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      lds: path.resolve(__dirname, "localDataStore")
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader"
      },
      {
        test: /\.(json)?$/,
        use: "json-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

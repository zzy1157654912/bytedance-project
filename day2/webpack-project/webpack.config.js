const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module : {
      rules: [
        {test: /.css$/, use: ['style-loader', 'css-loader']},
        {test: /.js$/, use: ['babel-loader']},
      ]
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "10- webpack 自动生成 index.html" //配置title属性
    })
  ]
};

const merge = require("webpack-merge");
const base = require("./webpack.base");
const webpack = require("webpack");

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader"
        ],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

const merge = require("webpack-merge");
const base = require("./webpack.base");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(base, {
  // entry: {
  //  vendor: ["react","react-dom"]
  // },
  dependencies: ["./lib/vendor.js"],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({fallback: "style-loader", use: "css-loader"}),
        exclude: /node_moudles/
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("styles.css"),
    new CleanWebpackPlugin(["dist"]),
    // new UglifyjsWebpackPlugin({sourceMap: false}),
    new webpack
      .optimize
      .CommonsChunkPlugin({name: "common", filename: "common.js"}),
    // new webpack
    //   .optimize
    //   .CommonsChunkPlugin({
    //     name: ["vendor","common"],
    //     // filename: "vendor.js" (给 chunk 一个不同的名字)
    //     minChunks: Infinity,
    //     // (随着 entry chunk 越来越多， 这个配置保证没其它的模块会打包进 vendor chunk)
    //   })
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname,"./lib/manifest.json")
    })
  ]
});

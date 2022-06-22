/*
 * @Descripttion: 
 * @Author: sherrysong
 * @Date: 2022-05-06 15:58:26
 * @LastEditors: sherrysong
 * @LastEditTime: 2022-06-14 16:52:23
 */
module.exports = {
  publicPath:'/abtest/webParamDemo/dist',
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",

      filename: "index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  devServer: {
    transportMode: "ws",
  },
  productionSourceMap: false,
};

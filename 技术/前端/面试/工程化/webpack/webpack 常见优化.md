- 使用缓存，例如 cache-loader，以及各种 loader 或者插件支持的缓存选项

  > 例如 babel-loader 的 cacheDirectory 选项

- 缩小文件搜索范围

  - 精确 loader 的 test 处理文件范围
  - 使用 include, exclude 缩小 loader 处理范围
  - 使用 resolve.alias 设置路径别名
  - 使用 resolve.extensions 设置文件后缀查找列表
  - 使用 resolve.modules 直接指定第三方库的查找的 node_modules 位置，避免往上递归查找

- 使用 happypack 开启多进程任务处理，加快编译速度

- 使用 ParallelUglifyPlugin 开启多进程压缩

- 通过 webpack-dev-server 开启**自动刷新**和**热替换**

- 提取公共代码（common）和第三方库的代码（vendor）

  > webpack3 使用 CommonsChunkPlugin 插件
  >
  > webpack4+ 通过 optimization.splitChunks.cacheGroups 设置

- 使用 DllReferencePlugin 隔离引用第三方库

- 按需加载代码：使用 webpack 的 `import()` 函数

- 使用 babel-plugin-transform-runtime 减少打包冗余代码

- 使用工具分析打包结果：`webpack-bundle-analyzer`

- 生产环境开启代码压缩与混淆

- 通过 externals 使用 CDN 引用第三方库

  ```js
  module.exports = {
    //...
    externals: {
      jquery: 'jQuery'
    }
  };
  ```

  externals 会告诉 webpack 对应的第三方库将由外部提供，例如 CDN

  ```html
  <script
    src="https://code.jquery.com/jquery-3.1.0.js"
    integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
    crossorigin="anonymous">
  </script>
  ```

  在页面上将其引入即可。

  

参考：

[1] 掘金，[Vue项目Webpack优化实践，构建效率提高50%](https://juejin.im/post/5c1fa158f265da613c09cb36)

[2] 掘金，[关于webpack优化，你需要知道的事（上篇）](https://juejin.im/post/5b514b6ce51d45195866ed8c)

[3] 掘金，[三十分钟掌握Webpack性能优化](https://juejin.im/post/5b652b036fb9a04fa01d616b)

[4] 掘金，[Webpack4+Babel7优化70%速度](https://juejin.im/post/5c763885e51d457380771ab0)
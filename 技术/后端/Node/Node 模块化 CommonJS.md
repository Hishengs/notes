## Node 模块化 CommonJS

ES 6 之前 JavaScript 并没有定义模块化方案，而 Node.js 作为后台运行环境，模块化方案必不可少，因此 Node.js 定义了自己的模块化方案：CommonJS.



此模块化方案关键字是 require, module, module.exports, exports.



### require

通过 `require` 关键字对模块进行导入。

```js
const fs = require('fs');
```

`require` 支持动态导入模块，即在代码执行过程中动态导入模块。

`require` 是同步导入。



###module

在 Node 脚本中，`module` 关键词代表的是当前执行脚本的模块。



### module.exports, exports

通过 `module.exports` 定义导出的对象和数据。

`exports` 是 `module.exports` 的别名。
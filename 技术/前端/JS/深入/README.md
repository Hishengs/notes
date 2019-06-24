此文件用于保证目录非空



### Falsy

假值，即在上下文中可转换为 `false` 的值，包括：

- null
- undefined
- 空字符串
- 0
- false
- NaN
- `document.all`

以上所有的值，通过 `Boolean` 强制转换得到的值都是 `false`

#### 为什么 document.all 是假值？

`document.all` 本身执行结果是一个 `HTMLCollection` 的元素集合，属于对象，在过去一般用作浏览器检测，通常只有在 IE 浏览器 `document.all` 才存在，其他浏览器不存在此值，因此旧的代码经常用于用此特性进行浏览器嗅探：

```js
if (document.all) {
    console.log('this is IE');
}
```

后来，`document.all` 被标准化了，基本所有的浏览器都支持此属性，为了保持就旧代码能正常运行，各大浏览器默认此值为 false，即假值，保证原来的代码仍然能正常执行。



### 包装对象

包装对象主要是针对 数字、字符串、布尔值 这三类原始值而言，通常只有对象才具有且可以调用方法，但在 JS 中我们经常直接在原始值上调用方法，其实，这只是 JS 引擎临时将原始值转化为对应的包装对象，在对象上调用相应的方法而已，结束后立马销毁包装对象，例如：

```js
var str = 'hisheng';
typeof str; // "string"
str.toUpperCase(); // "HISHENG"
```

在调用 `toUpperCase()` 时，其实是先将 str 转化为一个包装对象 `new String(str)` ，在此对象调用方法，然后销毁对象。
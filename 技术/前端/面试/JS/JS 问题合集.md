# JS 面试问题合集

[JS 面试知识点总结](https://github.com/CavsZhouyou/Front-End-Interview-Notebook/blob/master/JavaScript/JavaScript.md)



**=> JS 有哪些数据类型**

基本数据类型：**number**, **string**, **boolean**, **undefined**, **null**, **symbol** (es6), **bigint** (es2020)

引用数据类型：**object**

> 基本数据由于有空间小，大小固定，存储在栈上，引用数据类型（object）大小可变，存储在堆上；

> JS 中的类型，指的是存储的**值**的类型，而不是变量本身的类型；

[>>> Javascript 中的堆栈](https://segmentfault.com/a/1190000009693516)



**=> 如何准确判断变量类型？**

通过 `typeof` 可以简单判断，但这个方法存在缺陷：

- `typeof null` 结果是 `object` 而不是 `null`

  > 因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，`000` 开头代表是对象，然而 `null` 表示为全零，所以将它错误的判断为 `object` 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

- `typeof`  函数 结果是 `function` 而不是 `object`

- 其他类型基本能准确判断

因此一般采用

```js
Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
```

得到变量的内置类型字符串



**=> 类型转换及其规则**

[>> 解析](./数据类型转换.md)



**=> undefined, null 含义与区别**

`undefined` 一般用于表示变量声明（declared）但未赋值时的值；或者函数参数未传递时的值。

> **undefined** is a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/primitive) value automatically assigned to [variables](https://developer.mozilla.org/en-US/docs/Glossary/variable) that have just been declared, or to formal [arguments](https://developer.mozilla.org/en-US/docs/Glossary/Argument) for which there are no actual arguments.
>
> from: https://developer.mozilla.org/en-US/docs/Glossary/undefined

`null` 代表的是空值，而不是未赋值；或者变量未指向任何对象；

> `null` expresses a lack of identification, indicating that a variable points to no object. In APIs, `null` is often retrieved in a place where an object can be expected but no object is relevant. 

另一个区别在于，`undefined` 同时是挂载在全局对象的一个变量，值为 `undefined`

变量名存在被篡改的风险，因此一般给变量赋值 `undefined` 一般使用：

```js
var x = void 0;
```



**=> 简述 `undefined`, `null` 与 `undeclared` 的区别，以及如何检测它们**



**=> new 实例化发生了什么？**

[new 实例化过程](../../JS/深入/new 实例化对象过程.md)



**=> 不同场景的 this 及其指向**

[t>> 解析](../../JS/深入/关于 this.md)



**=> 原型继承**

[>> 解析](./原型继承.md)，[>> 解析2](https://yuchengkai.cn/docs/frontend/#%E7%BB%A7%E6%89%BF)



**=> 深拷贝与浅拷贝**

[>> 解析](./浅拷贝与深拷贝.md)



**=> JS 的执行上下文与执行（调用）栈**

[>> 解析](https://muyiy.cn/blog/1/1.1.html)



**=> 什么是节流与防抖，及其应用场景**

[>> 解析](./防抖与节流函数.md)， [>> 解析2](https://yuchengkai.cn/docs/frontend/#%E9%98%B2%E6%8A%96)



**=> call, apply, bind 的区别，请分别实现这三个函数**

[>> 解析](./手写 bind, call, apply 函数.md)，[>> 解析2](https://yuchengkai.cn/docs/frontend/#call-apply-bind-%E5%8C%BA%E5%88%AB)



**=> 手动实现 Promise**

[>> 解析](./手写一个 Promise.md)，[>> 解析2](https://yuchengkai.cn/docs/frontend/#promise-%E5%AE%9E%E7%8E%B0)



**=> Proxy**

[>> 解析](https://es6.ruanyifeng.com/#docs/proxy)



**=> ['1', '2', '3'].map(parseInt)` 结果解析 **

结果：` [1, NaN, NaN]`

[>> 解析](https://muyiy.cn/question/js/2.html#%E7%AC%AC-2-%E9%A2%98%EF%BC%9A-1-2-3-map-parseint-what-why)



**=> 为什么 0.1 + 0.2 != 0.3 **

[>> 解析](https://yuchengkai.cn/docs/frontend/#%E4%B8%BA%E4%BB%80%E4%B9%88-0-1-0-2-0-3)



**=> 将对象转为 JSON 会存在哪些问题**

假设存在对象：

```js
obj = {a:1, b: 'xx', c: 123, d: true, e: undefined, f: null, g: function () {}, h: new Date(), i: /\w+/g}
```

将其转为 JSON:

```js
JSON.stringify(obj)
```

得到的结果：

```json
{"a":1,"b":"xx","c":123,"d":true,"f":null,"h":"2020-12-07T16:47:06.577Z","i":{}}
```

可知：

- JSON 仅支持 `string`, `number`, `null`, `boolean`, `plain object` 等数据类型转化
- `undefined`, `function` 会被直接过滤
- 非 `plain object` 的对象会调用其 `toString` 方法将其转为 `string`
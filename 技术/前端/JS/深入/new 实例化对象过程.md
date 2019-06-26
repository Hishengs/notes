### new 实例化的过程

1. 创建一个新的对象

2. 将对象的原型指向构造函数的原型对象

3. 将对象赋值给 this

4. 执行构造函数内部代码

5. 如果函数最后出现了 return 语句且 return 的是一个对象，则返回该对象，

   否则 return 语句会被忽略，返回一开始创建的对象



### 如何模拟 new 的过程（手写 new 原理）？

```js
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);
```

代码参考：JavaScript 标准参考教材（alpha），阮一峰，<http://javascript.ruanyifeng.com/oop/basic.html>



### 如何判断函数是否使用 new 调用？

#### 根据 instanceof 判断

由于实例化时内部创建的对象（this）是构造函数的实例，因此可以通过以下方式判断：

```js
function Car () {
    if (!(this instanceof Car)) return;
}
```

#### 根据 new.target 判断

构造函数实例化时，`new.target` 执行当前的构造函数，如果是执行普通函数，`new.target` 为 `undefined`

```js
function Car () {
    if (!new.target || new.target !== Car) return;
}
```


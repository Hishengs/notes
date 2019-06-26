## 关于 this

在 JS 中，this 在不同的环境和上下文中，代表的意思不尽相同：



在全局作用域内：

- 非严格模式，this 指向顶层对象 window（浏览器环境）
- 严格模式，this 为 `undefined`



在函数作用域内：

- 普通函数调用

  > - 非严格模式，this 指向顶层对象 window（浏览器环境）
  > - 严格模式，this 为 `undefined`

- 作为方法调用

  > this 指向调用者对象

- 构造函数

  > this 指向实例化的对象

- 事件回调函数

  > 一般指向传入的事件对象

- 匿名函数表达式

  > 指向匿名函数表达式时，函数内 this 指向全局顶层对象 window（浏览器环境）
  >
  > 同样，严格模式下，this 为 `undefined`

  ```js
  var obj = {
  	t: function () {
  		console.log(this);
  		var foo = function () {
  			console.log(this);
  		} ();
  	}
  };
  
  obj.t();
  
  // {t: ƒ}
  // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
  ```

- 数组方法

  > 数组方法 `map`，`foreach` 等方法内  this 指向全局顶层对象 window（浏览器环境），不管是不是在对象方法内调用
  >
  > 同样，严格模式下，this 为 `undefined





### 改变 this 指向

- `Function.prototype.call(thisArg, arg1, arg2, ...)`

  > 改变 this 指向并执行函数
  >
  > `thisArg` 绑定的上下文
  >
  > 根据传入的 `thisArg` 类型不同，行为也不同：
  >
  > - `thisArg`  是 null, undefined 时，this 指向全局顶层对象 window（浏览器环境）
  > - `thisArg`  是 数字，字符串，布尔值时，先转为为包装对象，再将 this 指向包装对象
  > - `thisArg`  是对象时，this 指向该对象
  >
  > `arg1, arg2, ...` 可选，指定的参数列表

- `Function.prototype.apply(thisArg, [argsArray])`

  > 改变 this 指向并执行函数
  >
  > `thisArg` 绑定的上下文
  >
  > 根据传入的 `thisArg` 类型不同，行为也不同：
  >
  > - `thisArg`  是 null, undefined 时，this 指向全局顶层对象 window（浏览器环境）
  > - `thisArg`  是 数字，字符串，布尔值时，先转为为包装对象，再将 this 指向包装对象
  > - `thisArg`  是对象时，this 指向该对象
  >
  > `argsArray` 可选，一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 `func` 函数

- `Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])`

  > 返回一个绑定了指向执行上下文的新函数
  >
  > `thisArg` 绑定的上下文
  >
  > 根据传入的 `thisArg` 类型不同，行为也不同：
  >
  > - `thisArg`  是 null, undefined 时，this 指向全局顶层对象 window（浏览器环境）
  > - `thisArg`  是 数字，字符串，布尔值时，先转为为包装对象，再将 this 指向包装对象
  > - `thisArg`  是对象时，this 指向该对象
  >
  > `arg1, arg2, ...` 可选，当目标函数被调用时，预先添加到绑定函数的参数列表中的参数


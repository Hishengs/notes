### Object 函数及构造函数

`Object()`

`Object` 本身是一个函数，直接使用或者使用 `new` 关键字实例化（作为构造函数）得到的都是一个对象 `{}`

#### 带参数实例化

* 参数为空，null，undefined

  以上参数返回的都是一个空对象

* 原始值

  如果参数是数字，字符串，布尔值等原始值，则得到的是该值的一个包装对象

  ```js
  var obj = Object(1);
  obj instanceof Object // true
  obj instanceof Number // true
  
  var obj = Object('foo');
  obj instanceof Object // true
  obj instanceof String // true
  
  var obj = Object(true);
  obj instanceof Object // true
  obj instanceof Boolean // true
  ```

* 对象

  如果传入的参数是一个对象，则直接返回此对象

  利用这一点，可以写一个判断变量是否为对象的函数：

  ```js
  function isObject(value) {
    return value === Object(value);
  }
  
  isObject([]) // true
  isObject(true) // false
  ```



不管是作为普通函数执行还是构造函数实例化，以上行为都是一致的，两者只是在语义上有区别：

- `Object(value)` 是将 value 转化为一个对象
- `new Obejct(value)` 表示生成一个新对象，此对象的值为 value



### Object 静态方法

指的是直接部署在 Object 上的方法

- `Object.keys(obj)`  `ES6`

  > 返回对象 obj **自身**，**可枚举** 的属性列表

- `Object.values(obj)`  `ES6`

  > 获取对象所有的值（`Object.keys()` 对应而来）形成的列表

- `Object.entries(obj)`   `ES6`

  > 获取对象键值对形成的列表（`Object.keys()` 对应而来）

- `Object.fromEntries(entries)`  `ES6`

- `Object.getOwnPropertyNames(obj)`

  > 返回对象 obj **自身** 的属性列表
  >
  > 注意与 Object.keys 的区别是 **可枚举**

- `Object.getOwnPropertySymbols(obj)`

  > 返回对象 obj **自身** 的 **符号** 属性列表

- `Object.getOwnPropertyDescriptor(obj, key)`

  > 获取对象 obj 上属性为 key 的描述符

- `Object.getOwnPropertyDescriptors(obj)`  `ES6`

- `Obeject.defineProperty(obj, key, descriptor)`

  > 按照 `descriptor` 描述符给对象 `obj` 定义一个属性 `key`

- `Object.defineProperties(obj, props)`

  > 同时定义多个属性

- `Object.isExtensible(obj)`

- `Object.preventExtensions(obj)`

- `Object.isSealed(obj)`

- `Object.seal(obj)`

- `Object.isFrozen(obj)`

- `Object.freeze(obj)`

- `Object.create(prototype)`

- `Object.getPrototypeOf(obj)`  `ES6`

- `Object.setPrototypeOf(obj, prototype)`  `ES6`

- `Object.assign(target, source1, source2...)`  `ES6`

- `Object.is(value1, value2)`  `ES6`

  > 用于判断两个值 `value1` 和 `value2` 是否一样，略等于 `===` 运算符，但有以下不同：
  >
  > - `Object.is(NaN, NaN)` 判断为 true
  > - `Object.is(-0, +0)` 判断为 false



### Object 实例方法

Object 实例化出来的对象拥有的方法，其实也就是从 `Object.prototype` 继承而来的方法：

- `Object.prototype.valueOf()`

  > `valueOf` 方法的作用是返回一个对象的“值”，默认情况下返回对象本身。
  >
  > JavaScript 在进行对象类型转换时，会首先调用此方法。

- `Object.prototype.toString()`

  > `toString`方法的作用是返回一个对象的字符串形式，默认情况下返回 **类型字符串**
  >
  > （类似：`"[object Object]"`）。
  >
  > 可以使用此方法进行准确的数据类型判断：
  >
  > ```
  > Object.prototype.toString.call(obj)
  > // obj 可以是各种类型的值
  > ```

  不同数据类型的 `Object.prototype.toString` 方法返回值如下：

  > - 数值：返回`[object Number]`。
  > - 字符串：返回`[object String]`。
  > - 布尔值：返回`[object Boolean]`。
  > - undefined：返回`[object Undefined]`。
  > - null：返回`[object Null]`。
  > - 数组：返回`[object Array]`。
  > - arguments 对象：返回`[object Arguments]`。
  > - 函数：返回`[object Function]`。
  > - Error 对象：返回`[object Error]`。
  > - Date 对象：返回`[object Date]`。
  > - RegExp 对象：返回`[object RegExp]`。
  > - 其他对象：返回`[object Object]`。

- `Object.prototype.toLocaleString()`

  > 默认与 `Object.prototype.toString` 返回一致，可根据地域自定义此方法返回

- `Object.prototype.hasOwnProperty(key)`

  > 判断对象是否存在属性 key

- `Object.prototype.isPrototypeOf(obj)`

  > 判断对象是否是另一个对象的原型



### 关于对象的强制转换

```js
1 + {}; // "1[object Object]"
```

以上数字与对象相加得到的结果是：`"1[object Object]"`，因为对象与数字进行运算时，对象自身会首先调用 `valueOf()` 期待得到一个 `Primitive Value` （原始值），若结果不是原始值，则继续调用 `toString()` 方法得到一个字符串，接着执行数字与字符串的相加运算。

```js
{} + 1
```

然而以上结果不是 `"[object Object]1"`，而是 `1`，为什么？

因为在 JavaScript 的引擎中，首先将 `{}` 理解为一个代码块了，然后继续执行 `+1`（一元运算），得到结果 `1`

那 `{} + {}` 的结果是？

`NaN`，前一个 `{}` 依然被理解为代码块，后一个 `+{}` 将对象强制转换为数字，得到的结果是 `NaN`



由于在括号内的代码都被理解为表达式，所以不存在代码块的问题，所以使用了括号得到的结果就不一样了：

```js
({} + 1); // "[object Object]1"
({} + {}); // "[object Object][object Object]"
```


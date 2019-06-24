### 构造函数

String 既可以当作普通函数，也可以通过 `new` 操作符作为构造函数使用。

当作普通函数使用时，会尝试将传入的值转化为字符串（原始字符串）。

作为构造函数时，会生成一个字符串对象。



不同的参数，转化规则不一样：

- `null`, `undefined` 转化为 `"null"`，`"undefined"`

- 布尔值 `true`，`false` 转化为 `"true"`，`"false"`

- 数字转化为数字字符串

  ```js
  String(123);    // "123"
  String(123.45); // "123.45"
  String(NaN);    // "NaN"
  ```

- 如果参数是对象，则调用其 `toString()` 方法获得字符串：

  ```js
  String({}); // "[object Object]"
  
  var obj = {};
  obj.toString = function () {return "James Blunt";}
  String(obj); // "James Blunt"
  ```

  

字符串对象实质上是一个类数组对象，形式上类似于：

```js
{ 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: '0', length: 5 }
```

因此，有些行为类似数组，例如通过下标索引值：

```js
str[0]; // 'h'
```

也有跟数组类似的实例方法：`includes` `indexOf`  `slice` ...



### 静态方法

- `String.fromCharCode()`

  > 返回由指定的 UTF-16 代码单元序列创建的字符串
  >
  > ```js
  > String.fromCharCode(72, 105, 115, 104, 101, 110, 103); // "Hisheng"
  > String.fromCharCode(20013, 22269); // "中国"
  > ```

- `String.raw()`



### 实例方法

- `String.prototype.charAt(index)`

  > 从一个字符串返回指定索引的字符

- `String.prototype.charCodeAt(index)`

  > 获取指定位置的字符码点，无效 index 范围返回 NaN

- `String.prototype.codePointAt(pos)`

- `String.prototype.concat(string2, string3[, ..., stringN])`

  > 用于连接一个或多个字符串，如果参数不是字符串，则尝试将其转化为字符串再进行连接
  >
  > 不改变原字符串，返回一个新的字符串

- `String.prototype.endsWith(searchString[, length])`

  > 判断当前字符串是否是以另外一个给定的子字符串“结尾”的
  >
  > `searchString` 要搜索的子字符串
  >
  > `length` 可选。作为 `str` 的长度。默认值为 `str.length`

- `String.prototype.includes(searchString[, position])`

  > 判断当前字符串是否包含指定的子字符串
  >
  > `searchString` 要搜索的子字符串
  >
  > `position` 可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0

- `String.prototype.indexOf(searchValue[, fromIndex])`

  > 从 `fromIndex` 处开始查找，返回第一次出现子字符串的索引下标
  >
  > `searchValue` 一个字符串表示被查找的值
  >
  > `fromIndex` 可选。表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0

- `String.prototype.lastIndexOf(searchValue[, fromIndex])`

  > 从 `fromIndex` 处开始查找，返回最后一次出现子字符串的索引下标
  >
  > `searchValue` 一个字符串表示被查找的值
  >
  > `fromIndex` 可选。表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0

- `String.prototype.localeCompare()`

- `String.prototype.match()`

- `String.prototype.matchAll()`

- `String.prototype.normalize()`

- `String.prototype.padEnd()`

- `String.prototype.padStart()`

- `String.prototype.repeat()`

- `String.prototype.replace(regexp|substr, newSubStr|function)`

- `String.prototype.search()`

- `String.prototype.slice()`

- `String.prototype.split()`

- `String.prototype.startsWith()`

- `String.prototype.substring(indexStart[, indexEnd])`

  > 返回一个字符串在开始索引（indexStart）到结束索引（indexEnd）之间的一个子集

- `String.prototype.toLocaleLowerCase()`

- `String.prototype.toLocaleUpperCase()`

- `String.prototype.toLowerCase()`

- `String.prototype.toUpperCase()`

- `String.prototype.toString()`

- `String.prototype.trim()`

- `String.prototype.trimRight()`

- `String.prototype.trimLeft()`

- `String.prototype.valueOf()`


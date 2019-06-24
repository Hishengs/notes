### 构造函数

Number 既可以当作普通函数，也可以通过 `new` 操作符作为构造函数使用。

任何传递给 Number 函数的参数都首先会尝试被转化为数字，然后构造一个包装对象。

- null

  ```js
  Number(null); // 0
  ```

- undefined

  ```js
  Number(undefined); // NaN
  ```

- 布尔值

  ```js
  Number(true); // 1
  Number(false); // 2
  ```

- 字符串

  ```jss
  Number(''); // 0
  Number('123'); // 123
  Number('hello'); // NaN
  ```

- 对象

  首先调用对象的 `valueOf()` 方法，如果是原始值（Primitive Value）则使用该值，如果不是，调用 `toString()` 方法获取字符串

  Number 尝试将以上得到的原始值转化为数字。

  ```js
  Number({}); // NaN
  Number([]); // 0
  Number(new Date()); // 1561374883306，因为 Date 的 valueOf 得到的是当前的时间戳
  ```



### 静态属性

- `Number.NaN`

  > 表示非数值，指向`NaN`

- `Number.MAX_VALUE`

  > 表示最大的正数

- `Number.MIN_VALUE`

  > 表示最小的正数

- `Number.MAX_SAFE_INTEGER`

  > 表示能够精确表示的最大整数，在 JavaScript 中此值为 `2^53 - 1`

- `Number.MIN_SAFE_INTEGER`

  > 表示能够精确表示的最小整数，在 JavaScript 中此值为 `-(2^53 - 1)`

- `Number.EPSILON`

  > 表示 1 与 [`Number `](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 可表示的大于 1 的最小的浮点数之间的差值，用于表示可忽略的最小值
  >
  > `EPSILON` 属性的值接近于 `2.2204460492503130808472633361816E-16`，或者 `2^-52。`
  >
  > 如果两个数只差小于此值，可以近似认为二者相等

- `Number.NEGATIVE_INFINITY`

  > 正的无限，指向`Infinity`

- `Number.POSITIVE_INFINITY`

  > 负的无限，指向`-Infinity`



### 静态方法

- `Number.isFinite()`
- `Number.isInteger()`
- `Number.isNaN()`
- `Number.isSafeInteger()`
- `Number.parseFloat()`
- `Number.parseInt()`



### 实例方法

- `Number.toExponential()`
- `Number.toFixed()`
- `Number.toLocaleString()`
- `Number.toString()`
- `Number.toPrecision()`
- `Number.toSource()`
- `Number.valueOf()`
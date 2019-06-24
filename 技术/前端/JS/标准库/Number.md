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

- `Number.isFinite(val)`

  > 判断给定的值是否是 **有穷数**
  >
  > 注意：此方法不会将给定的非数值转化为数值

- `Number.isInteger(val)`

  > 判断给定的值是否是整型

- `Number.isNaN(val)`

  > 判断给定的值是否是不合法的数字
  >
  > `NaN` 代表 Not A Number 的意思

- `Number.isSafeInteger(val)`

  > 判断给定的整数是否在安全范围内
  >
  > 安全整数范围为 `-(2^53 - 1)到` `2^53 - 1 `之间的整数，包含 `-(2^53 - 1)和` `2^53 - 1`。

- `Number.parseFloat(val)`

  > 将给定的值转换为浮点数，如果无法解析，返回 NaN
  >
  > 注意：
  >
  > - 参数如果是原始值，只接受数值或者字符串，其他一概返回 NaN
  > - 参数如果是对象，如果定义了 `toString()` 方法，则调用此方法获得字符串再尝试解析

- `Number.parseInt(val)`

  > 将给定的值转换为整数，如果无法解析，返回 NaN
  >
  > 注意：
  >
  > - 参数如果是原始值，只接受数值或者字符串，其他一概返回 NaN
  > - 参数如果是对象，如果定义了 `toString()` 方法，则调用此方法获得字符串再尝试解析



### 实例方法

- `Number.toExponential([fractionDigits])`

  > 以指数表示法返回该数值字符串表示形式
  >
  > `fractionDigits` 可选。一个整数，用来指定小数点后有几位数字。
  >
  > ```js
  > var numObj = 77.1234;
  > numObj.toExponential(); // "7.71234e+1"
  > numObj.toExponential(2); // "7.71e+1"
  > ```

- `Number.toFixed(digits)`

  > 使用定点表示法来格式化一个数值
  >
  > `digits` 小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。
  >
  > 注意：此方法会对后一位进行 **四舍五入** 再取值

- `Number.toLocaleString()`

  > 等同于 `Number.toString()`

- `Number.toString()`

  > 返回数值的字符串形式

- `Number.toPrecision(precision)`

  > 返回指定有效数字个数的数值字符串形式
  >
  > `precision`  有效数字的个数
  >
  > 注意：此方法会对后一位进行 **四舍五入** 再取值

- `Number.valueOf()`

  > 直接返回数字原始值
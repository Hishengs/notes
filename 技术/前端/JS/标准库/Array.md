### 构造函数

Array 既可以当作普通函数，也可以通过 `new` 操作符作为构造函数使用。

参数不同时，返回的值也不一样：

- 参数为空

  返回一个空数组

  ```js
  new Array(); // []
  ```

- 参数为数字

  返回一个 `length` 为指定数字 n 的数组，数组的元素都是**空值**：

  ```js
  new Array(2); // [empty x 2]
  ```

  > 注意：**空值** 不代表值为 undefined，是数组留有空位而已，位置上并没有值，尽管 length 不为 0，但 `forEach` 无法循环到，不过通过下标索引到的仍是 undefined
  >
  > 注意：如果传入的数字是浮点数或者负数（即非正整数）会报错，因为指定 length 必须为一个 **正整数**。

- 参数为其他值

  以传入的值作为数组成员构造一个数组：

  ```js
  new Array(null); // [null]
  new Array(undefined); // [undefined]
  new Array(true); // [true]
  new Array({}); // [{}]
  ```

- 传入多个参数时

  构造一个新的数组，将传入的多个参数依次作为数组成员，返回此数组

  ```js
  new Array(1, 'a', true); // [1, 'a', true]
  ```

  

### 静态方法

- `Array.isArray(val)`

  > 判断给定的值是否是一个数组

- `Array.from(arrayLike[, mapFn[, thisArg]])`

  > 将 **类数组对象** 或者 **可迭代对象** 转化为真正的数组
  >
  > 类数组对象（arrayLike）：常见于操作 DOM 时返回的 `NodeList` 集合
  >
  > 可迭代对象（iterable）：例如 Set 得到的集合一般是可迭代的
  >
  > 第二个参数 `mapFn` 用于提供转化后 map 操作的回调
  >
  > 第三个参数 `thisArg` 提供执行 map 操作时的上下文环境

- `Array.of(element0[, element1[, ...[, elementN]]])`

  > 由给定的参数构造出一个数组



### 实例方法

- `Array.prototype.valueOf()`

  > 数组的 `valueOf` 方法返回数组本身

- `Array.prototype.toString()`

  > 数组的 `toString` 方法返回数组的字符串形式：
  >
  > ```js
  > var arr = [1, 2, 3, 4, 5];
  > arr.toString(); // "1,2,3,4,5"
  > ```
  > 注意，如果是嵌套的数组，会递归地调用数组的 `toString` 方法：
  >
  > ```js
  > var arr = [1, 2, 3, [4, 5, 6, [7, 8]]];
  > arr.toString(); // "1,2,3,4,5,6,7,8"
  > ```

- `Array.prototype.push(element1[, ...[, elementN]])`

  > 向数组的尾部添加一个或多个元素，并返回新的数组长度

- `Array.prototype.pop()`

  > 移除并返回数组最后一个元素

- `Array.prototype.shift()`

  > 移除并返回数组第一个元素

- `Array.prototype.unshift(element1[, ...[, elementN]])`

  > 向数组头部添加一个或多个元素，并返回新的数组长度

- `Array.prototype.slice(start, end)`

  > 提取数组下标范围 `[start, end)` 的元素作为新数组返回

- `Array.prototype.concat([value1[, value2[, ...[, valueN]]]])`

  - 如果参数是数组，将数组元素添加到原数组尾部并返回
  - 如果参数不是数组，将参数作为新成员添加到原数组尾部并返回
  - 如果有多个参数，依照以上原则，依次添加

  ```js
  var arr = [1, 2];
  arr.concat(3, 4, [5, 6]); // [1, 2, 3, 4, 5, 6]
  ```

- `Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

  > 移除自下标 `start` 开始的 `deleteCount` 个元素，然后依次替换为 `item1[, item2[, ...]]`

- `Array.prototype.indexOf(val)`

  > 找出值为 val 的第一个元素下标，若找不到，返回 -1

- `Array.prototype.lastIndexOf()`

  > 找出值为 val 的最后一个元素下标，若找不到，返回 -1

- `Array.prototype.includes()`

  > 查找数组中时候存在值为 val 的元素，有则返回 true，无返回 false

- `Array.prototype.join([separator])`

  > 以 `separator` 作为连接分隔符，将数组成员作为字符串连接起来，并返回连接的字符串
  >
  > 如果：
  >
  > - 未提供 `separator`，则默认分隔符为 `,` 逗号
  > - 如果数组成员中存在 null, undefined，会被转化为空的字符串再连接

- `Array.prototype.reverse()`

  > 将原数组反序后返回（改变原数组）

- `Array.prototype.sort([compareFunction])`

  > 按排序规则函数将原数组排序后返回（改变原数组）
  >
  > 若未提供排序函数，否则按照转换为的字符串的各个字符的Unicode位点进行排序
  >
  > `compareFunction` 接受以下参数：
  >
  > - a 第一个用于比较的元素
  > - b 第二个用于比较的元素

- `Array.prototype.map(callback[, thisArg])`

  > 将数组依次映射为新的数组，提供映射函数 `callback`，`thisArg ` 为函数执行上下文
  >
  > `callback` 接受以下参数：
  >
  > - `currentValue` 当前循环的成员值
  > - `index` 当前循环的下标
  > - `array` 循环的数组
  >
  > 返回：一个映射的新数组

- `Array.prototype.forEach(callback[, thisArg])`

  > 依次循环数组成员，提供回调函数 `callback`，`thisArg ` 为函数执行上下文
  >
  > `callback` 接受以下参数：
  >
  > - `currentValue` 当前循环的成员值
  > - `index` 当前循环的下标
  > - `array` 循环的数组
  >
  > 返回：`undefined`

- `Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

  > 提供一个累计器，由左至右遍历成员，返回累计结果
  >
  > `initialValue` 初始值，会作为初始累计结果
  >
  > `accumulator` 累计结果

  ```js
  [1,2,3,4,5,6,7,8,9,10].reduce(function (acc, val, index, arr) {
  	return acc + val;
  }, 0);
  // 55
  ```

- `Array.prototype.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

  > 类似 `reduce`，只不过执行方向相反：
  >
  > ```js
  > [1,2,3,4,5,6,7,8,9,10].reduceRight(function (acc, val, index, arr) {
  > 	return acc + '&' + val;
  > });
  > // "10&9&8&7&6&5&4&3&2&1"
  > ```

- `Array.prototype.some(callback(element[, index[, array]])[, thisArg])`

  > 遍历数组，查找是否至少有一个满足条件函数

- `Array.prototype.every(callback(element[, index[, array]])[, thisArg])`

  > 返回所有数组成员是否都满足条件函数的布尔值

- `Array.prototype.find(callback(element[, index[, array]])[, thisArg])`

  > 提供一个查找函数，返回符合条件的第一个成员

- `Array.prototype.findIndex(callback(element[, index[, array]])[, thisArg])`

  > 提供一个查找函数，返回符合条件的第一个成员下标

- `Array.prototype.filter(callback(element[, index[, array]])[, thisArg])`

  > 提供一个过滤函数，返回满足过滤函数的成员列表

- `Array.prototype.flat([depth])`

  > 将多级数组展开，可指定展开深度：`depth`，如果向全部展开，可将 `depth` 设为 `Infinity`
  >
  > ```js
  > arr = [1, 2, [3, 4, [5, 6]], 7];
  > arr.flat(); // [1, 2, 3, 4, [5, 6], 7]
  > ```

  > 注意，如果数组中存在空值，展开时将会被过滤掉

- `Array.prototype.flatMap(callback(currentValue[, index[, array]], thisArg)`

  > 等同于将数组做一次（`depth=1`）展开后进行 map 操作

- `Array.prototype.keys()`

  > 返回可遍历数组下标的遍历器

- `Array.prototype.values()`

  > 返回可遍历数组成员的遍历器

- `Array.prototype.entries()`

  > 返回可遍历数组键值对的遍历器

- `Array.prototype.copyWithin(target[, start[, end]])`

  > 以 target 为起点，将 `[start, end)` 范围的成员依次拷贝过去
  >
  > 如果 start 为空，默认从 0 开始
  >
  > 如果 end 为空，默认数组最后的下标
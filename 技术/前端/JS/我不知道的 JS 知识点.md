# 我不知道的 Javascript 知识点

$1

> 函数 arguments 中的参数是对 形参 的**别名**，所以改变 arguments 的值也会影响到对应形参的值，但是在**严格模式**下，则不存在这种关联



$2

> 当函数直接调用时，this 指向全局对象，一般是 windows，非严格模式下，this 则是 undefined.



$3

**对象有顺序**吗？换句话说，如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同吗？这靠谱吗？

简短的回答是：“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示。详情如下：

例如，让我们考虑一个带有电话号码的对象：

```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```



$4

`for (var i=0;)` 在循环中变量 `i` 只声明了一次，在后续循环都是使用的同一个变量；

`for (let i=0;)` 会在每次循环重新声明变量 `i`，在后续循环都是使用新的变量；



$5

**暂时性死区**

```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

> 只要块级作用域内存在 `let` 命令，它所声明的变量就 “绑定”（binding）这个区域，不再受外部的影响。

> ES6 明确规定，如果区块中存在 `let` 和 `const` 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
>
> 总之，在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。



$6

在全局作用域下，var 声明的变量会自动称为 window 的属性，但是 let, const 不会



$7

**new.target**

在一个函数内部，我们可以使用 `new.target` 属性来检查它是否被使用 `new` 进行调用了

```js
function User() {
  alert(new.target);
}

// 不带 "new"：
User(); // undefined

// 带 "new"：
new User(); // function User { ... }
```



$8

`setTimeout` 和 `setInterval` 都支持额外参数用于向延迟执行的函数传参：

`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)`

`let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)`



$9

`JSON.stringify` 的限制：

- 仅支持 object, array, number, string, boolean, null 几种数据类型

- 值为 undefined 的会被过滤
- function 会被被过滤
- 循环引用会报错

完整调用：

```javascript
let json = JSON.stringify(value[, replacer, space])
```

- value 要编码的值
- replacer 要编码的属性数组或映射函数 `function(key, value)`
- space 用于格式化的空格数量

> 当对象存在 toJSON 方法时，会被自动调用创建此对象的 JSON 编码，例如日期就有内置的方法：Date.prototype.toJSON

`JSON.parse`

```javascript
let value = JSON.parse(str, [reviver]);
```

- str 要解析的 JSON 字符串
- reviver 可选的函数 function(key,value)，该函数将为每个 (key, value) 对调用，并可以对值进行转换。

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 现在正常运行了！
```



$10

`Date.prototype.getTimezoneOffset` 返回的不是时区数，而是时区分钟数：时区 * 60

> 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。所以北京时间得到的是 -480



$11

GMT 时间与 UTC 时间的区别：

> UTC是我们现在用的时间标准，GMT是老的时间计量标准。UTC是根据原子钟来计算时间，而GMT是根据地球的自转和公转来计算时间，也就是太阳每天经过位于英国伦敦郊区的皇家格林威治天文台的时间就是中午12点，。由于现在世界上最精确的原子钟50亿年才会误差1秒([最精确原子钟问世：50亿年误差一秒](https://link.zhihu.com/?target=http%3A//tech.qq.com/a/20141105/008961.htm))，可以说非常精确。而GMT因为是根据地球的转动来计算时间的，而地球的自转正在缓速变慢，所以使用GMT的话，总有一天，打个比方，中午12点，并不是一天太阳当头照的时候，很可能就是早上或者晚上了。所以说UTC更加精确。
>
> 链接：https://www.zhihu.com/question/27052407/answer/56923233



$12

**日期的自动修正功能**

case1

```js
let date = new Date(2013, 0, 32); // 结果是 2013-02-01
```

case2

**二月份陷阱**

```js
let date = new Date(2016, 1, 30); // 2016-01-30
date.setMonth(date.getMonth() + 1)
console.log(date); // 实际变成 2016-03-01，因为2月份不存在 30 号
```

case3

```js
let date = new Date(2016, 0, 2); // 2016-01-02
date.setDate(1); // 2016-01-01
date.setDate(0); // 2015-12-31
```

```js
let date = new Date(2016, 0, 2); // 2016-01-02
date.setDate(1); // 2016-01-01
date.setDate(-1); // 2015-12-30
```



$13

数组方法 `include` 与 `indexOf` 的区别

- 一个返回布尔值，一个返回索引

- `include` 能正确处理 `NaN`

  ```js
  [NaN].includes(NaN) // true
  [NaN].indexOf(NaN)  // -1
  ```

  

$14

 `sort` 陷阱

数组方法 `sort` 默认是按照字符串排序的，而不是数字，因此

```js
[12, 1, 5].sort()
```

得到的结果是 `[1, 12, 5]` 而不是 `[1, 5, 12]`

要对数字进行排序，需指定一个对比函数

```js
[12, 1, 5].sort((a, b) => a-b)
```


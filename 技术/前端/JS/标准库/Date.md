### Date 函数

Date 既可以当作普通函数，也可以通过 `new` 操作符作为构造函数使用。

当作普通函数使用时，不管传入什么参数，均返回当前时间的 **字符串**。

当作为构造函数使用时，返回一个 Date 实例对象。



构造函数接受不同形式的参数：

- 参数为空

  > 返回当前时间的实例对象

- 时间戳

  > `new Date(1378218728000)`

- 日期字符串

  > `new Date('January 6, 2013');`
  >
  > 注：能被 `Date.parse` 解析的日期字符串均可作为构造函数参数

- 参数为代表 **年，月，日，小时，分钟，秒，毫秒** 的整数

  > `new Date(2013, 0, 1, 0, 0, 0, 0)`
  >
  > 注：至少提供 年 和 月，其他参数可省略；月份从 0 开始计算；





### 静态方法

- `Date.now()`

  > 返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000

- `Date.parse()`

  > 用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数
  >
  > 如果解析失败，返回 `NaN`

- `Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])`

  > 接受 年，月，日，小时，分钟，秒，毫秒 作为参数，生成一个 UTC 时间对应的时间戳



### 实例方法

- `Date.prototype.valueOf()`

  > 返回日期的时间戳表示，即距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数

- `Date.prototype.toString()`

  > 返回日期的字符串表示

- `Date.prototype.toLocaleString()`

  > 返回一个当地时间写法的日期字符串

- `Date.prototype.toUTCString()`

  > 返回对应的 UTC（协调世界时） 时间，也就是比北京时间晚 8 个小时

- `Date.prototype.toISOString()`

  > 返回对应时间的 ISO8601 写法

- `Date.prototype.toGMTString()`

  > 返回对应的 GMT（格林尼治时间） 时间

- `Date.prototype.toJSON()`

  > `toJSON`方法返回一个符合 JSON 格式的 ISO 日期字符串，与 `toISOString` 方法的返回结果完全相同

- `Date.prototype.toDateString()`

  > 返回日期字符串

- `Date.prototype.toTimeString()`

  > 返回时间字符串

- `Date.prototype.toLocaleDateString()`

  > 返回一个字符串，代表日期的当地写法

- `Date.prototype.toLocaleTimeString()`

  > 返回一个字符串，代表时间的当地写法

get 相关

- `getTime()`：返回实例距离1970年1月1日00:00:00的毫秒数，等同于`valueOf`方法。
- `getDate()`：返回实例对象对应每个月的几号（从1开始）。
- `getDay()`：返回星期几，星期日为0，星期一为1，以此类推。
- `getYear()`：返回距离1900的年数。
- `getFullYear()`：返回四位的年份。
- `getMonth()`：返回月份（0表示1月，11表示12月）。
- `getHours()`：返回小时（0-23）。
- `getMilliseconds()`：返回毫秒（0-999）。
- `getMinutes()`：返回分钟（0-59）。
- `getSeconds()`：返回秒（0-59）。
- `getTimezoneOffset()`：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

get UTC 版本

- `getUTCDate()`
- `getUTCFullYear()`
- `getUTCMonth()`
- `getUTCDay()`
- `getUTCHours()`
- `getUTCMinutes()`
- `getUTCSeconds()`
- `getUTCMilliseconds()`

set 相关

- `setDate(date)`：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
- `setYear(year)`: 设置距离1900年的年数。
- `setFullYear(year [, month, date])`：设置四位年份。
- `setHours(hour [, min, sec, ms])`：设置小时（0-23）。
- `setMilliseconds()`：设置毫秒（0-999）。
- `setMinutes(min [, sec, ms])`：设置分钟（0-59）。
- `setMonth(month [, date])`：设置月份（0-11）。
- `setSeconds(sec [, ms])`：设置秒（0-59）。
- `setTime(milliseconds)`：设置毫秒时间戳。

set UTC 版本

- `setUTCDate()`
- `setUTCFullYear()`
- `setUTCHours()`
- `setUTCMilliseconds()`
- `setUTCMinutes()`
- `setUTCMonth()`
- `setUTCSeconds()`



### 日期的加减

如果两个日期相加，结果是两个日期字符串简单的拼接的结果：

```js
var d1 = new Date();
var d2 = new Date();
d1 + d2; // "Tue Jun 25 2019 01:24:13 GMT+0800 (中国标准时间)Tue Jun 25 2019 01:24:13 GMT+0800 (中国标准时间)"
```

如果两个日期相减，则是对应时间戳相减：

```js
var d1 = new Date();
var d2 = new Date();
d2 - d1; // 2875
```

其实就是 `+` 运算符把左右的值当作字符串处理，`-` 运算符把左右的值当作数值处理，前者调用 `toString` 方法，后者调用 `valueOf` 方法。



### 参考

<http://javascript.ruanyifeng.com/stdlib/date.html>
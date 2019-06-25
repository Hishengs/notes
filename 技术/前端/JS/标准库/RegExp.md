### 创建方式

JS 的正则表达式有两种创建方式：

- 字面量创建

  `var regex = /xyz/;`

- 构造函数创建

  `var regex = new RegExp('xyz');`

相对而言，字面量创建的方式更加直观高效。



### 修饰符

正则表达式有以下几种修饰符：

- `i` 即 ignore case，是否忽略大小写
- `g` 即 global，是否全局匹配
- `m` 即 multiline，是否多行匹配



### 实例属性

- `RegExp.prototype.ignoreCase`

  > 是否忽略大小写

- `RegExp.prototype.global`

  > 是否全局匹配

- `RegExp.prototype.multiline`

  > 是否多行匹配

- `RegExp.prototype.lastIndex`

  > 返回一个数值，表示下一次开始搜索的位置

- `RegExp.prototype.source`

  > 返回正则表达式的字符串形式（不包括反斜杠），只读



### 实例方法

- `RegExp.prototype.test(str)`

  > 执行一个检索，用来查看正则表达式与指定的字符串是否匹配
  >
  > 返回：Boolean
  >
  > 示例：
  >
  > ```js
  > var r = /^hisheng$/i;
  > r.test('Hisheng'); // true
  > ```

- `RegExp.prototype.exec(str)`

  > 在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
  >
  > 返回值：
  >
  > - 如果匹配成功，`exec`() 方法返回一个数组，并更新正则表达式对象的属性。返回的数组将完全匹配成功的文本作为第一项，将正则括号里匹配成功的作为数组填充到后面。
  >
  > - 如果匹配失败，exec() 方法返回 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)。
  >
  > 示例：
  >
  > ```js
  > var re = /quick\s(brown).+?(jumps)/ig;
  > var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
  > // ["Quick Brown Fox Jumps", "Brown", "Jumps", index: 4, input: "The Quick Brown Fox Jumps Over The Lazy Dog", groups: undefined]
  > ```

  > 由于 `g` 修饰符可以多次匹配，因此可以结合 `while` 循环多次执行 `exec` 获取多次匹配的结果：
  >
  > ```js
  > var str = '_s_s_s';
  > var re = /s/g;
  > let result, results = [];
  > while (result = re.exec(str)) {
  >     results.push(result);
  > }
  > ```

- `RegExp.prototype.toString()`

  > 返回该正则表达式的字符串表示形式



### 字符串与正则相关实例方法

- `String.prototype.match()`

  > 返回所有匹配正则表达式的子字符串
  >
  > 示例：
  >
  > ```js
  > var re = /\b\w*is\w*\b/g; // 查找包含 is 的所有单词
  > var str = 'My name is Hisheng';
  > str.match(re); // ["is", "Hisheng"]
  > ```

- `String.prototype.matchAll()`

  > 返回一个包含所有匹配正则表达式及分组捕获结果的迭代器
  >
  > 主要用于解决需要反复执行 `exec` 的麻烦
  >
  > ```js
  > var re = /\b\w*(is\w*)\b/g; // 查找包含 is 的所有单词
  > var str = 'My name is Hisheng';
  > var res = str.matchAll(re);
  > for (const item of res) {
  >     console.log(item);
  > }
  > // ["is", "is", index: 8, input: "My name is Hisheng", groups: undefined]
  > // ["Hisheng", "isheng", index: 11, input: "My name is Hisheng", groups: undefined]
  > ```

- `String.prototype.search(regexp)`

  > 查找字符串中是否能匹配到给定的正则表达式：`regexp`
  >
  > 返回：匹配返回首次匹配项的索引，不匹配返回 -1
  >
  > 示例：
  >
  > ```js
  > var r = /hisheng/i;
  > var str = 'Hi, My name is Hisheng.';
  > str.search(r); // 15
  > ```
  >
  > 此方法类似于 `RegExp.prototype.test(str)`
  >
  > 相当于 `findIndex` 的正则表达式版本

- `String.prototype.replace(regexp|substr, newSubStr|function)`

  > 返回一个由替换值（`replacement`）替换一些或所有匹配的模式（`pattern`）后的新字符串
  >
  > 示例：
  >
  > ```js
  > // 连接符转驼峰
  > const re = /\-+(\w)/g;
  > function camelize (str) {
  >     return str.replace(re, function (match, $1) {
  >         return $1.toUpperCase();
  >     });
  > }
  > camelize('hi-man');
  > // "hiMan"
  > ```

  > 注意，如果第一个参数是字符串，则只会替换一次

  > 第二个参数如果是字符串，可以在其中使用特殊的字符表示匹配内容：
  >
  > - $&：匹配的子字符串。
  > - $`：匹配结果前面的文本。
  > - $’：匹配结果后面的文本。
  > - $n：匹配成功的第`n`组内容，`n`是从1开始的自然数。
  > - $$：指代美元符号`$`。
  >
  > ```js
  > 'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1');
  > // "world hello"
  > ```

  > 如果第二个参数提供的是替换函数，该函数第一个参数接受到的是匹配的内容 `match`，其余的参数 `$1, $2, ...$n` 分别是匹配到的子项

- `String.prototype.split([separator[, limit]])`

  > 按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组
  >
  > `separator` 可以是字符串，也可以是正则表达式
  >
  > `limit` 一个整数，限定返回的分割片段数量
  >
  > 示例：
  >
  > ```js
  > var str = 'a,b,c,d,e';
  > str.split(',', 2);
  > // ["a", "b"]
  > ```



### 匹配规则



#### 元字符

- 点字符： `.` 

  匹配除回车（`\r`）、换行(`\n`) 、行分隔符（`\u2028`）和段分隔符（`\u2029`）以外的所有字符

- 位置字符：`^` `$`

  - `^` 表示字符串的开始位置
  - `$` 表示字符串的结束位置

- 选择符：`|`

  在正则表达式中表示“或关系”（OR），即 `cat|dog` 表示匹配 `cat` 或 `dog`



#### 转义符

如果某些字符在正则表达式中代表特殊含义，则需要通过转义符转义，即在字符前加上 `\` 反斜杠。

正则表达式中，需要反斜杠转义的，一共有12个字符：`^`、`.`、`[`、`$`、`(`、`)`、`|`、`*`、`+`、`?`、`{`和`\\`

注意：如果使用`RegExp`方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次



#### 特殊字符

- `\cX` 表示 `Ctrl-[X]`，其中的 `X` 是A-Z之中任一个英文字母，用来匹配控制字符。
- `[\b]` 匹配退格键(U+0008)，不要与 `\b` 混淆。
- `\n` 匹配换行键。
- `\r` 匹配回车键。
- `\t` 匹配制表符 tab（U+0009）。
- `\v` 匹配垂直制表符（U+000B）。
- `\f` 匹配换页符（U+000C）。
- `\0` 匹配 `null`字符（U+0000）。
- `\xhh` 匹配一个以两位十六进制数（`\x00`-`\xFF`）表示的字符。
- `\uhhhh` 匹配一个以四位十六进制数（`\u0000`-`\uFFFF`）表示的 Unicode 字符。



#### 字符类

在中括号 `[]` 内的字符，称为字符类，表示有一系列字符可供选择，只要匹配其中一个就可以了

例如 `[xyz]` 表示只要匹配 `x` `y` `z` 其中一个字符即可。

##### 脱字符（^）

如果方括号内的第一个字符是`[^]`，则表示除了字符类之中的字符，其他字符都可以匹配

例如 `[^xyz]`表示除了`x`、`y`、`z`之外都可以匹配

##### 连字符（-）

某些情况下，对于连续序列的字符，连字符（`-`）用来提供简写形式，表示字符的连续范围

例如 `a-z` `0-9` `A-Z`



#### 预定义模式

- `\d` 匹配 0-9 之间的任一数字，相当于 `[0-9]`。
- `\D` 匹配所有 0-9 以外的字符，相当于 `[^0-9]`。
- `\w` 匹配任意的字母、数字和下划线，相当于 `[A-Za-z0-9_]`。
- `\W` 除所有字母、数字和下划线以外的字符，相当于 `[^A-Za-z0-9_]`。
- `\s` 匹配空格（包括换行符、制表符、空格符等），相等于 `[ \t\r\n\v\f]`。
- `\S` 匹配非空格的字符，相当于 `[^ \t\r\n\v\f]`。
- `\b` 匹配词的边界。
- `\B` 匹配非词边界，即在词的内部。



#### 重复次数

通过 `{n,m}` 指明最小，最大，或者精确的重复次数，`{n}` 代表精确重复 n 次，`{n,}` 代表至少重复 n 次，`{n,m}` 代表重复至少 n 次，最多 m 次



#### 量词符号

- `?` 问号表示某个模式出现 0 次或 1 次，等同于 `{0, 1}`
- `*` 星号表示某个模式出现 0 次或多次，等同于 `{0,}`
- `+` 加号表示某个模式出现 1 次或多次，等同于 `{1,}`



#### 贪婪模式

一般具有 `+` 或者 `*` 量词符号的正则表达式，都是贪婪模式，即尽可能多地匹配，如 `a+` 会尽可能地匹配多个 `a` ，直到遇到的不是 `a` 为止。

如果想在匹配到即停止，无需匹配更多，可以在量词符号后加上 `?` ，例如 `a+?` 或者 `a*?` 来开启非贪婪模式。



#### 分组匹配

在正则表达式中，包含括号的一般称为分组匹配，即最终匹配结果会包含此括号内的分组匹配结果。

而且，在分组后的量词符号也是对整个分组起作用的，例如：

```js
var re1 = /nice+/g;
var re2 = /(nice)+/g;
```

这里 re1 是匹配多个 `e`，re2 是匹配多个 `nice`



在正则表达式内，`\1...\n` 一般用于引用分组匹配到的内容，顺序跟括号顺序一致

```js
/(.)b(.)\1b\2/.test("abcabc") // true
```

例如，匹配一个普通的 HTML 标签：

```js
var re = /<\s*([\w\d]+)\s*((\w+\s*=\s*(['"])[^'"]*\4)\s*)*>(.*)<\/\s*\1\s*>/;
re.test('< p class="" id ="te" >你好啊</ p >'); // true
```

上述 `\4` 保证了前后引号一致，要么都是单引号，要么都是双引号。

通过此正则表达式的分组匹配，我们可以解析出标签名称，属性，标签内容等有用信息。



在匹配结果中，`$1...$n` 一般用于表示分组匹配到的结果，顺序跟括号顺序一致

```js
var re = /(\w+)\s+(\w+)/;
var str = 'nice job';
url.replace(re, '$2 $1'); // "job nice"
```



##### 非捕获组（Non-capturing group）

有时候正则表达式内的括号只是为了给量词符号使用，并不想添加到分组结果去，如果忽略呢？

可以通过 `(?:)` 的方式告诉引擎，此括号不是一个分组匹配。

```js
var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
```

以上正则表示，协议部分不是分组匹配，无需添加到匹配结果去。



> 一般在括号内以 `?` 开头的，此括号都有特殊含义。
>
> 例如，`?:` 代表此括号并非捕获组；`?=` 代表先行断言；`?!` 代表先行否定断言；



##### 先行断言（Positive look-ahead）

分组内以 `?=` 开头代表先行断言

`x(?=y)` 称为先行断言（Positive look-ahead），`x` 只有在 `y` 前面才匹配，`y` 不会被计入返回结果

例如，匹配百分比里面的数字：`/\d(?=%)/`



##### 先行否定断言（Negative look-ahead）

分组内以 `?！` 开头代表先行否定断言

`x(?!y)` 称为先行否定断言（Negative look-ahead），`x` 只有不在 `y` 前面才匹配，`y` 不会被计入返回结果

例如，匹配后面不带小数点的数字：`\d(?!\.)`



### 参考

[1] 阮一峰， [《RegExp 对象》](<http://javascript.ruanyifeng.com/stdlib/regexp.html>)
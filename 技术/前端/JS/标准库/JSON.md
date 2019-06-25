**JSON** （JavaScript Object Notation）是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。



> 注意：在 JSON 规范中，undefined，普通对象，数组之外的对象是不允许出现的



JSON 是一种数据格式规范，符合此规范的 JS 对象可被用于序列化（stringify）与反序列化（parse），用于数据传输与交换。



在 JS 中，JSON 是一个全局的对象，主要提供了序列化（stringify）与反序列化（parse）的方法，用于数据传输与交换。



符合 JSON 规范的 JS 对象要求如下：

- 数据类型只能包含：Null, Number, String, Boolean, Object（普通对象，数组）
- 属性名必须使用双引号括起来，字符串必须使用双引号括起来
- 不允许尾逗号
- 对于数值，禁止出现前导 0，如果有小数点，后面至少有一位数字



> 注意：JSON 只是一个全局对象，并不是一个函数，因此不要把它当作构造函数使用



### 允许的数据类型

- Null
- Number
- String
- Boolean
- 普通对象
- 数组
- 日期（调用其 `toJSON()` 方法作为字符串转换）



### 方法

#### JSON.stringify(value[, replacer [, space]])

将一个 JavaScript 值（value，允许的数据类型，见上文）转换为一个 JSON 字符串

`value`

被转换的值

`replacer`

如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考[使用原生的 JSON 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_native_JSON#The_replacer_parameter)一文。

如果是函数，接受每一次转换的 key，value 作为参数。

`space`

指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。

> 一般使用 `space` 来格式化 JSON 输出到文件



##### 具体转换规则

- 转换值如果有 `toJSON()` 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`，任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。函数、`undefined` 被单独转换时，会返回 `undefined`，如`JSON.stringify(function(){})` 或者 `JSON.stringify(undefined)`
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
- Date 日期调用了 `toJSON()` 将其转换为了 string 字符串（同 `Date.toISOString()`），因此会被当做字符串处理。
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 `Map` / `Set` / `WeakMap` / `WeakSet`，仅会序列化可枚举的属性。



> 注意：如果一个被序列化的对象拥有 `toJSON` 方法，那么该 `toJSON` 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 `toJSON` 方法后的返回值会被序列化



#### JSON.parse(text[, reviver])

用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象

`text`

要被解析成 JavaScript 值的字符串

`reviver`

转换器，如果传入该参数(函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前

依次接受每一个属性的 key，value 作为参数。

**具体规则**：

如果指定了 `reviver` 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）。更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 `reviver` 函数，在调用过程中，当前属性所属的对象会作为 `this` 值，当前属性名和属性值会分别作为第一个和第二个参数传入 `reviver` 中。如果 `reviver` 返回 `undefined`，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。

当遍历到最顶层的值（解析值）时，传入 `reviver` 函数的参数会是空字符串 `""`（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 `this` 值会是 `{"": 修改过的解析值}`，在编写 `reviver` 函数时，要注意到这个特例。（这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历）

```js
JSON.parse('{"p": 5}', function (k, v) {
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }
```


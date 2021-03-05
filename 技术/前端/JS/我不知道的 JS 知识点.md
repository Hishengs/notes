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
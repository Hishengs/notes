## 概述

Generator，生成器，是 ES6 新提出的关于异步流程控制的解决方案。

可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态，每一次遍历，都会改变一个状态。



## 生成器语法

普通函数在 `function` 与 `()` 之间添加了 `*`，该函数就成了一个生成器：

```js
function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();

g instanceof gen // true
```

执行生成器函数会返回一个相关的生成器对象，通过该对象可以逐步执行控制每一步异步操作。

> 注意：生成器对象不是通过 new 构造来的，生成器并不是构造函数，如果使用 new 实例化生成器函数，会直接报错：`TypeError: gen is not a constructor`



### 生成器对象

生成器对象由执行生成器函数而来，该对象包含了以下原型方法：

- `Generator.prototype.next()`

  > 返回一个由 [`yield `](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 表达式生成的值，该值是一个对象，包含了以下键：
  >
  > - `value` yield 执行的值
  > - `done` 是否已经运行结束

- `Generator.prototype.return()`

  > 返回给定的值并提前结束生成器

- `Generator.prototype.throw()`

  > 向生成器抛出一个错误，外部抛出错误，在生成器函数内部捕获



### yield

`yield` 是一个仅在生成器函数内部使用的关键字，`yield` 之后跟随的是值或者表达式；

1. 第一次调用生成器对象的 `next` 方法时，会开始运行生成器函数，直到遇到一个 `yiled` 表达式，执行其后的表达式并在此处停下来，将表达式的结果作为返回值返回给 `next`；
2. 当继续执行 `next` 方法时，会从上次停止的位置继续执行，直到遇到下一个 `yield` 表达式，重复步骤1相同的操作；
3. 当 `next` 执行时，未遇到下一个 `yield` 表达式，会直接运行到函数结束，将 `return` 的值作为返回值返回给 `next`，并将 `done` 标志为 `true`



> `yield`表达式如果用在另一个表达式之中，必须放在圆括号里面：
>
> ```js
> console.log('Hello' + yield 123); // SyntaxError
> console.log('Hello' + (yield 123)); // OK
> ```



## 可遍历

任意一个对象的 `Symbol.iterator` 方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象（生成器对象）。

由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的 `Symbol.iterator` 属性，从而使得该对象具有 Iterator 接口。

因此，也可以使用 `for...of` 语法对生成器对象进行遍历，其原理相当于不断地调用生成器对象的 `next` 方法：

```js
function* gen() {
    let i = 1;
    while (i<=100) {
        yield i;
        ++i;
    }
}

var nums = gen();

for (const num of nums) {
    console.log(num);
}
// 输出 1-100
```

同样地，扩展运算符（`...`）、解构赋值和`Array.from`方法内部调用的，都是遍历器接口，即也可以直接遍历生成器对象。

```js
[...nums()]; // [1, 2, ..., 100]
Array.from(nums()); // [1, 2, ..., 100]
```



## yield 的返回值

yield 会将其后的表达式结果作为返回值返回给 `next` 方法，而其本身其没有返回值的，或者总返回 `undefined`

```js
function* gen () {
    const res = yield "hello world";
    console.log(res); // undefined
}
```

如果使得 yield 具有返回值呢？

可以通过给 `next` 传参的方式，将其参数作为上一个 `yield` 表达式的返回值：

```js
function* gen () {
    const res = yield "hello world";
    console.log(res); // "god job"
}

var g = gen();
g.next("god job");
```

> 注意，第一次调用 next 时，还不存在上一个 yield，所以向 next 传参是无效的



## 生成器嵌套

如果在生成器函数内部要执行另一个生成器，一般是通过手动调用该生成器对象：

```js
function* foo () {
    yield 3;
    yield 4;
}

function* bar {
    yield 1;
    yield 2;
    for (const item of foo()) {
        console.log(item);
    }
    yield 5;
}

for (const item of bar()) {
    console.log(item);
}
// 输出：1 2 3 4 5
```

ES6 提供了 `yield*` 表达式，作为解决办法，用来在一个 Generator 函数里面执行另一个 Generator 函数：

```js
function* bar {
    yield 1;
    yield 2;
    yield* foo();
    yield 5;
}
```

上述代码执行到 `yield* foo();` 时，会将执行权转交给 `foo` 生成器函数；执行完 `foo` 内部的 `yield` 再将执行权交回给 `bar` 函数。



## 例子

### 斐波那契数列

```js
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
```

### 为对象添加遍历器接口

```js
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
```



## 参考

[1] MDN, [Generator](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator>)

[2] 阮一峰，[ECMAScript 6 入门](http://es6.ruanyifeng.com/)，[《Generator 函数的语法》](<http://es6.ruanyifeng.com/#docs/generator>)
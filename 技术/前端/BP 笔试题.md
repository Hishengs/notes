## Part1

> 写出以下代码片段的运行结果

```js
1 + 2 + 3 + ‘4’ = ?
‘4’ + 3 + 2 + 1 = ?
```



```js
typeof null
Typeof undefined
Typeof {}
Typeof []
```



```js
function bar() {
    return foo;
    var foo = 11;
}
bar(); // 执行结果？

function bar() {
    return foo;
    function foo() {}
    var foo = 11; 
}
bar(); // 执行结果？
```



```js
x = 1;
function bar() {
    this.x = 2;
    return {x:3};
}
var foo = new bar();
console.log(foo.x);
```



## Part2

1. 实现一个函数，判断变量的具体类型，返回其具体的类型字符串（如 string, number, null, undefined, Boolean, object, array, date…）
2. 实现一个函数，生成指定范围内的随机数（整数），如 function getRandom (min, max)
3. 实现一个函数，对数组去重，要求效果：`[1, 2, 2, 3, 4, 5, 5, 5] => [1, 2, 3, 4, 5]`



## Part3

如何判断元素是否处于可见区域？如何将元素滚动到可见区域？



请写出 JS 中所有的假值



call, apply, bind 的区别？



window.onload 与 document.onDOMContentLoaded 的区别？



手写实现一个原生 ajax post 请求



手写实现一个 Promise


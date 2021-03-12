# 如何让 (a == 1 && a == 2 && a == 3) 的值为true？



### 利用隐式类型转换

`==` 操作符在左右数据类型不一致时，会先进行隐式转换。

`a == 1 && a == 2 && a == 3` 的值意味着其不可能是基本数据类型。因为如果 a 是 null 或者是 undefined bool类型，都不可能返回true。

因此可以推测 a 是复杂数据类型，JS 中复杂数据类型只有 `object`，回忆一下，Object 转换为原始类型会调用什么方法？

- 如果部署了 `[Symbol.toPrimitive]` 接口，那么调用此接口，若返回的不是基本数据类型，抛出错误。
- 如果没有部署 `[Symbol.toPrimitive]` 接口，那么根据要转换的类型，先调用 `valueOf` / `toString`
  1. 非 Date 类型对象，`hint` 是 `default` 时，调用顺序为：`valueOf` >>> `toString`，即 `valueOf`  返回的不是基本数据类型，才会继续调用  `toString `，如果 `toString`  返回的还不是基本数据类型，那么抛出错误。
  2. 如果 `hint` 是 `string`(Date对象的hint默认是string) ，调用顺序为：`toString` >>> `valueOf`，即`toString` 返回的不是基本数据类型，才会继续调用 `valueOf`，如果`valueOf` 返回的还不是基本数据类型，那么抛出错误。
  3. 如果 `hint` 是 `number`，调用顺序为： `valueOf` >>> `toString`



### 利用数据劫持（Proxy / Object.definedProperty）

```js
const a = new Proxy({}, {
    i: 1,
    get: function () {
        return this.i++;
    }
});
```



### 数组的 <code>toString</code> 接口默认调用数组的 <code>join</code> 方法，重写 <code>join</code> 方法

```js
const a = [1, 2, 3];

a.toString = function () {
    return this.shift();
}
```


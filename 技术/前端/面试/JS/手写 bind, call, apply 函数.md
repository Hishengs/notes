#### 手写实现 call, bind, apply

**call**

```js
Function.prototype.call = function (ctx, ...args) {
    // 防止传进来的是空
    ctx = ctx || window;
    const fn = this;
    // 绑定一个临时的函数
    ctx.fn = fn;
    // 以对象方法的方式执行函数
    const result = ctx.fn(...args);
    // 执行结束后删除这个对象方法
    delete ctx.fn;
    // 返回结果
    return result;
}
```

参考：<https://github.com/airuikun/Weekly-FE-Interview/issues/6>

**apply**

```js
Function.prototype.apply = function (ctx, args) {
    // 防止传进来的是空
    ctx = ctx || window;
    const fn = this;
    // 绑定一个临时的函数
    ctx.fn = fn;
    // 以对象方法的方式执行函数
    const result = ctx.fn(...args);
    // 执行结束后删除这个对象方法
    delete ctx.fn;
    // 返回结果
    return result;
}
```

**bind**

```js
Function.prototype.apply = function (ctx, ...args) {
    // 防止传进来的是空
    ctx = ctx || window;
    const fn = this; 
    return function (...args1) {
        // 绑定一个临时的函数
        ctx.fn = fn;
        // 以对象方法的方式执行函数
        const result = ctx.fn(...args, ...args1);
        // 执行结束后删除这个对象方法
        delete ctx.fn;
        // 返回结果
        return result;
    }
}
```


先定义几个通用函数：

```js
// resolve 使用
function onSuccess (flag) {
    console.log('onSuccess', flag);
}
// reject 使用
function onError (flag) {
    console.log('onError', flag);
}
```



执行以下代码：

```js
var p = new Promise(function (resolve, reject) {
    resolve('done');
});

p.then(() => {
    onSuccess(1);
}, () => {
    onError(1);
}).then(() => {
    onSuccess(2);
}, () => {
    onError(2);
});
```

输出：

```js
onSuccess 1
onSuccess 2
```

当 Promise 正常 resolve 时，所有 then 指定的成功回调都被执行



考虑以下代码：

```js
var p = new Promise(function (resolve, reject) {
    reject('fuckup');
});

p.then(() => {
    onSuccess(1);
}, () => {
    onError(1);
}).then(() => {
    onSuccess(2);
}, () => {
    onError(2);
});
```

输出：

```js
onError 1
onSuccess 2
```

你没看错，当 Promise reject 出来的错误有错误回调函数处理后，接下来还会继续执行 then 函数的成功回调部分



如果我在第一个 then 函数抛出了错误呢？

会被第二个错误处理函数捕捉处理：

```js
p.then(() => {
    onSuccess(1);
}, () => {
    onError(1);
    throw new Error('fuckup again');
}).then(() => {
    onSuccess(2);
}, () => {
    onError(2);
});
```

输出：

```js
onError 1
onError 2
```



如果在 Promise 状态以及 resolve （fullfilled 或者 rejected）时，再次添加 then 回调时，回调还会被执行吗？

执行以下代码：

```js
p.then(() => {
    onSuccess(1);
}, () => {
    onError(1);
}).then(() => {
    onSuccess(2);
}, () => {
    onError(2);
});

p.then(() => {
    onSuccess(3);
}, () => {
    onError(3);
});
```

输出：

```js
onSuccess 1
onSuccess 3
onSuccess 2
```

是的，会被执行。可是为什么是先输出 3 再输出 2 呢？

这涉及到 JS 异步任务执行时机的问题。

- 首先，所有同步代码被执行

- Promise 微任务回调被推进微任务队列（`onSuccess 1` 和 `onSuccess 3`）

- 本轮同步任务执行完毕，开始执行微任务（`onSuccess 1` 和 `onSuccess 3`）

  因此，输出 1 和 3

- `onSuccess 1` 任务结束后，将 `onSuccess 2` 推进微任务队列，本轮循环结束

- 开始执行微任务 `onSuccess 2`，输出 2



猜测以下代码输出：

```js
p.then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
});

p.then(() => {
    console.log(4);
});
```

答案是：

```js
1
4
2
3
```



陷阱：如果在 then 回调执行一个异步任务，该异步任务抛出了错误，能被 Promise 的 catch 捉到吗？

考虑以下代码：

```js
Promise
  	.resolve()
    .then(() => {
        setTimeout(() => {
            throw new Error('bazinga!');
        }, 0);
	})
    .catch(err => {
    	console.log('catch u', err);
	});
```

输出是什么？

答案是无法捕捉，错误会被抛出来。

因此，谨记，Promise 对异步报错无能为力；其实，JS 本身对异步报错就是鸡肋且无能为力的。
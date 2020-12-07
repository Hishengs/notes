## 手写一个 Promise

或者，更准确地说，根据 [Promsies/A+](https://promisesaplus.com/) 规范模拟实现 Promise 函数。



## 规范

一个 Promise 在某一时刻只能存在以下三种状态之一：pending, fulfilled, rejected，并且方向只能是 pending 到 fulfilled 或者 pending 到 rejected，fulfilled, rejected 是 Promise 的终态，之后状态不再允许改变。



### then

then 方法接受两个参数，定义如下：

`promise.then(onFulfilled, onRejected)`

`onFulfilled` 是 promise 到达 `fulfilled` 状态时的回调；

`onRejected` 是 promise 到达 `rejected` 状态时的回调；

`onFulfilled` 和 `onRejected` 都是可选的，且必须是函数，如果不是，应该被忽略；

`onFulfilled` 和 `onRejected` 都必须在 promise 到达 `fulfilled`  或者 `rejected` 状态时被调用，且只能被执行一次；

then 方法可以被多次调用，回调函数应该在到达状态后**依次**被执行；

then 方法必须依然返回一个 promise；



## 具体实现

```js
const STATES = {
    PENDING: 1,
    FULLFILLED: 2,
    REJECTED: 3
};

function isPromise (val) {
    return val instanceof XPromise;
}

function XPromise (fn) {
    // 当前 Promise 的状态
    this.state = STATES.PENDING;

    // 所有的 then 回调：[[onFulfilled, onRejected], ...]
    this.thenCallbacks = [];
    // 所有的 finally 回调
    this.finalCallbacks = [];

    // Promise 的最终值
    this.resolveValue = undefined;
    // reject 的 Reason
    this.rejectedReason = undefined;

    
    if (fn && typeof fn === 'function') {
        try {
            fn(val => {
                this.resolve(val);
            }, err => {
                this.reject(err);
            });
        } catch (err) {
            this.reject(err);
        }
    } else throw TypeError(`Promise resolver ${fn} is not a function`);
}

// 2.1.1.1 from PENDING to FULLFILLED
XPromise.prototype.resolve = function resolve (value) {
    // 防止被调用多次
    if (this.state !== STATES.PENDING) return;
    // 传递的值是否仍然是一个 Promise
    if (isPromise(value)) {
        value.then(this.resolve, this.reject);
        return;
    }
    this.state = STATES.FULLFILLED;
    this.resolveValue = value;
    this.onFullfilled();
}

XPromise.prototype.onFullfilled = function onFullfilled () {
    let cbs;
    // 2.2.2.1 it must be called after promise is fulfilled, with promise’s value as its first argument
    // 2.2.2.3 it must not be called more than once
    while (cbs = this.thenCallbacks.shift()) {
        // 回调必须被异步执行
        setTimeout(() => {
            try {
                // 2.2.7.1 If either onFulfilled or onRejected returns a value x,
                // run the Promise Resolution Procedure [[Resolve]](promise2, x)
                if (cbs[0]) {
                    const res = cbs[0](this.resolveValue);
                    // 返回值是否依然是一个 Promise
                    if (isPromise(res)) {
                        res.then(val => {
                            this.resolveValue = val;
                            this.onFullfilled();
                        });
                        break;
                    } else this.resolveValue = res;
                }
            } catch (err) {
                this.onRejected(err);
                break;
            }
        }, 0);
    }
    // 如果所有的 then 回调都执行完了，开始执行 finally 的回调
    if (!this.thenCallbacks.length) {
        while (cb = this.finalCallbacks.shift()) {
            cb();
        }
    }
}

// 2.1.1.1 from PENDING to REJECTED
XPromise.prototype.reject = function reject (err) {
    // 防止被调用多次
    if (this.state !== STATES.PENDING) return;
    this.state = STATES.REJECTED;
    if (typeof err === 'string') err = new Error(err);
    if (!(err instanceof Error)) return;
    this.onRejected(err);
}

XPromise.prototype.onRejected = function onRejected (err) {
    this.rejectedReason = err;
    let cbs;
    // 2.2.3.1 it must be called after promise is rejected, with promise’s reason as its first argument
    // 2.2.3.3 it must not be called more than once
    while (cbs = this.thenCallbacks.shift()) {
        if (cbs[1]) {
            // 回调必须被异步执行
            setTimeout(() => {
                try {
                    // 2.2.7.1 If either onFulfilled or onRejected returns a value x,
                    // run the Promise Resolution Procedure [[Resolve]](promise2, x)
                    this.resolveValue = cbs[1](this.rejectedReason);
                    this.rejectedReason = undefined;
                    this.onFullfilled();
                    break;
                } catch (e) {
                    this.onRejected(e);
                    break;
                }
            }, 0);
        }
    }
    // 没找到错误处理回调，直接抛出
    if (this.rejectedReason) {
        throw this.rejectedReason;
    }
}

// 2.2.6 then may be called multiple times on the same promise
XPromise.prototype.then = function (onFullfilledCb, onRejectedCb) {
    // 2.2.1.1 If onFulfilled is not a function, it must be ignored
    if (typeof onFullfilledCb !== 'function') return newPromise;

    if (this.state !== STATES.PENDING) {
        if (this.state === STATES.FULLFILLED) {
            onFullfilledCb(this.resolveValue);
        } else if (this.state === STATES.REJECTED) {
            if (onRejectedCb && typeof onRejectedCb === 'function') {
                onRejectedCb(this.rejectedReason);
            }
        }
    } else {
        this.thenCallbacks.push([onFullfilledCb, onRejectedCb]);
    }
    // 2.2.7 then must return a promise
    return this;
}

XPromise.prototype.catch = function (fn) {
    if (typeof fn !== 'function') return this;

    if (this.state !== STATES.PENDING) {
        if (this.state === STATES.REJECTED) {
            fn(this.rejectedReason);
        }
    } else {
        this.thenCallbacks.push([null, fn]);
    }

    return this;
}

XPromise.prototype.finally = function (fn) {
    if (typeof fn !== 'function') return this;

    if (this.state !== STATES.PENDING) {
        fn();
        // 之前有未处理的抛错，继续调用仍然抛错
        if (this.state === STATES.REJECTED && this.rejectedReason) {
            this.onRejected(this.rejectedReason);
        }
    } else {
        this.finalCallbacks.push(fn);
    }

    return this;
}

XPromise.resolve = function (val) {
    return new XPromise((resolve, reject) => {
        resolve(val);
    });
}

XPromise.reject = function (err) {
    return new XPromise((resolve, reject) => {
        reject(err);
    });
}

XPromise.all = function (promises) {
    return new XPromise((resolve, reject) => {
        const total = promises.length, results = [];
        let doneNum = 0;
        for (const p of promises) {
            p.then((val) => {
                doneNum++;
                results.push(val);
                if (doneNum === total) resolve(results);
            }, reject);
        }
    });
}

XPromise.race = function (promises) {
    return new XPromise((resolve, reject) => {
        let resolved = false, rejected = false;
        for (const p of promises) {
            p.then((val) => {
                if (resolved || rejected) return;
                resolved = true;
                resolve(val);
            }, err => {
                reject(err);
                rejected = true;
            });
        }
    });
}

module.exports = XPromise;
```


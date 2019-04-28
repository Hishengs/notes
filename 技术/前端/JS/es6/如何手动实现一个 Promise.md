# 如何手动实现一个 Promise

代码如下：

```js
function Prm (fn) {
  this.thenFns = [];
  this.onError = function () {};
  this.onFinal = function () {};
  this.hasError = false;

  this.resolve = function (res) {
    let curRes = res;
    for (const fn of this.thenFns) {
      try {
        if (curRes instanceof Prm) {
          curRes = curRes
            .then(fn)
            .catch(this.onError);
        } else {
          curRes = fn(curRes);
        }
      } catch (err) {
        if (fn !== this.onFinal) {
          this.reject(err);
        }
        break;
      }
    }
  };

  this.reject = function (err) {
    this.hasError = true;
    if (this.onError && typeof this.onError === 'function') {
      this.onError(err);
    } else {
      throw err;
    }
  };

  this.then = function (cb) {
    checkCb(cb, 'then');
    this.thenFns.push(cb);
    return this;
  }
  
  this.catch = function (cb) {
    checkCb(cb, 'catch');
    this.onError = function (err) {
      cb(err);
      this.onFinal && this.onFinal();
    }.bind(this);
    return this;
  }
  
  this.finally = function (cb) {
    checkCb(cb, 'finally');
    this.onFinal = cb;
    // final callback as last special then callback
    this.thenFns.push(this.onFinal);
  }

  const checkCb = function (cb, name = '') {
    if (typeof cb !== 'function') this.reject(new Error('callback of ' + name + ' must be a function'));
  }.bind(this);

  fn(this.resolve.bind(this), this.reject.bind(this));
}
```

我们写一个 `sleep` 函数来测试一下

```js
function sleep (t, data) {
    return new Prm ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, t * 1000);
    });
}
```

测试案例

```js
// 1. 测试正常 then, finally
sleep(2, 'x')
    .then(data => {
        console.log('1 then', data);
        return sleep(2, 'y');
    })
    .then(data => {
        console.log('2 then', data);
        return sleep(2, 'z');
    })
    .then(data => {
        console.log('3 then', data);
    })
    .catch(err => {
        console.log('got an err', err);
    })
    .finally(() => {
        console.log('test case done');
    });
// 结果
/*
undefined
1 then x
2 then y
3 then z
*/

test case done
// 2. 测试异常抛错
sleep(2, 'x')
    .then(data => {
        console.log('1 then', data);
        return sleep(2, 'y');
    })
    .then(data => {
        console.log('2 then', data);
        return sleep(2, 'z');
    })
    .then(data => {
        console.log('3 then', data);
        throw new Error('error for test');
    })
    .catch(err => {
        console.log('got an err', err);
    })
    .finally(() => {
        console.log('test case done');
    });

// 结果
/*
undefined
1 then x
2 then y
3 then z
got an err Error: error for test
    at VM1148 Script snippet %233:86
    at Prm.resolve (VM1148 Script snippet %233:17)
    at VM1148 Script snippet %233:69
test case done
*/
```

Promise 的原理其实不难，实现过程中更难的在于对流程的控制和错误的处理。
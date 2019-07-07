#### 手写一个 Promise

```js
function Promise (fn) {
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


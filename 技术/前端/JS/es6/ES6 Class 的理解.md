# ES6 Class 的理解

熟悉 ES6 的人应该都知道，ES6 实现的 Class 本质上就是构造函数的语法糖，旧酒新瓶罢了。



我们先从原型链简单讲起。



### 玩转原型链

其实，对于原型链的理解，看起来很复杂，其实很简单，只需要抓住两点：

- 只有对象才具有原型（`__proto__`）

  因为无论是类还是构造函数，得到的实例都是对象，函数本质上也是对象，所以也有

- 只有函数才具有原型属性（`prototype`）

  因为 JS 的任意函数都可以作为构造函数使用生成实例，如果没有主动设置 `prototype`属性，则默认是一个空对象

所以，根据以上我们知道，普通函数都具有两面性，既有原型（`__proto__`），也有原型属性（`prototype`）



因此，在理解 ES6 的 Class 之前，必须记住两点：

1. Class 本质上是一个（构造）函数
2. 由于函数也是对象，所以 Class 也具有对象的特性



###  Class 本质上是一个（构造）函数

对于第一点，我们可以通过 `typeof` 判断，得出结果也确实是 `function`

```js
class A {}

typeof A; // function
```

所以你可以理解为：

```js
function A () {}

class A () {}
```

本质上是一样的

由于实例（对象）的原型继承于其构造函数的原型属性，所以

```
const a = new A();

a.__proto__ === A.prototype
```



### Class 也具有对象的特性

这里指的就是对象的原型（即 `__proto__`），即类也具有 `__proto__`

那么，类的 `__proto__`是什么呢？

1. 如果类 B 直接定义，没有继承，其 `__proto__`直接指向 `Function.prototype`

   你可以理解为类 B 是 Function 的一个实例

2. 如果类  B 继承于 A，则其 `__proto__` 指向 `A.prototype`，即**指向父类**



### 玩转 Class 继承

有了上面的知识基础，我们类理解 Class 的继承机制简直易如反掌。



我们以类 A，类 B 为起点，类 B 继承自 A

```js
class A {}

class B extends A {}
```



#### 从对象的角度

A 和 B 是类，类的本质是（构造）函数，函数本质是对象，所以 A 和 B 都有原型（`__proto__`）

A 的原型（`__proto__`）是什么？

A 以上无父类， `__proto__`指向 `Function.prototype`

B 的原型（`__proto__`）是什么？

B 的父类是 A，所以 `__proto__`指向 `A`



所以，从对象的角度，子类实现了父类属性的继承，例如，在父类定义的属性（我们称之为静态属性）或者方法（我们称之为静态方法），子类都能继承到。

```js
class A {}
A.age = 21;
A.getAge = function () {
    return A.age;
}

class B extends A {}

console.log(A.__proto__ === Function.prototype); // true
console.log(B.__proto__ === A); // true
console.log(B.age); // 21
B.getAge(); // 21
```



> 注意，以上规则只有 ES6 的类才有，ES5 的原型链继承需要自己手动实现类似的静态属性和方法的继承。
>
> 所以才说，ES6 的类是ES5 的原型链继承的语法糖。



#### 从函数的角度

函数具有原型属性（`prototype`）



子类的原型属性（`prototype`）继承自父类的原型属性（`prototype`）



因此，类之间通过 `prototype`原型链实现了“所谓的”继承。

```js
class A {
    province = 'Guangdong';

    getProvince () {
        return this.province;
    }
}

class B extends A {
    city = 'ShenZhen';

	getCity () {
        return this.city;
    }
}

const b = new B();

b.getProvince(); // 'Guangdong'
b.getCity(); // 'ShenZhen'
```

以上用原型链来实现是这样的：

```js
function A () {
    this.province = 'Guangdong';
}

A.prototype.getProvince = function () {
    return this.province;
}

function B () {
    A.call(this)；
    this.city = 'ShenZhen';
}

B.prototype = new A();
B.prototype.constructor = B;
A.prototype.getCity = function () {
    return this.city;
}

const b = new B();

b.getProvince(); // 'Guangdong'
b.getCity(); // 'ShenZhen'
```

因此，ES6 Class 的继承本质上还是原型链继承。



ok，讲完了继承，接下来讲一下 ES6 如何实现典型的面向对象类的特性以及背后相关原型链实现。



### 静态属性，静态方法

上面其实已经提到过了，在 ES6 Class 中，定义静态属性与方法是这样的：

```js
class A {
    static num = 0;

    static count () {
        A.num++;
    }
}
```

为什么是 A.num 而不是 this.num 呢？

因为静态属性和方法都是直接作为函数属性定义的，并不是定义在实例上（this），即相当于

```js
function A () {}

A.num = 0;
A.count = function () {
    A.num++;
}
```

> 直接在类内部定义静态属性其实目前 ES6 并不支持，不过这种写法现在已经在提案中了：https://github.com/tc39/proposal-private-methods，然而，想用别的途径实现也很简单，直接在类上声明即可，`A.num = 0;` 即声明了一个静态属性。



### 公共属性，公共方法

其实不加任何关键字直接定义的属性和方法都是公共属性，公共方法

```js
class A {
    city = 'ShenZhen';

    getCity () {
        return this.city;
    }
}
```



### 保护属性，保护方法

额，ES6 Class 并不支持。不过，已经有了提案：https://github.com/tc39/proposal-private-methods



那么，有什么奇技淫巧吗？



### 私有属性，私有方法

ES Class 并没有定义私有属性，私有方法，不过目前已经有相关提案，可以了解一下：https://github.com/tc39/proposal-private-methods



不过，其实也有很多变通的方法，虽然大都有一定缺陷，例如，通过 IIFE 闭包实现私有属性和方法

```js
const Wallet = (function () {
    let money = 0;
    
    function getMoney () {
        return money;
    }
    
    return class {
        constructor (m) {
            money = m;
        }
        
        display () {
            console.log('Total: ' + getMoney());
        }
        
        deposit (m) {
            money += m;
        }
    };
})();
```

测试一下

```js
const myWallet = new Wallet(1000);

myWallet.money // undefined
myWallet.getMoney // undefined

myWallet.display(); // Total: 1000
myWallet.deposit(200);
myWallet.display(); // Total: 1200
```

这种方法缺点很明显，无法继承。
### 你不知道的 JSON.stringify()

这个函数在日常中应该是经常使用的，可是你知道它一共接收几个参数，每个参数的作用又是什么吗？

先看一下 MDN 上此函数的[释义](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)：

> The **JSON.stringify()** method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

函数定义：

```
JSON.stringify(value[, replacer[, space]])
```

* **value** 序列化的值，支持原始值也支持对象
* **replacer** 值的替换规则，一个替换函数，或者一个属性的过滤数组
* **space** 格式化的空格

我们主要关注后两个参数。



### replacer

这个参数有两个可能：

* function (key, value)

  即提供一个替换函数，根据需要替换原来对象的值。

  ```js
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
  JSON.stringify(foo, (key, value) => {
      if (typeof value === 'number') {
          return undefined; // JSON.stringify 会忽略值为 undefined 的属性，此处可起到过滤作用
      } else return value;
  });
  // 执行结果：
  // "{"foundation":"Mozilla","model":"box","transport":"car"}"
  ```

* array

  提供一个属性白名单，最终序列化后只会留下白名单内的属性。

  ```js
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
  JSON.stringify(foo, ['model', 'transport']);
  // 执行结果：
  // "{"model":"box","transport":"car"}"
  ```

如果提供其他值，则保持默认行为，什么也不做。如果有第三个参数，此处我们一般给个 `null`。



### space

顾名思义，空格，其实就是格式化的时候使用多少个空格替代 `tab` 格式化。

空格范围：[0, 10] 最大值只能是 10.

这个参数有两种可能：

* **数值** 代表多少个空格用于替代，范围：[0, 10] ，最大值只能是 10
* **字符串** 用指定字符串代表一个空格单位，最大也是 10 个单位

```js
var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, null, 2); // 2 个空格
// 执行结果：
/*
"{
  "foundation": "Mozilla",
  "model": "box",
  "week": 45,
  "transport": "car",
  "month": 7
}"
*/
JSON.stringify(foo, null, 4); // 4 个空格
// 执行结果：
/*
"{
    "foundation": "Mozilla",
    "model": "box",
    "week": 45,
    "transport": "car",
    "month": 7
}"
*/
JSON.stringify(foo, null, '--');
// 执行结果：
/*
"{
--"foundation": "Mozilla",
--"model": "box",
--"week": 45,
--"transport": "car",
--"month": 7
}"
*/
```



### 异常

什么情况下使用 `JSON.stringify` 会出现异常情况或者我们意料之外的结果呢？主要有以下几种：

* 循环引用

  如果你序列化一个对象，此对象存在循环引用，则会导致序列化失败：

  ```js
  var obj = {
      name: 'Jack',
      age: 21,
  };
  obj.self = obj;
  JSON.stringify(obj);
  // 执行结果
  // Uncaught TypeError: Converting circular structure to JSON at JSON.stringify
  ```

* 值为 undefined, symbol, function 的属性会被忽略





### 监听屏幕旋转 orientationchange

这个 `API` 可以将你手机是否横屏的情况暴露给需要知道的人知道。

```js
screenOrientation: function(){
    let self = this;
    let orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        self.angle = orientation.angle;
    });
}
```

其中，angle 的值：

0 竖屏 90 向左横屏 -90/270 向右横屏 180 倒屏





### 电池状态 navigator.getBattery()

 这个 `API` 可以将你手机电池状态的情况暴露给需要知道的人知道。

这个 `api` 返回的是一个 `promise` 对象，会给出一个 `BatteryManager` 对象，对象中包含了以下信息：

```js
getBatteryInfo: function(){
    let self = this;
    if(navigator.getBattery){
        navigator.getBattery().then(function(battery) {
            // 判断是否在充电
            self.batteryInfo = battery.charging ? `在充电 : 剩余 ${battery.level * 100}%` : `没充电 : 剩余 ${battery.level * 100}%`;
            // 电池充电状态改变事件
            battery.addEventListener('chargingchange', function(){
                self.batteryInfo = battery.charging ? `在充电 : 剩余 ${battery.level * 100}%` : `没充电 : 剩余 ${battery.level * 100}%`;
            });
        });
    }else{
        self.batteryInfo = '不支持电池状态接口';
    }
}
```



### 震动 window.navigator.vibrate(200)

这个 `API` 可以让你的手机按你的想法震动。

```js
vibrateFun: function(){
    let self = this;
    if( navigator.vibrate ){
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500, 500]);
    }else{
        self.vibrateInfo = "您的设备不支持震动";
    }
    <!--
    // 清除震动 
    navigator.vibrate(0);
    // 持续震动
    setInterval(function() {
        navigator.vibrate(200);
    }, 500);
    -->
},
```



### 网络状态

通过 `window.addEventListener` 对 `online` 和 `offline` 事件的监听，可以获知当前设备联网状态。
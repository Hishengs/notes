通过 web workers 将复杂的计算类任务分担到单独线程的 worker 去执行，避免主线程阻塞。

> 接口定义：<https://developer.mozilla.org/zh-CN/docs/Web/API/Worker>
>
> 如何使用：<https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers>



### 属性

- onerror
- onmessage
- onmessageerror



### 方法

- postMessage

  > 向主线程发送消息

- terminate

  > 立即终止 worker



### woker 分类

- 专用 woker（Dedicated Woker）

  > 上下文：[`DedicatedWorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope)

- 共享 worker（[Shared Worker](<https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker>)）

  > 上下文：[`SharedWorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorkerGlobalScope)
  >
  > 支持度较差，Chrome, Firefox 已实现，其他浏览器暂未实现
  
- 服务 worker（[Service Worker](<https://w3c.github.io/ServiceWorker/>)）

  > 上下文：[`ServiceWorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerGlobalScope)
  >
  > 支持度较差，Chrome, Firefox 已实现，其他浏览器暂未实现

- Chrome Worker

  > chrome 插件专用 worker，非规范



### 注意点

- worker 有单独的作用域，在作用域内无法获取 window 对象及其下的默认变量和方法

  > 可以使用的方法对象：[Functions and classes available to Web Workers](<https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers>)
  >
  > 一般包括：Navigator, XMLHttpRequest, setTimeout, setInterval ...

- 无法直接操作 DOM



### worker 与主线程如何通信

- 使用 `postMessage` 发送消息
- 使用 `onmessage` 接受消息

> 注意，通信的消息是复制，不是共享



### 创建 worker

通过构造函数 `Worker(url)` 创建一个 worker 实例，该 worker 运行在单独的线程中

其中，url 指向要运行的代码脚本文件，且须遵循同源策略

```js
var wk = new Worker('./schedule.js');
```



### 停止 woker

立刻结束，worker 线程会被立即杀死，不会有任何机会让它完成自己的操作或清理工作。

`myWoker.terminate();`



### 错误处理

通过 `onerror` 事件监听错误信息：

- `message` 可读性良好的错误消息
- `filename ` 发生错误的脚本文件名
- `lineno` 发生错误时所在脚本文件的行号



### 导入外部脚本

通过 `importScripts(url1, url2...)` 导入执行一个或多个外部脚本



### 共享 Woker

> 支持度较低

共享 woker 与专用 woker 的区别：

- 共享 worker 可以被一个或多个不同的页面引用

- 共享 worker 与主线程通信必须先开启一个[消息端口](<https://developer.mozilla.org/en-US/docs/Web/API/MessagePort>)，并通过该端口进行通信

  `主线程`

  ```js
  var myWorker = new SharedWorker(url);
  myWorker.port.start();
  myWorker.port.postMessage();
  myWorker.port.onmessage = function (e) {}
  ```

  `myWorker.js`

  ```
  port.start();
  port.postMessage();
  port.onmessage = function (e) {}
  ```



### 数据传递

worker 与主线程的通信方式：[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#worker%E4%B8%AD%E6%95%B0%E6%8D%AE%E7%9A%84%E6%8E%A5%E6%94%B6%E4%B8%8E%E5%8F%91%E9%80%81%EF%BC%9A%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#worker中数据的接收与发送：详细介绍)
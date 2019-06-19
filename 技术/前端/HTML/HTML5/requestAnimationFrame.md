传统上，界面上的 JavaScript 动画是定时执行的，也就是每隔一段时间（使用 `setTimeout` 或者 `setInterval`）会执行变化一次，这种方法主要存在以下缺陷：



1. 执行间隔时间不好确定，太长了动画不流畅，太短了影响浏览器性能

   > 一般设置为 17ms，因为浏览器的刷新频率一般是 60次/s，因此间隔 = 1000ms / 60

2. 间隔时间到时，只是将动画回调加入 UI 线程中，并不能保证立马被执行（例如线程繁忙时）



且在某些情况下，例如页面处于不可见状态（非选中 tab）或者运行在后台时，动画的更新是无意义且浪费性能的，因此 HTML5 提供了一个 `requestAnimationFrame` 方法，接收一个回调函数，在浏览器每次重绘页面之前执行该函数，且在非活跃状态时（即所谓不可见状态等）此函数的回调不会被执行，以提高运行性能和流畅度。



```
window.requestAnimationFrame(callback);
```



### 参数

**callback**

在下一次重绘时执行的回调函数，此回调函数在被执行时会传递一个 [`DOMHighResTimeStamp`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp) 时间戳参数，表示开始执行此回调的时刻。



### 返回

一个 `long` 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 [`window.cancelAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelAnimationFrame) 以取消回调函数



### 运用场景

- 执行动画
- 大数据渲染



### 兼容性

IE10+





### 参考

[《 requestAnimationFrame 理解与实践 》](<https://newbyvector.github.io/2018/05/01/2015-05-01/>)
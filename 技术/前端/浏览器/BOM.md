## 浏览器相关 API

所谓的 BOM，Browser Object Model，浏览器对象模型



## Window



#### window.isSecureContext

> 用于判断当前是否在加密环境（https）下。



#### window.devicePixelRatio

> 当前设备分辨率倍数，即表示一个 CSS 像素的大小与一个物理像素的大小之间的比率。一般等于 1，在苹果电脑等高清屏幕下此值会大于 1



#### window.screenX, window.screenY

> 浏览器窗口（左上角）相对于屏幕（左上角）的位置



#### window.innerWidth, window.innerHeight

> 浏览器视口（viewport）高度、宽度，不包含控制台等非相关部分



#### window.outerWidth, window.outerHeight

> 浏览器窗口高度、宽度，包含控制台、侧边栏等部分



#### window.scrollX, window.scrollY

> 文档的滚动宽度、高度



#### window.pageXOffset, window.pageYOffset

> window.scrollX, window.scrollY 的别名



#### window.getSelection

> 返回一个  Selection 对象
>
> 通过该对象可以获取当前用户选中的文本：sl.toString()



#### window.getComputedStyle

> 获取元素计算后的样式



### 事件



#### load, beforeunload, unload

> 分别对应着浏览器窗口开始加载、卸载之前、即将卸载触发的事件
>
> 对应属性：onload, onbeforeunload, onunload



#### error

> 浏览器脚本发送错误或者其他全局性错误时触发的事件
>
> 对应属性：onerror
>
> 接受参数：
>
> ​	message 错误消息
>
> ​	filename 错误所在文件名
>
> ​	lineno 错误发生的行数
>
> ​	colno 错误发生的列数
>
> ​	error 错误实例



#### 其他事件监听

- `window.onafterprint`：`afterprint` 事件的监听函数。
- `window.onbeforeprint`：`beforeprint` 事件的监听函数。
- `window.onbeforeunload`：`beforeunload` 事件的监听函数。
- `window.onhashchange`：`hashchange` 事件的监听函数。
- `window.onlanguagechange`: `languagechange` 的监听函数。
- `window.onmessage`：`message` 事件的监听函数。
- `window.onmessageerror`：`MessageError` 事件的监听函数。
- `window.onoffline`：`offline` 事件的监听函数。
- `window.ononline`：`online` 事件的监听函数。
- `window.onpagehide`：`pagehide` 事件的监听函数。
- `window.onpageshow`：`pageshow` 事件的监听函数。
- `window.onpopstate`：`popstate` 事件的监听函数。
- `window.onstorage`：`storage` 事件的监听函数。
- `window.onunhandledrejection`：未处理的 Promise 对象的 `reject` 事件的监听函数。
- `window.onunload`：`unload` 事件的监听函数。



## Screen



#### screen.width, screen.height

> 屏幕的宽度和高度



#### screen.availWidth, screen.availHeight

>  屏幕去除任务栏的宽度和高度



#### screen.orientation

> 返回一个对象，表示屏幕的方向





## Navigator



#### navigator.onLine

> 判断当前设别是否在线



#### navigator.cookieEnabled

> 判断当前 cookie 是否可用



#### navigator.sendBeacon

> `Navigator.sendBeacon()`方法用于向服务器异步发送数据，即使离开当前页面也能保证成功发送，一般用于前端数据统计





## 滚动



### 文档滚动

#### window.scrollTo

> window.scrollTo(x, y) 指定滚动条滚动到距离左侧 x 像素, 顶部 y 像素位置
>
> window.scrollTo(options)
>
> options:
>
> ​	top: 等同于 y
>
> ​	left: 等同于 x
>
> ​	behavior: 滚动行为，smooth 平滑滚动，instant 瞬时滚动，默认 auto，等同于 instant

> `window.scroll()`方法是`window.scrollTo()`方法的别名



#### window.scrollBy

> window.scrollTo(x, y) 指定滚动条滚动到**相对**当前滚动条位置左侧 x 像素距离, 顶部 y 像素距离位置



### 元素滚动

#### Element.scrollTop

> 获取或设置一个元素纵向滚动条到顶部的距离（像素）
>
> 如何元素没有滚动条，则设置无效，且值恒为0



#### Element.scrollLeft

> 获取或设置一个元素横向滚动条到最左侧的距离（像素）
>
> 如何元素没有滚动条，则设置无效，且值恒为0



#### Element.scrollIntoView

> 将元素滚动到可视区域内
>
> 详细参数见：<https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView>





## Cookie

cookie 的主要作用：

* 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
* 个性化设置（如用户自定义设置、主题等）
* 浏览器行为跟踪（如跟踪分析用户行为等）

参考：<http://javascript.ruanyifeng.com/bom/cookie.html>
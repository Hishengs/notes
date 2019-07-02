**跨域**，指的是两个 URL 之间，只要是 **协议**（protocol），**域名**（domain），**端口**（port），其中任何一个不相同，即为跨域（不同域）。



出于安全策略考虑，浏览器不允许在 JavaScript 脚本中发起和当前不同域的资源请求，例如 XMLHttpRequest 或者 Fetch API 等。



脚本之外的跨域资源，例如外部样式表，图片，脚本引用则是允许的。



不过，通过一定的设置（CORS，Cross-Origin Resource Sharing，跨域资源共享），也可以使跨域请求得到支持。例如，通过在服务器正确设置相关的头部字段，告知浏览器如何发起及认证跨域请求。



### CORS 使用范围及场景

- XMLHttpRequest 和 Fetch API 发起的跨域 HTTP 请求
- Web 字体（CSS 中通过 ` @font-face ` 使用跨域字体资源）
- [WebGL 贴图](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- 使用 `drawImage` 将 Images/video 画面绘制到 canvas



### CORS 概述

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 以外的 HTTP 请求，或者搭配某些 MIME 类型的 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 请求），浏览器必须首先使用 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS) 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 [Cookies ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)和 HTTP 认证相关数据）。

CORS 请求失败会产生错误，但是为了安全，在 JavaScript 代码层面是无法获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。



### 简单请求

某些请求不会触发 [CORS 预检请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)，这样的请求称为“简单请求”，若请求满足所有下述条件，则该请求可视为“简单请求”：

- 使用下列方法之一：

  - [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)

  - [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)

  - [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)

- 符合 Fetch 规范规定的[安全的首部字段集合](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)

- Content-Type 的值仅限于下列三者之一：

  - `text/plain`
  - `multipart/form-data`
  - `application/x-www-form-urlencoded`



### CORS 相关头部

- `Access-Control-Request-Method`

  > 一般用在 OPTION 预检请求中，告知服务器实际请求的方法类型

- `Access-Control-Request-Headers`

  > 告知服务器需要额外携带的自定义头部

- `Access-Control-Allow-Origin`

  > 服务器告知的允许跨域的请求域，*  表示任意域均可跨域访问此服务器资源

- `Access-Control-Allow-Methods`

  > 服务器告知的请求时允许发起的方法类型

- `Access-Control-Allow-Headers`

  > 服务器告知的请求时允许携带的头部字段

- `Access-Control-Max-Age`

  > 服务器告知的该预检请求有效时间，在此时间内，无需再次发起预检请求

- `Access-Control-Allow-Credentials`

  > 服务器告知的是否允许携带认证
  >
  > 如果浏览器携带了 Cookie 认证信息，而服务器返回的响应无此字段，则浏览器不会将数据返回给发起者



### 服务器告知哪些域名可以发起 CORS 请求

通过设置 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 告知可以跨域的域名，`Access-Control-Allow-Origin` 应当为 * 或者包含由 Origin 首部字段所指明的域名。为 * 表示允许任何外域访问。



### 子域如何访问父域

使用 `document.domain` 来允许子域安全访问其父域时，您需要在父域和子域中设置 document.domain 为相同的值。



### 其他跨域的解决方法

#### JSONP

由于外部脚本引用是被允许的，因此 JSONP 巧妙地借用了此特性实现了跨域请求，具体实现如下：

- 构造一个 script 标签，src 地址为：`http://jsonptest.com?callback=xxx`
- 其中，`http://jsonptest.com` 为要跨域访问的资源地址，`callback` 告知服务器返回时数据的回调函数名称；
- 服务器接收到请求后，构造一个脚本文件，文件内容为对应回调函数的执行，且参数为服务器向传递给客户端的数据；
- 当浏览器接受到“脚本”后，会开始解析并调用指定的回调函数执行，从而在回调函数内获取了参数数据；



**局限性：**

- 需要服务器支持
- 只支持 GET 请求



#### postMessage

postMessage 提供了一种方法用于跨域页面之间的通讯：

```
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

- otherWindow

  > 其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行 [window.open](https://developer.mozilla.org/en-US/docs/DOM/window.open) 返回的窗口对象、或者是命名过或数值索引的 [window.frames](https://developer.mozilla.org/en-US/docs/DOM/window.frames)

- message

  > 将要发送到其他 window的数据。它将会被[结构化克隆算法](https://developer.mozilla.org/en-US/docs/DOM/The_structured_clone_algorithm)序列化
  >
  > - data
  >
  >   发送的数据
  >
  > - origin
  >
  >   发送此消息的源窗口的 origin
  >
  > - source
  >
  >   发送此消息的源窗口的引用，借此双向通信

- targetOrigin

  > 指定发送的目标窗口的 origin，可以设为 * 或者指定的 origin，这样只有符合此 origin 的窗口才可以接收到消息；

- transfer

  > 可选，是一串和message 同时传递的 [`Transferable`](https://developer.mozilla.org/zh-CN/docs/Web/API/Transferable) 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。



目标窗口通过 `onmessage` 接受数据：

```js
window.addEventListener("message", receiveMessage, false);
```



#### window.name + iframe

`window.name` 一般用于设置和获取窗口名称，它的特殊之处在于，可以在不同窗口存在，使用的都是同一个  `window.name`，且修改后可以长期保存不会失效，可存储的数据也较大（2MB）。

同样是动态插入 iframe 的方式，嵌套的 iframe 地址指向要跨域的服务器地址，服务器将数据存储在 `window.name` 中，在外层 html 通过 `iframe.contentWindow.name` 的方式获取数据；



#### location.hash + iframe

原理类似于 window.name + iframe，也是动态插入 iframe，将服务器返回的数据作为 hash 添加到地址栏尾部，外部页面监听 iframe 的 `onhashchange` 获取数据即可。



#### document.domain + iframe

此方法的前提：要求主域名相同，即跨域的两个站点是相同父域的关系。

例如在站点 `a.kuayu.com` 上嵌套了一个 `b.kuayu.com` 的 iframe，通过各自脚本设置：

```js
document.domain = 'kuayu.com';
```

将两个站点的 domain 指向同一个父域，此时二者即可实现跨域访问父域资源。



#### 代理 

即通过代理服务器转发请求的方式绕过浏览器跨域的问题，此方法的代理服务器必须是与目标站点同域或者设置了 CORS，本身不存在跨域问题。



#### WebSocket 跨域

由于 websocket 协议本身就是支持跨域的，因此可以使用其当作跨域的备选方案之一



### 参考

[1] MDN, [HTTP访问控制（CORS）](<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS>)

[2] Jiasm, 掘金， [《正确面对跨域，别慌》](<https://juejin.im/post/5a2f92c65188253e2470f16d>)

[3] MDN, [window.postMessage](<https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage>)
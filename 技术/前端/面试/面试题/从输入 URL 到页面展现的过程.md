## 过程简述

- 浏览器根据输入的 URL 查询服务器 IP 地址
- 浏览器向目标 IP 发起 HTTP 请求
- 服务器接收到浏览器发起的请求，解析请求，返回目标资源
- 浏览器根据返回的 HTML 文档，开始构建并展现页面



## 过程详解

### DNS 解析

当我们在浏览器地址栏输入一个 URL 并按下回车时，浏览器会按照以下步骤查询 URL 对应的 IP 地址，即 DNS 查询的过程：

- 浏览器 DNS 缓存中是否有此 URL 域名对应的 DNS 记录

  > chrome 浏览器可以通过 `chrome://net-internals/#dns` 查看

- 查找本机 DNS 缓存

- 查找计算机 hosts 文件是否有记录

- 查找路由器缓存是否有记录

- 向 ISP（互联网服务提供商，Internet Service Provider） 查询是否有记录

- 向**根域名服务器**查询，若无，向**顶级域名服务器**查询，若无，向**主域名服务器**查询

- 最终将 IP 地址返回给浏览器



![img](https://user-gold-cdn.xitu.io/2019/5/26/16af09db4ce8438b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 优化点

- 启用 DNS 预解析

```html
<!-- 开启预解析 -->
<meta http-equiv="x-dns-prefetch-control" content="on" /> 
<!-- 添加预解析记录 -->
<link rel="dns-prefetch" href="//example.com">
```

- 在运营商处部署 CDN



### 发起 HTTP 请求

从上一步解析出 URL 对应的 IP 之后，浏览器就可以通过此 IP 建立 HTTP 连接了。

HTTP 是建立在传输层 TCP 和网络层 IP 协议之上的，在其通讯之前，必须通过三次握手和服务器建立起 TCP 连接用于数据传输，之后开始发生请求报文。

在浏览器地址栏输入URL 发起的请求一般是 GET 方式，请求报文类似于：

```
GET /path/a/b HTTP/1.1
Content-Type: text/html
Host: www.baidu.com
If-Modified-Since: 2019-02-13T12:34:22
If-None-Match: xxx-xx-xx
... 其他头部字段

// 这部分是请求体，GET 请求一般为空
```

在发起请求之前，浏览器一般会查询此 URL 是否设置了强缓存，如果是且缓存未过期，会直接加载浏览器的缓存；如果是协商缓存，浏览器会在请求头带上 `If-Modified-Since` 或者 `If-None-Match` 向服务器询问该资源是否已过期或者资源是否有更新，如果服务器返回 304，代表缓存未过期，可以继续使用，如果返回 200，代表缓存不可用，直接使用服务器返回的数据。

OK，请求发出去了，接下来坐等服务器回应。



### 服务器解析 HTTP 请求

服务器接收到请求报文后，解析报文内容，主要是请求路径和相应的参数信息，执行缓存策略（见上一步）。

根据请求路径和相应的参数信息，后台服务器获取浏览器所需的信息，例如一个 HTML 文档；

接着构造 HTTP 响应报文：

```
HTTP/1.1 200 OK
Content-Type: text/html
Host: www.baidu.com
Date: 2019-02-13T12:34:22
... 其他头部字段

// 这部分是请求体
// 这里开始是 HTML 文档内容
```

发送给浏览器。



### 浏览器构建页面

浏览器接受到响应报文后，根据缓存策略对结果进行缓存，读取请求体的 HTML 文档，开始解析：

- 根据返回的文档内容开始逐步构建 DOM 树（自上而下）

- 在解析过程中如果遇到了图片，脚本，样式表等资源标签，会发起 HTTP 请求去获取对应的资源；

  > 遇到脚本时，DOM 的构建会被停止，直到脚本被获取，加载并执行
  >
  > 也可以使用 async, defer 属性让脚本异步获取，不阻碍 DOM 的构建



## 参考

[1] [老生常谈的从 URL 输入到页面展现背后发生的事](https://mp.weixin.qq.com/s/oGmVsIRZLIUQPqY5ZpUzpQ)

[2] FEX，[从输入 URL 到页面加载完成的过程中都发生了什么事情？](<http://fex.baidu.com/blog/2014/05/what-happen/>)

[3] [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](<http://www.dailichun.com/2018/03/12/whenyouenteraurl.html>)
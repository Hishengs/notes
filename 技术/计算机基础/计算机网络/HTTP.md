### 概述

HTTP，即 Hypertext Transfer Protocol，超文本传输协议 。



是位于 **应用层** 的一个计算机网络协议，底层基于 TCP/IP 的可靠连接协议传输信息。



被设计用于 Web 浏览器与服务器之间的通讯，即典型的 BS（Browser-Server） 模型。



通常，实现了 HTTP 协议的客户端被称为 HTTP 代理。



HTTP 是一个无状态的协议，即每一次连接与下一次连接没有关联，服务器也不会记住客户端的信息



### HTTP 基本特性

- 简单
- 可扩展
- 无状态，支持会话



### HTTP 组件

主要包含以下几大组件



#### 客户端

即 HTTP 请求发起方，一般指的是浏览器，或者爬虫等



#### 服务端

即请求响应方，一般是搭载了 web server 的专用计算机，可以是单台，多台或者集群



#### 代理（Proxies）

在浏览器和服务器之间，有许多计算机和其他设备转发了HTTP消息。

代理主要有如下几种作用：

- 缓存（可以是公开的也可以是私有的，像浏览器的缓存）
- 过滤（像反病毒扫描，家长控制...）
- 负载均衡（让多个服务器服务不同的请求）
- 认证（对不同资源进行权限管理）
- 日志记录（允许存储历史信息）



### HTTP 报文

HTTP 通信的基本单位称为报文，报文主要由头部，空行，请求主体组成。

#### 请求报文

客户端向服务端发起请求时发送的报文称之为请求报文。

请求报文格式如下：

1. 首行：`{method} {path} {protocol version}`

   > - `method` 请求的方法
   > - `path` 请求的路径，相对路径或者绝对路径
   > - `protocol version` 使用的 HTTP 协议版本

2. 头部集合（HTTP Headers，可选）

   > 每一个头部单独占一行，头部名称不区分大小写，后面紧随冒号（:），然后空格，之后是头部的值

3. 空行（CRLF，回车换行）

4. 请求正文（可选）

#### 响应报文

服务端向客户端返回响应时发送的报文称之为响应报文。

响应报文格式如下：

1. 首行：`{protocol version} {status code} {status text}`

   > - `protocol version` 使用的 HTTP 协议版本
   > - `status code` 响应的状态码
   > - `status text` 响应的状态码描述文字

2. 头部集合（HTTP Headers，可选）

3. 空行（CRLF，回车换行）

4. 响应正文（可选）



#### HTTP 头部

报文头部主要包含了首行和其他头部字段；

- Host
- Accept-Language
- Content-Type
- Content-Length
- Date
- Server
- Last-Modified
- ETag
- Accept-Ranges
- Connection
- Keep-Alive



#### 请求方法

HTTP 支持的请求方法包括：

- GET

  > GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据

- HEAD

  > HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体

- POST

  > POST 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用

- PUT

  > PUT 方法用请求有效载荷替换目标资源的所有当前表示，一般用于更新资源

- OPTIONS

  > OPTIONS 方法用于描述目标资源的通信选项

- DELETE

  > DELETE 方法删除指定的资源

- CONNECT

  > CONNECT 方法建立一个到由目标资源标识的服务器的隧道

- TRACE

  > TRACE 方法沿着到目标资源的路径执行一个消息环回测试

- PATCH

  > PATCH 方法用于对资源应用部分修改



#### 状态码

状态码主要包含以下几类：

- 1XX

  > 信息响应状态码，表示服务器已收到信息，开始处理
  >
  > 100 Continue
  >
  > > 这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它
  >
  > 101 Switching Protocol
  >
  > > 该代码是响应客户端的 [`Upgrade`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade) 标头发送的，并且指示服务器也正在切换的协议
  >
  > 102 Processing
  >
  > > 此代码表示服务器已收到并正在处理该请求，但没有响应可用
  >
  > 103 Early Hints
  >
  > > 此状态代码主要用于与[`Link`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link) 链接头一起使用，以允许用户代理在服务器仍在准备响应时开始预加载资源

- 2XX

  > 成功响应状态码
  >
  > 200 OK
  >
  > >请求成功。成功的含义取决于HTTP方法：
  > >
  > >- GET：资源已被提取并在消息正文中传输。
  > >- HEAD：实体标头位于消息正文中。
  > >- POST：描述动作结果的资源在消息体中传输。
  > >- TRACE：消息正文包含服务器收到的请求消息
  >
  > 201 Created
  >
  > >该请求已成功，并因此创建了一个新的资源。这通常是在POST请求，或是某些PUT请求之后返回的响应
  >
  > 202 Accepted
  >
  > >请求已经接收到，但还未响应，没有结果
  >
  > 203 Non-Authoritative Information
  >
  > 204 No Content
  >
  > >服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息
  >
  > 205 Reset Content
  >
  > >服务器成功处理了请求，且没有返回任何内容。但是与204响应不同，返回此状态码的响应要求请求者重置文档视图
  >
  > 206 Partial Content
  >
  > >服务器已经成功处理了部分 GET 请求
  >
  > 207 Multi-Status
  >
  > 208 Multi-Status
  >
  > 209 IM Used

- 3XX

  > 重定向状态码
  >
  > 300 Multiple Choice
  >
  > >被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向
  >
  > 301 Moved Permanently
  >
  > >被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一
  >
  > 302 Found
  >
  > >请求的资源现在临时从不同的 URI 响应请求
  >
  > 303 See  Other
  >
  > >对应当前请求的响应可以在另一个 URI 上被找到，而且客户端应当采用 GET 的方式访问那个资源
  >
  > 304 Not Modified
  >
  > >如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。
  >
  > 305 Use Proxy
  >
  > 306 unused
  >
  > 307 Temporary Redirect
  >
  > >请求的资源现在临时从不同的URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。
  >
  > 308 Permanent Redirect
  >
  > >这意味着资源现在永久位于由 `Location:` HTTP Response 标头指定的另一个 URI。 这与 `301 Moved Permanently HTTP` 响应代码具有相同的语义，但用户代理不能更改所使用的 HTTP 方法：如果在第一个请求中使用 `POST`，则必须在第二个请求中使用 `POST`。

- 4XX

  > 客户端错误状态码
  >
  > 400 Bad Request
  >
  > > 1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。
  > >
  > > 2、请求参数有误。
  >
  > 401 Unauthorized
  >
  > > 当前请求需要用户验证
  >
  > 402 Payment Required
  >
  > 403 Forbidden
  >
  > > 服务器已经理解请求，但是拒绝执行它
  >
  > 404 Not Found
  >
  > > 请求失败，请求所希望得到的资源未被在服务器上发现
  >
  > 405 Method Not Allowed
  >
  > > 请求行中指定的请求方法不能被用于请求相应的资源
  >
  > 406 Not Acceptable
  >
  > 407 Proxy Authorication Required
  >
  > 408 Request Timeout
  >
  > 409 Conflict
  >
  > 410 Gone
  >
  > 411 Length Required
  >
  > 412 Precondition  Failed
  >
  > 413 Payload Too Large
  >
  > 414 URI Too Long
  >
  > 415 Unsupported Media Type
  >
  > 416 Requested Range Not Satisfiable
  >
  > 417 Expectation Failed
  >
  > 418 I'm a teapot
  >
  > 421 Misdirected Request
  >
  > 422 Unprocessable Entity
  >
  > 423 Locked
  >
  > 424 Failed Dependency
  >
  > 425 Too Early
  >
  > 426 Upgrade Required
  >
  > 428 Precondition Required
  >
  > 429 Too Many Requests
  >
  > 431 Request Header Fields Too Large
  >
  > 451 Unavailable For Legal Reasons

- 5XX

  > 服务器错误状态码
  >
  > 500 Internal  Server Error
  >
  > > 服务器遇到了不知道如何处理的情况
  >
  > 501 Not Implemented
  >
  > > 此请求方法不被服务器支持且无法被处理。只有`GET`和`HEAD`是要求服务器支持的，它们必定不会返回此错误代码
  >
  > 502 Bad Gateway
  >
  > > 此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应
  >
  > 503 Service Unavailable
  >
  > > 服务器没有准备好处理请求。 常见原因是服务器因维护或重载而停机
  >
  > 504 Gateway Timeout
  >
  > > 当服务器作为网关，不能及时得到响应时返回此错误代码
  >
  > 505 HTTP Version Not Supported
  >
  > > 服务器不支持请求中所使用的 HTTP 协议版本
  >
  > 506 Variant Also Negotiates
  >
  > > 服务器有一个内部配置错误：对请求的透明内容协商导致循环引用
  >
  > 507 Insufficient Storage
  >
  > > 服务器有内部配置错误：所选的变体资源被配置为参与透明内容协商本身，因此不是协商过程中的适当端点
  >
  > 508 Loop Detected
  >
  > > 服务器在处理请求时检测到无限循环
  >
  > 509 Bandwidth Limit Exceeded
  >
  > > 服务器达到带宽限制。这不是一个官方的状态码，但是仍被广泛使用
  >
  > 510 Not Extended
  >
  > > 客户端需要对请求进一步扩展，服务器才能实现它
  >
  > 511 Network Authentication Required
  >
  > > 指示客户端需要进行身份验证才能获得网络访问权限





### HTTP 会话过程

HTTP 一次典型的会话主要包括以下几个步骤：

1. 客户端建立一条 TCP 连接到服务器
2. 客户端发送请求并等待响应
3. 服务器对请求进行处理，发送应答



### HTTP 应用

- [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

- [HTTP 访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

- 认证

- 会话

  > 主要是指通过 cookie 的方式保持客户端会话，当客户端与服务器建立连接之后，接下来的每一次请求客户端都会把当前的 cookie 通过头部 Cookie 字段的方式带给服务器 ，当服务器需要在 客户端设置 cookie 时，也会通过头部字段 Set-Cookie 的方式设置；



### HTTP 请求抓包

- [Fiddler]([www.telerik.com/**fiddler**](http://www.baidu.com/link?url=Daflyxn06wuCJ2QP_KdBu3_2KEnSLP9i0cv8vpXXyJWMyqc-E8dEjDIX_dT_7_Ck))
- [WireShark]([https://www.**wireshark**.org](http://www.baidu.com/link?url=hscK2TQd2rw_TIOz-scCfcD_bSd8J0nm8JYF8l7vialqiyDs9D2npOQXhtaGrTR7))



### 参考

[1] MDN, [HTTP 概述]([https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#HTTP_%E6%8A%A5%E6%96%87](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#HTTP_报文))

[2] MDN, [HTTP 状态码](<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status>)

[3] MDN, [HTTP 消息](<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages>)
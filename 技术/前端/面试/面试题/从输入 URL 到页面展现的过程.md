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



### 服务器解析 HTTP 请求



### 浏览器构建页面



## 参考

[1] <https://mp.weixin.qq.com/s/oGmVsIRZLIUQPqY5ZpUzpQ>

[2] FEX，[从输入 URL 到页面加载完成的过程中都发生了什么事情？](<http://fex.baidu.com/blog/2014/05/what-happen/>)

[3] [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](<http://www.dailichun.com/2018/03/12/whenyouenteraurl.html>)
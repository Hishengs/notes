**跨域**，指的是两个 URL 之间，只要是 **协议**（protocol），**域名**（domain），**端口**（port），其中任何一个不相同，即为跨域（不同域）。



出于安全策略考虑，浏览器不允许在 JavaScript 脚本中发起和当前不同域的资源请求，例如 XMLHttpRequest 或者 Fetch API 等。



不同，通过一定的设置，也可以使跨域请求得到支持。例如，通过在服务器正确设置相关的头部字段，告知浏览器如何发起及认证跨域请求。



### 服务器告知哪些域名可以发起 CORS 请求

通过设置 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 告知可以跨域的域名，`Access-Control-Allow-Origin` 应当为 * 或者包含由 Origin 首部字段所指明的域名。为 * 表示允许任何外域访问。


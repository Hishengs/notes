## 利用 cookie 和 session 保存用户会话

- 用户根据用户名，密码请求登录；
- 服务器验证用户信息，通过之后为用户生成一个保存了用户相关信息的 session，和一个索引该 session 的 sessionId，并通过 HTTP 响应的头部 `Set-Cookie` 设置一个 cookie 保存 sessionId；
- 用户下一次请求时，会把 cookie 信息携带给服务器，服务器根据其中的 sessionId 索引出相关用户信息，标识当前请求的用户身份，进行一系列操作；


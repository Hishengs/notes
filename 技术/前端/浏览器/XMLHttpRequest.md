### 构造函数

#### XMLHttpRequest()

无参数，返回一个实例



### 属性

#### onreadystatechange

请求的状态码发生变化时的回调函数

#### readyState

请求的[状态码](<https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState>)

- 0 (未初始化) or (**请求还未初始化**)  = XMLHttpRequest.**UNSENT**
- 1 (正在加载) or (**已建立服务器链接**) = XMLHttpRequest.**OPENED**
- 2 (加载成功) or (**请求已接受**) = XMLHttpRequest.**HEADERS_RECEIVED**
- 3 (交互) or (**正在处理请求**) = XMLHttpRequest.**LOADING**
- 4 (完成) or (**请求已完成并且响应已准备好**)  = XMLHttpRequest.**DONE**

#### response

服务器返回的响应数据，返回类型由 `responseType` 决定

#### responseType

服务器返回的数据类型，也可以手动设置服务器的返回类型

#### responseText

请求文本或者 HTML 文档时返回的文本数据，`DOMString` 类型

#### responseXML

请求 XML 文档时返回的 DOM 对象

#### responseURL

返回响应的URL，有可能是重定向后的地址

#### status

返回响应的状态码

#### statusText

返回响应的状态码提示文本

#### timeout

设置超时时间

#### ontimeout

超时回调

#### upload

[上传信息对象](<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload>)，可以通过该对象获取上传进度等信息，例如在上传文件时告知用户当前上传进度

#### withCredentials

用来指定跨域的请求是否应该使用证书



---



### 方法

#### abort

如果请求已经被发送，则立刻中止请求，当一个请求被终止，它的 readyState 属性将被置为 0（ `UNSENT` )

#### getAllResponseHeaders

以字符串的形式返回所有用CRLF分隔的响应头，如果没有收到响应，则返回null

#### getReponseHeader(name)

返回包含指定响应头的字符串

#### open(method, url, [async, user, password])

初始化一个请求

- **method** 请求方法，支持 `GET`，`POST` 等，更多关于HTTP的请求方法，可以查看 [W3C specs](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
- **url** 请求地址，必须是同域，否则需设置好 CORS
- **async** 是否同步发起，可选，默认为 `true`
- **user** 用于认证的用户名，可选
- **password** 用于认证的密码，可选

#### overrideMimeType

重写由服务器返回的MIME type，此方法必须在 send 方法之前调用方为有效

#### send

发送请求

#### setRequestHeader

设置HTTP请求头的值，必须在 open() 之后、send() 之前调用 setRequestHeader() 这个方法





### 事件

#### progress

可以通过该事件实时获取请求进度

```js
xhr.addEventListener("progress", function (evt) {
    var percentComplete = 0;
    if (evt.lengthComputable) {
        percentComplete = evt.loaded / evt.total;
    }
}, false);
```

#### abort

因故或者用户主动终止请求时此事件会触发

#### error

出现错误时此事件会触发

#### load

请求完成时触发

#### loaded

`abort` , `error` , `load` 任何事件之一都会触发此事件



### 如何使用

```js
// 实例化
const xhr = new XMLHttpRequest();
const url = "http://theurltobesent.com";
const data = {
    a: 1,
    b: 23
};

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // xhr.responseText
        }
    }
}

xhr.onerror = function () {}

xhr.open("POST", url);
xhr.send(data);
```



### 旧浏览器支持

```js
// Old compatibility code, no longer needed.
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```



### 发送和接收二进制数据

参见：[使用 JavaScript 类型数组接受二进制数据](<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data>)



### 获取请求进度

通过监听 `progress` 事件，返回的 [ProgressEvent](<https://developer.mozilla.org/zh-CN/docs/Web/API/ProgressEvent>) 事件对象可得知进度信息

```js
xhr.addEventListener("progress", function (evt) {
    var percentComplete = 0;
    if (evt.lengthComputable) {
        percentComplete = evt.loaded / evt.total;
    }
}, false);
```



### 避免因缓存导致请求未发送

> 如果不设置响应头 `Cache-Control: no-cache` 浏览器将会把响应缓存下来而且再也无法重新提交请求。你也可以添加一个总是不同的 GET 参数，比如时间戳或者随机数 (详情见 [bypassing the cache](https://developer.mozilla.org/en/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache))

参考：[绕过缓存]([https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#%E7%BB%95%E8%BF%87%E7%BC%93%E5%AD%98](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#绕过缓存))



### 请求意外终止

如果你的 XMLHttpRequest 收到 `status=0` 和 `statusText=null `的返回，说明你的请求被意外终止

参考：<https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L43>

`With one exception: request that using file: protocol, most browsers`

`will return status as 0 even though it's a successful request`



### 发起跨域请求

只要设置好正确的 CORS 策略，就可以发起跨域请求

参见：[HTTP 访问控制（CORS）](<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS>) ，[跨域资源共享（CORS）](./跨域资源共享（CORS）.md)





### 参考资料

1. [使用 XMLHttpRequest](<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest>)
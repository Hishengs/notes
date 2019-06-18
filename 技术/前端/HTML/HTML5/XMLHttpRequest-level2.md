HTML5 针对旧版 XMLHttpRequest 进行了扩展和优化。



建议阅读：[《XMLHttpRequest Level 2 使用指南》](<http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html>) by 阮一峰



主要改进如下：

* 可以设置 HTTP 请求的时限。

* 可以使用 FormData 对象管理表单数据。

* 可以上传文件。

* 可以请求不同域名下的数据（跨域请求）。

* 可以获取服务器端的二进制数据。

* 可以获得数据传输的进度信息。



### 超时设置

使用 `xhr.timeout` 设置超时时间，单位为 ms

使用 `xhr.ontimeout` 监听超时事件



### 使用 FormData 管理表单数据

直接创建表单数据

```js
var formData = new FormData();

formData.append('username', '张三');
formData.append('id', 123456);

xhr.send(formData);
```

或者提供 <form> 元素

```js
var form = document.getElementById('myform');
var formData = new FormData(form);

xhr.send(formData);
```



### 上传文件

直接将 `File` 文件对象作为 FormData 一项，传递给 xhr 即可上传。



### 进度信息

下载：通过 `XMLHttpRequest.onprogress` 事件获取下载进度信息

上传：通过 `XMLHttpRequest.upload.onprogress` 事件获取上传进度信息

```js
xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
        var percentComplete = e.loaded / e.total;
    }
}
```


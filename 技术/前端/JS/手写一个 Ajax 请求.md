```js
const req;
const url = "https://www.google.com";

if(window.XMLHttpRequest){
    req = new window.XMLHttpRequest();
}else {
    req = ActiveXObject("Microsoft.XMLHTTP");
}
req.onreadystatechange = function(){
    if(req.readyState === 4 && req.status === 200){
        // do something
    }
}
req.open("GET", url, true);
req.setRequestHeader("Content-Type", "application/json");
req.send(/*data*/);
```

readyState 有五种状态

- 0 请求未打开
- 1 请求未发送
- 2 请求已发送，正在获取响应头
- 3 正在下载响应体
- 4 请求完成

req.abort()  可用于发送过程中终止请求。
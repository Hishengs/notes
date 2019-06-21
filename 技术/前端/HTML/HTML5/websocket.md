WebSocket 提供了一种服务器向浏览器主动推送消息的功能，且是持久的连接。



### 接口

[`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)



### 构造函数

`WebSocket(url[, protocols])`

#### 参数

- url

  > 要连接的URL

- protocols

  > 单协议字符串或者包含协议字符串的数组。这些字符串用于指定子协议，这样单个服务器可以实现多个WebSocket 子协议（例如，您可能希望一台服务器能够根据指定的协议处理不同类型的交互）`protocol`）。如果不指定协议字符串，则假定为空字符串

#### 返回

返回一个 `WebSocket` 对象



### 属性

- binaryType

  > 返回 WebSocket 连接所传输二进制数据的类型
  >
  > "blob" 或者 “arraybuffer”

- bufferedAmount

  > 在缓冲区未发送至服务器的字节数

- extensions

  > 返回服务器已选择的扩展值

- onclose

- onerror

- onmessage

- onopen

- protocol

  > 服务器选择的下属协议

- readyState

  > 当前的连接状态

- url

  > WebSocket 的绝对路径




### 状态常量

| **Constant**           | **Value** |
| ---------------------- | --------- |
| `WebSocket.CONNECTING` | `0`       |
| `WebSocket.OPEN`       | `1`       |
| `WebSocket.CLOSING`    | `2`       |
| `WebSocket.CLOSED`     | `3`       |

> 注意，只有在 readyState 在 OPEN 时才可用通过 send 发送数据



### 事件

- open

- message

  传递一个 [`MessageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent) 作为回调参数，通过 `event.data` 获取服务器返回的数据

- error

- close

  传递一个 [`CloseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) 作为回调参数

返回一个 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener)



### 方法

- `close([code[, reason]])`

  > 关闭当前连接
  >
  > code，代表推出原因状态码，参见 [状态码列表](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes)
  >
  > reason，代表推出原因字符串

- `send(data)`

  > 向服务器发送数据
  >
  > data，必须是以下类型之一：
  >
  > - USVString
  > - ArrayBuffer
  > - Blob
  > - ArrayBufferView



### 参考

[The WebSocket Protocol](<https://tools.ietf.org/html/rfc6455>)
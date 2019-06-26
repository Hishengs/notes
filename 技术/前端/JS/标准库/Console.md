### 方法

- `console.log()`

  > 控制台输出日志信息
  >
  > 可在日志中使用占位符：
  >
  > - `%s` 字符串占位符
  > - `%d` 数字占位符
  > - `c%` 样式占位符
  >
  > ```js
  > console.log(
  >   '%cThis text is styled!',
  >   'color: red; background: yellow; font-size: 24px;'
  > )
  > ```

- `console.info()`

  > 控制台输出提示信息，文字为蓝色
  >
  > 其他行为与 `console.log` 一致

- `console.warn()`

  > 控制台输出警告信息，文字为黄色
  >
  > 其他行为与 `console.log` 一致

- `console.error()`

  > 控制台输出错误信息，文字为红色
  >
  > 其他行为与 `console.log` 一致

- `console.debug()`

  > 与`console.log`方法类似，会在控制台输出调试信息。但是，默认情况下，`console.debug`输出的信息不会显示，只有在打开显示级别在`verbose`的情况下，才会显示。

- `console.table()`

  > 以表格的格式输出对象或者数组
  >
  > 详见：<https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table>

- `console.count()`

  > 用于计数，输出它被调用了多少次

- `console.dir()`

  > 对一个对象进行检查，并以易于阅读和打印的格式显示

- `console.dirxml()`

  > 以目录树的形式，显示 DOM 节点

- `console.assert(condition, errMsg)`

  > 控制台断言
  >
  > 当条件不成立时，报错

- `console.time(flag)`

  > 时间计算开始

- `console.timeEnd(flag)`

  > 时间计算结束
  >
  > 返回：距相同 flag 的 console.time(flag) 之间的时间，单位 ms

- `console.group()`

  > 开始分组显示
  >
  > 结合 `console.groupEnd` 可以将两条命令之间的输出作为一个分组显示，并且可折叠（默认展开）

- `console.groupEnd()`

  > 结束分组显示

- `console.groupCollapsed()`

  > 作用等同 `console.group` ，只不过默认收起

- `console.trace()`

  > 显示当前执行的代码在堆栈中的调用路径

- `console.clear()`

  > 清除当前控制台的所有输出



### 特殊变量和方法

- `$_`

  > 保存了上一个表达式的值

- `$0-$4`

  > 保存了最近在控制台引用的 5 个 DOM 元素

- `$(selector)`

  > 等同于 document.querySelector

- `$$(selector)`

  > 等同于 document.querySelectorAll

- `$x(path)`

  > 提供了 xpath 查询的方法

- `inspect(object)`

  > 打开元素面板，自动定位到指定元素

- `getEventListeners(object)`

  > 获取指定对象的所有监听事件

- `keys(object)`，`values(object)`

  > 类似于 Object.keys()，Object.values() 的便捷方法

- `monitorEvents(object[, events]) `，`unmonitorEvents(object[, events])`

  > `monitorEvents` 用于监听特定对象的事件（一个或多个），当事件发生时，自动断点
  >
  > ```js
  > monitorEvents(window, 'resize');
  > ```

  > `unmonitorEvents` 用于移除对特定对象的事件监听（一个或多个）

- `clear()`

  > 清空控制台所有的输出

- `copy(object)`

  > 复制变量到粘贴板
### Console 控制台

#### console.log()

最常使用的方法，用于打印执行结果或者变量的值。

支持的格式化：`%d` 数值，`%s` 字符串，`%O` 对象，`%c` 样式

```js
console.log('%cMy name is %s, I am %d years old.%c', 'color: blue;', 'Hisheng', 21);
```

#### console.warn(), console.error()

打印警告或者错误消息。

#### console.table()

以表格的形式打印消息。参数支持数组或者对象。

```js
console.table(["apples", "oranges", "bananas"]);
```

```js
console.table({
    name: 'Hisheng',
    age: 21
});
```

支持多行

```js
console.table([["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]);
console.table([
    {
        firstName: 'John',
    	lastName: 'Smith'
    },
    {
        firstName: 'Jane',
    	lastName: 'Doe'
    },
    {
        firstName: 'Emily',
    	lastName: 'Jones'
    },
]);
```

#### $(), $(), $x(), $0-$4, $_

**$()** 相当于 `document.querySelector()`, 使用 CSS 选择器查询第一个匹配的节点。

**$$()** 相当于 `document.querySelectorAll()`, 使用 CSS 选择器查询所有匹配的节点。

**$x()** 用于使用 `xpath` 语法查询节点。

```js
const logo = $x('/html/body/nav/div/a[1]/img')
```

**$0-$4** 是最近五个 inspect 的节点。

**$_** 是上一次语句的执行结果。

#### clear()

清除控制台的输出。

#### copy()

可以复制控制台的变量到粘贴板。

#### debug(function)

调试某个函数，当目标函数被执行时，在函数内第一句断点。

#### monitorEvents(element[, events])

观察某个节点的事件，支持多个事件观察。

```js
monitorEvents(document, 'click');
monitorEvents(window, ["resize", "scroll"]);
```

#### getEventListeners(element)

获取节点的所有事件监听函数。

#### keys(object), values(object)

获取对象所有的 键 或者 值。类似于 `Object.keys()` 和 `Object.values()`。



## Element 元素



## Source 资源

### 格式化代码

对于压缩的代码，可以点击左下角的 `{}` 格式化代码，支持 JS，CSS 等。

![1551952736691](C:\Users\haisheng.z\AppData\Roaming\Typora\typora-user-images\1551952736691.png)

### 调试

#### 调试流程

* `F8` 跳向下一个断点
* `F10` 单步，逐行执行
* `F11` 步进，进入函数
* `Shift + F11` 步出，跳出当前函数

#### 断点类型

##### 1. 普通 JS 断点

在 **Source** 面板选择一个文件，在想要断点的那一行左边的点击设置一个断点。

当代码执行到此处时会自动停下来。

##### 2. 条件断点

选择某行代码设置断点，右键选择 `Edit breakpoint`

![1551952502488](C:\Users\haisheng.z\AppData\Roaming\Typora\typora-user-images\1551952502488.png)

输入断点条件，在满足条件时触发断点。



![1551952456064](C:\Users\haisheng.z\AppData\Roaming\Typora\typora-user-images\1551952456064.png)

##### 3. DOM 断点

##### 4. 事件断点

##### 5. XHR 断点

### snippets 代码片段

一般在控制台我们都是执行单个语句，查看执行结果。如果想写测试函数或者更复杂的代码，控制台就显得很不友好，此时可以借助 Source 面板的 `snippets` 功能进行代码片段编写与执行。

![1551953740873](C:\Users\haisheng.z\AppData\Roaming\Typora\typora-user-images\1551953740873.png)

### 常用快捷键

* `ctrl + p` 快速查找文件
* `ctrl + shift + o` 在文件中查找函数



## Network 网络



## Performance 性能



## Memory 内存



## Application 应用



## 参考文章


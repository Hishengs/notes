## 概述

文档对象模型（DOM）是 HTML 和 XML 文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将 web 页面和脚本或程序语言连接起来。



DOM 并不是一门编程语言，只是一个对文档操作的标准规范，任何语言只要实现了其规范，都可以对文档进行操作，例如不仅仅是 JavaScript，Python 也有相关的库可以操作文档。



> **DOM 不仅仅用于浏览器**
>
> DOM 规范解释了文档的结构，并提供了操作文档的对象。有的非浏览器设备也使用 DOM。
>
> 例如，下载 HTML 文件并对其进行处理的服务器端脚本也可以使用 DOM。但它们可能仅支持部分规范中的内容。



### DOM 节点

一个 HTML 文档其实是一颗 DOM 节点树，HTML 文档包含的所有标签、文本、注释、甚至空格等都是节点树上的节点（Node），[HTML 规范](https://dom.spec.whatwg.org) 定义的节点类型有 [12 种](https://dom.spec.whatwg.org/#node) 之多，但常见的主要是以下四种：

- **`document`**  DOM 的 “入口点”
- **元素节点**，常见的标签都是元素节点，例如 p, div ...
- **文本节点**，例如标签内的文本其实是一个单独的节点
- **注释节点**，HTML 中的注释也是一个节点

> **HTML 中的所有内容，甚至注释，都会成为 DOM 的一部分，即 DOM 树上的一个节点**
>
> 甚至 HTML 开头的 `<!DOCTYPE...>` 指令也是一个 DOM 节点。
>
> 表示整个文档的 `document` 对象，在形式上也是一个 DOM 节点。



## 遍历 DOM 树

DOM 让我们可以对元素和它们中的内容做任何事，但是首先我们需要获取到对应的 DOM 对象。

对 DOM 的所有操作都是以 `document` 对象开始。它是 DOM 的主“入口点”。从它我们可以访问任何节点。

![](https://zh.javascript.info/article/dom-navigation/dom-links.svg)

### 在最顶层

最顶层的树节点可以直接作为 `document` 的属性来使用：

- `<html>` = `document.documentElement`

  最顶层的 document 节点是 `document.documentElement`。这是对应 `<html>` 标签的 DOM 节点。

- `<body>` = `document.body`

  另一个被广泛使用的 DOM 节点是 `<body>` 元素 — `document.body`。

- `<head>` = `document.head`

  `<head>` 标签可以通过 `document.head` 访问。

  

**`document.body`  的值可能是 `null`**

> 脚本无法访问在运行时不存在的元素。
>
> 尤其是，如果一个脚本是在 `<head>` 中，那么脚本是访问不到 `document.body` 元素的，因为浏览器还没有读到它。
>
> 所以，下面例子中的第一个 `alert` 显示 `null`：
>
> ```html
> <html>
> 
> <head>
>   <script>
>     alert( "From HEAD: " + document.body ); // null，这里目前还没有 <body>
>   </script>
> </head>
> 
> <body>
> 
>   <script>
>     alert( "From BODY: " + document.body ); // HTMLBodyElement，现在存在了
>   </script>
> 
> </body>
> </html>
> ```



### 访问子节点

DOM 节点可以通过以下方法获取子节点：

- `childNodes` 获取所有的子节点，包括非元素节点，例如文本节点、注释节点等
- `firstChild` 获取第一个子节点，等同于 `childNodes[0]`
- `lastChild` 获取最后一个子节点，等同于 `childNodes[childNodes.length - 1]`

> 还有一个 `hasChildNodes` 方法可用于检测是否有子节点

> `childNodes`  返回的结果是一个类型为 `NodeList` 的节点列表（动态），但不是数组，只是一个可迭代的对象，内置了 `Symbol.iterator` 接口，因此可使用 `for const` 进行迭代，也可通过 `Array.from` 将可迭代对象转为真正的数组
>
> 注意，`childNodes` 返回的是一个 **动态** 的节点集合（`NodeList`），而在某些情况下返回的 节点集合（`NodeList`）却是静态的，例如 `querySelectorAll` 方法



### 父节点，兄弟节点

获取父节点：`parentNode`

获取兄弟节点：

- `previousSibling` 获取前一个兄弟节点
- `nextSibling` 获取后一个兄弟节点



### 获取元素节点

大多数情况，我们只关心元素节点，因为上面节点相关获取方法可能返回我们并不想要的文本节点，甚至是注释节点；

因此对于元素节点，也存在相似的获取方法：

父元素：`parentElement`

子元素：`children`

第一个子元素：`firstElementChild`

最后一个子元素：`lastElementChild`

兄弟节点：`previousElementSibling`，`nextElementSibling`



## 特性与属性

[特性与属性](https://zh.javascript.info/dom-attributes-and-properties)

- 特性（attribute）— 写在 HTML 中的内容。
- 属性（property）— DOM 对象中的内容。

操作特性的方法：

- `elem.hasAttribute(name)` — 检查是否存在这个特性。
- `elem.getAttribute(name)` — 获取这个特性值。
- `elem.setAttribute(name, value)` — 设置这个特性值。
- `elem.removeAttribute(name)` — 移除这个特性。
- `elem.attributes` — 所有特性的集合。



## DOM 级别

DOM级别一共可以分为4个级别：DOM0级，DOM1级，DOM2级和 DOM3级，而DOM事件分为3个级别：DOM0级事件处理，DOM2级事件处理和DOM3级事件处理。如下图所示：

![img](https://lc-api-gold-cdn.xitu.io/2c5c37e4682cda489798?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## DOM 规范

https://dom.spec.whatwg.org/



## 我不知道的 DOM

- `getElements*` 返回的是 [`HTMLCollection `](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection) 是一个动态变化的元素集合，而 `querySelectorAll ` 返回的是 [`NodeList ` ](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)是静态的
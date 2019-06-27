### 关于 DOM

DOM，即 Document Object Model，文档对象模型的简称。

描述了 HTML 节点关系以及如何操作节点的一系列接口。



整个 HTML 文档是由很多节点组成，最终构成了一颗文档树。



### 节点关系

节点包含三种关系：

- 父节点（parentNode）
- 子节点（childNodes）
- 同级节点（siblings）



### 节点类型

- Document 

  > 文档的根节点

- DocumentType 

  > `doctype` 标签节点

- Element

  > 元素节点

- Attribute

  > 属性节点

- Text

  > 文本节点

- Comment

  > 注释节点

- DocumentFragment

  > 文档片段



### Node

继承关系：

```js
EventTarget => Node
```

所有的节点都是 Node 的实例，继承了一些通用的属性和方法。

#### 属性

- nodeType

  | Name                               | Value |
  | :--------------------------------- | :---- |
  | `ELEMENT_NODE`                     | `1`   |
  | `ATTRIBUTE_NODE` （已废弃）        | `2`   |
  | `TEXT_NODE`                        | `3`   |
  | `CDATA_SECTION_NODE`               | `4`   |
  | `ENTITY_REFERENCE_NODE` （已废弃） | `5`   |
  | `ENTITY_NODE` （已废弃）           | `6`   |
  | `PROCESSING_INSTRUCTION_NODE`      | `7`   |
  | `COMMENT_NODE`                     | `8`   |
  | `DOCUMENT_NODE`                    | `9`   |
  | `DOCUMENT_TYPE_NODE`               | `10`  |
  | `DOCUMENT_FRAGMENT_NODE`           | `11`  |
  | `NOTATION_NODE` （已废弃）         | `12`  |

- nodeName

- nodeValue

  > 返回或设置当前节点的值

- parentNode

  > 返回其父节点，如果没有（顶层节点）返回 null

- parentElement

  > 如果有父节点且该节点是一个 Element 元素节点，则返回此节点，否则返回 null

- childNodes

  > 返回所有子节点组成的 NodeList

- firstChild

  > 该节点下的第一个子节点

- lastChild

  > 该节点下的最后一个子节点

- prevSibling

  > 返回与该节点同级的上一个节点 [`Node`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)，如果没有返回 `null`

- nextSibling

  > 返回与该节点同级的下一个节点 [`Node`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)，如果没有返回 `null`

- owerDocument

  > 返回这个元素属于的 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 对象

- textContent

  > 返回或设置一个元素内所有子结点及其后代的文本内容

- isConnected

  > 返回一个布尔值用来检测该节点是否已连接(直接或者间接)到一个上下文对象上，比如通常DOM情况下的 [`Document `](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)对象，或者在shadow DOM情况下的 [`ShadowRoot`](https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot) 对象，例如，当节点脱离了文档时，此值为 false

- baseURI

  > 返回一个表示base URL的 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)



#### 方法

- `Node.prototype.appendChild()`

  > 用于在节点尾部追加一个子节点

- `Node.prototype.cloneNode()`

  > 克隆当前节点并返回新的节点

- `Node.prototype.compareDocumentPosition()`

- `Node.prototype.contains()`

  > 判断给定节点是否是：
  >
  > - 当前节点
  > - 当前节点的子节点
  > - 当前节点的后代节点

- `Node.prototype.getRootNode()`

  > 获取文档根节点，一般是 `document`

- `Node.prototype.hasChildNodes()`

  > 检查是否含有子节点

- `Node.prototype.insertBefore(newNode, referenceNode)`

  > 当前节点作为父节点，在当前节点内的子节点 `referenceNode` 之前插入一个新的节点 `newNode`

- `Node.prototype.isDefaultNamespace()`

- `Node.prototype.isEqualNode()`

  > 检查两个节点是否相等，即两个节点的类型相同、属性相同、子节点相同

- `Node.prototype.isSameNode()`

  > 判断两个节点是否是同一个节点

- `Node.prototype.lookupPrefix()`

- `Node.prototype.lookupNamespaceURI()`

- `Node.prototype.normalize()`

  > `normailize` 方法用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。

- `Node.prototype.removeChild(childNode)`

  > 移除当前节点下的子节点 `childNode` 并返回该节点

- `Node.prototype.replaceChild(newChild, oldChild)`

  > 替换当前节点下的子节点 `oldChild` 为给定的新节点 `newChild`





### NodeList

NodeList 是一个节点的集合，一般通过 `node.childNodes` 或者 `querySelector` 获取得到

> 注意，node.childNodes 获取的 NodeList 是实时变动的，当文档树发生变化时，集合内节点数量也可能发生变化，也就是说，NodeList 的 length 是动态的，最好一开始缓存它
>
> querySelector 返回的 NodeList 是静态的

#### 属性

- length

  > 包含的节点数量

#### 方法

- `NodeList.prototype.item(index)`

  > 根据索引获取节点，如果越界，返回 null

- `NodeList.prototype.entries()`

- `NodeList.prototype.forEach()`

- `NodeList.prototype.keys()`

- `NodeList.prototype.values()`



### HTMLCollection

`HTMLCollection `是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与 `NodeList` 接口不同，`HTMLCollection` 没有 `forEach` 方法，只能使用 `for` 循环遍历。

返回 `HTMLCollection` 实例的，主要是一些 `Document` 对象的集合属性，比如 `document.links`、`docuement.forms`、`document.images` 等

#### 属性

- length

  > 包含的节点数量

#### 方法

- `HTMLCollection.prototype.item(index)`

  > 根据索引获取节点，如果越界，返回 null

- `HTMLCollection.prototype.namedItem(id | name)`

  > 根据 id 或者 name 属性获取节点



### ParentNode

ParentNode 继承自 Node，表示的是一个父节点，例如通过 `node.parentNode` 获取得到的节点即是此类型

#### 属性

- `children`

  > 返回一个 `HTMLCollection` 集合，包含所有的**元素**子节点
  >
  > 注意：只包括元素子节点，不包括文本节点、注释节点等
  >
  > 另外，`HTMLCollection` 是动态集合，会实时反映 DOM 的任何变化

- `firstElementChild`

  > 返回当前节点的第一个元素子节点
  >
  > 如果没有任何元素子节点，则返回 `null`

- `lastElementChild`

  > 返回当前节点的最后一个元素子节点
  >
  > 如果没有任何元素子节点，则返回 `null`

- `childElementCount`

  >返回一个整数，表示当前节点的所有元素子节点的数目

#### 方法

- `ParentNode.prototype.append()`

  > 在父节点尾部添加一个子节点

- `ParentNode.prototype.prepend()`

  > 在父节头尾部添加一个子节点



### ChildNode

如果一个节点有父节点，那么该节点就继承了`ChildNode`接口

#### 方法

- `ChildNode.prototype.remove()`

  > 用于从父节点移除当前节点

- `ChildNode.prototype.before()`

  > 在当前节点的前面，插入一个或多个同级节点

- `ChildNode.prototype.after()`

  > 在当前节点的后面，插入一个或多个同级节点

- `ChildNode.prototype.replaceWith()`

  > 使用参数节点，替换当前节点
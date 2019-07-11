# 块格式化上下文（BFC）

BFC 全称是 Block Formatting Context，即块格式化上下文。它是 CSS2.1 规范定义的，关于 CSS 渲染定位的一个概念。BFC 是基于**视觉格式化模型**（*visual formatting model*）出现的一个概念。



BFC 代表一个独立的渲染区域，或者一个独立的渲染容器。不同 BFC 之间布局不会互相影响。



## 视觉格式化模型

CSS 视觉格式化模型（*visual formatting model*）是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型是 CSS 的基础概念之一。



视觉格式化模型会根据[CSS盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)将文档中的元素转换为一个个盒子。



盒子的布局受以下因素影响：

- 盒子的尺寸：精确指定、由约束条件指定或没有指定
- 盒子的类型：行内盒子（inline）、行内级盒子（inline-level）、原子行内级盒子（atomic inline-level）、块盒子（block）
- [定位方案（positioning scheme）](https://developer.mozilla.org/zh-CN/docs/CSS/Box_positioning_scheme)：普通流定位、浮动定位或绝对定位
- 文档树中的其它元素：即当前盒子的子元素或兄弟元素
- [视口](https://developer.mozilla.org/en-US/docs/Glossary/viewport)尺寸与位置
- 所包含的图片的尺寸
- 其他的某些外部因素



该模型会根据盒子的**包含块**（*containing block）*的边界来渲染盒子。通常，盒子会创建一个包含其后代元素的包含块，但是盒子并不由包含块所限制，当盒子的布局跑到包含块的外面时称为溢出（*overflow）*。



## 盒子

浏览器会根据元素的 `display` 设置生成不同的盒子：

- display 为 `block`, `table`, `list-item` 的元素称之为**块级元素**（block-level element），会生成至少一个**块级盒子**（block-level box）；

  > 有的块级元素会产生多个块级盒子，比如列表项会生成额外的盒子来放置项目符号

  一个块级盒子**可能**产生一个**块格式化上下文**（block formatting context, BFC）；

- display 为 `inline`, `inline-block`, `inline-table` 的元素称之为**行内级元素**（inline-level element），会生成一个**行内级盒子**（inline-level box）；

  一个行内级盒子**可能**产生一个**行内格式化上下文**（inline formatting context, IFC）；



## 关键词解释

### 块

block，一个抽象的概念，一个块在文档流上占据一个独立的区域，块与块之间在垂直方向上按照顺序依次堆叠。

### 包含块

containing block，包含其他盒子的块称为包含块。

### 盒子

box，一个抽象的概念，由 CSS 引擎根据文档中的内容所创建，主要用于文档元素的定位、布局和格式化等用途。盒子与元素并不是一一对应的，有时多个元素会合并生成一个盒子，有时一个元素会生成多个盒子（如匿名盒子）。我们常说的盒子模型指的就是这个盒子。

### 块级元素

block-level element，元素的 `display` 为 `block`、`list-item`、`table`时，该元素将成为块级元素。元素是否是块级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局。

### 块级盒子

block-level box，由块级元素生成。一个块级元素至少会生成一个块级盒子，但也有可能生成多个（例如列表项元素）。

### 块盒子

block box，如果一个块级盒子同时也是一个块容器盒子（见下），则称其为块盒子。除具名块盒子之外，还有一类块盒子是匿名的，称为匿名块盒子（Anonymous block box），匿名盒子无法被CSS选择符选中。

可以简单地理解为：**块级盒子 = 块级元素 + BFC**（因为 BFC 会产生一个包含块）

![venn_blocks.png](https://developer.mozilla.org/@api/deki/files/5995/=venn_blocks.png)

### 块容器盒子

block container box 或 block containing box，块容器盒子侧重于当前盒子作为“容器”的这一角色，它不参与当前块的布局和定位，它所描述的仅仅是当前盒子与其后代之间的关系。换句话说，块容器盒子主要用于确定其子元素的定位、布局等。

**注意**：块容器盒子即 BFC，BFC 可以由**块级元素**产生也可以由**行内级元素**产生，两种元素产生的块容器盒子分别称之为块盒子和行内盒子。

### 行内级元素

inline-level element，`display` 为 `inline`、`inline-block`、`inline-table` 的元素称为行内级元素。与块级元素一样，元素是否是行内级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局。

### 行内级盒子

inline-level box，由行内级元素生成。行内级盒子包括行内盒子和原子行内级盒子两种，区别在于该盒子是否参与行内格式化上下文的创建。

### 行内盒子

inline box，参与行内格式化上下文创建的行内级盒子称为行内盒子。与块盒子类似，行内盒子也分为具名行内盒子和匿名行内盒子（anonymous inline box）两种。

可以简单地理解为：**行内盒子 = 行内级元素 + BFC**（因为 BFC 会产生一个包含块）

### 原子行内级盒子

atomic inline-level box，不参与行内格式化上下文创建的行内级盒子。原子行内级盒子一开始叫做原子行内盒子（atomic inline box），后被修正。原子行内级盒子的内容不会拆分成多行显示。

![img](https://developer.mozilla.org/@api/deki/files/6008/=venn_inlines.png)

### 匿名块盒子

在某些情况下进行视觉格式化时，需要添加一些增补性的盒子，这些盒子不能用CSS选择符选中，因此称为匿名盒子（*anonymous boxes）*。

CSS选择器不能作用于匿名盒子(*anonymous boxes*)，所以它不能被样式表赋予样式。也就是说，此时所有可继承的 CSS 属性值都为 `inherit` ，而所有不可继承的 CSS 属性值都为 `initial`。

例如以下结构：

```html
<div>Some inline text <p>followed by a paragraph</p> followed by more inline text.</div>
```

会产生两个匿名块盒子，一个在 p 元素之前，一个在其之后：

![img](https://developer.mozilla.org/@api/deki/files/5996/=anonymous_block-level_boxes.png)





## 流和定位

### 定位规则

一旦生成了盒子以后，CSS引擎就需要定位它们以完成布局。下面是定位盒子时所使用的规则：

- 普通流：按照次序依次定位每个盒子
- 浮动：将盒子从普通流中单独拎出来，将其放到外层盒子的某一边
- 绝对定位：按照绝对位置来定位盒子，其位置根据盒子的包含元素所建立的绝对坐标系来计算，因此绝对定位元素有可能会覆盖其他元素



### 普通流

在普通流中，盒子会依次放置。在块格式化上下文中，盒子在垂直方向依次排列；而在行内格式化上下文中，盒子则水平排列。当CSS的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 属性为 `static` 或 `relative`，并且 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 为 `none` 时，其布局方式为普通流。

普通流又有两种情况，静态定位和相对定位：

- [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `static` 时为静态定位，此时每个盒子根据普通流所计算出的确切位置来定位。
- 当 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `relative` 时为相对定位，此时每个盒子还会根据 [`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)、[`bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)、[`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left) 和 [`right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right) 属性的值在其原本所在的位置上产生指定大小的偏移。但即使偏移了，其原来的位置仍被保留，其他元素不能占据。



### 浮动

在浮动定位中，浮动盒子会浮动到当前行的开始或尾部位置。这会导致普通流中的文本及其他内容会“流”到浮动盒子的边缘处，除非元素通过 [`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 清除了前面的浮动。

一个盒子的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 值不为 `none`，并且其 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `static` 或 `relative` 时，该盒子为浮动定位。如果将 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 设置为 `left`，浮动盒子会定位到当前行盒子的开始位置（左侧），如果设置为 `right`，浮动盒子会定位到当前行盒子的尾部位置（右侧）。不管是左浮动还是右浮动，行盒子都会伸缩以适应浮动盒子的大小。



### 绝对定位

在绝对定位中，盒子会完全从当前流中移除，并且不会再与其有任何联系，其位置会使用 [`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)、[`bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)、[`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left) 和 [`right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right) 相对其[包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)进行计算。

如果元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`，该元素为绝对定位。

对于 `position: absolute`，元素定位将相对于最近的一个 `relative`、`fixed` 或 `absolute` 的父元素，如果没有则相对于 `body`；

对固定位置 `position: fixed` 的元素来说，其包含块为整个视口，该元素相对视口进行绝对定位，因此滚动时元素的位置并不会改变。



## 如何产生 BFC

在某些情况下，块（`block` 或者 `inline-block`）盒子可以产生一个 BFC：

- 根元素或包含根元素的元素
- **浮动元素**（元素的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 不是 `none`）
- **绝对定位元素**（元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`）
- **行内块元素**（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `inline-block`）
- **表格单元格**（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table-cell`，HTML表格单元格默认为该值）
- 表格标题（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-caption`，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table、``table-row`、 `table-row-group、``table-header-group、``table-footer-group`（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 `inline-table`）
- **[`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 值不为 `visible` 的块元素**
- [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 值为 `flow-root` 的元素
- [`contain`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain) 值为 `layout`、`content`或 `strict` 的元素
- **弹性元素**（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `flex` 或 `inline-flex`元素的直接子元素）
- 网格元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `grid` 或 `inline-grid` 元素的直接子元素）
- 多列容器（元素的 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count) 或 [`column-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width) 不为 `auto，包括 ``column-count` 为 `1`）
- `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）。



以上加粗部分是我们主要关注的情况。



## BFC 的应用

- 清除浮动
- 防止与浮动元素重叠
- 防止元素的 margin 与 BFC 之外的元素重合



## 参考

[1] MDN，[视觉格式化模型](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

[2] MDN，[块格式上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

[3] 掘金，[学习 BFC (Block Formatting Context)](https://juejin.im/post/59b73d5bf265da064618731d)
# 块格式化上下文（BFC）

BFC 全称是 Block Formatting Context，即块格式化上下文。它是 CSS2.1 规范定义的，关于 CSS 渲染定位的一个概念。BFC 是基于**视觉格式化模型**出现的一个概念。



BFC 代表一个独立的渲染区域，或者一个独立的渲染容器。不同 BFC 之间布局不会互相影响。



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



## 盒子

浏览器会根据元素的 `display` 设置生成不同的盒子：

- display 为 `block`, `table`, `list-item` 的元素称之为**块级元素**（block-level element），会生成至少一个**块级盒子**（block-level box）；

  > 有的块级元素会产生多个块级盒子，比如列表项会生成额外的盒子来放置项目符号

  一个块级盒子**可能**产生一个**块格式化上下文**（block formatting context, BFC）；

- display 为 `inline`, `inline-block`, `inline-table` 的元素称之为**行内级元素**（inline-level element），会生成一个**行内级盒子**（inline-level box）；

  一个行内级盒子**可能**产生一个**行内格式化上下文**（inline formatting context, IFC）；



## 视觉格式化模型

CSS 视觉格式化模型（*visual formatting model*）是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型是 CSS 的基础概念之一。

视觉格式化模型会根据[CSS盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)将文档中的元素转换为一个个盒子。



## BFC 的应用



## 参考

[1] MDN，[视觉格式化模型](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

[2] MDN，[块格式上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
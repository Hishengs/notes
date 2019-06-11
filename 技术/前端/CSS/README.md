### 文字样式

#### text-decoration

由 [`text-decoration-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style) 和 [`text-decoration-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color) 构成。

**text-decoration-line**

> underline, overline, line-throught

**text-decoration-style**

> solid, dotted, dashed, double, wavy



#### text-transform

> none, uppercase, lowercase, capitalize



#### text-shadow

> ```css
> offset-x | offset-y | blur-radius | color
> ```

> 水平方向阴影偏移，垂直方向阴影偏移，阴影模糊半径，颜色，



#### text-indent

> 设置文本首行缩进大小，px，rm，百分比等单位



#### direction

> 设置文本方向，ltr | rtl

> 注意：通过设置元素的 `dir="rtl"` 的方式也可以改变文本的方向。



#### writing-mode

> 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。

> 1. horizontal-tb 水平方向从左到右，垂直方式从上到下
> 2. vertical-rl 垂直方向从上到下，水平方向从右到左
> 3. vertical-lr 垂直方向从上到下，水平方向从左到右



#### word-break

> 指定了怎样在单词内断行

> 1. normal 浏览器默认规则
> 2. break-all 换行
> 3. keep-all 保持不换行



#### word-wrap / overflow-wrap

> 当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行

> - normal 
>
>   在正常的单词结束处换行
>
> - break-word
>
>   表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行



#### white-space





如何区分 word-break, word-wrap, white-space

[《彻底搞懂word-break、word-wrap、white-space》](<https://juejin.im/post/5b8905456fb9a01a105966b4>)


## 概述

**CSS transitions** 提供了一种在更改 CSS 属性时控制动画速度的方法。 其可以让属性变化成为一个持续一段时间的过程，而不是立即生效的。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS transitions 后该元素的颜色将逐渐从白色变为黑色，按照一定的曲线速率变化。这个过程可以自定义。

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)，[`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) 或者通过 JavaScript 实现的状态变化。



## 语法

**transition** [CSS](https://developer.mozilla.org/en/CSS) 属性是 [`transition-property`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)，[`transition-duration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)，[`transition-timing-function`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 和 [`transition-delay`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay) 的一个[简写属性](https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties)。

```css
transition: property name | duration;
transition: property name | duration | delay;
transition: property name | duration | timing function;
transition: property name | duration | timing function | delay;
```

可以通过逗号 `,` 定义多组 transition



## 子属性

- `transition-property`

  > 指定应用过渡属性的名称
  >
  > - none
  > - all
  > - 指定的属性名

- `transition-duration`

  > 以秒或毫秒为单位指定过渡动画所需的时间

- `transition-timing-function`

  > 在整个 transition 变化过程中的加速度变化函数，可用函数见 [timing-function](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function>)

- `transition-delay`

  > 规定了在[过渡效果](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)开始作用之前需要等待的时间，以秒（s）或毫秒（ms）为单位

  

## 参考

[1] MDN，[《使用 CSS transitions》](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>)

[2] MDN, [transition](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition>)
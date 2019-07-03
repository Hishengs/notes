## 概述

**CSS animations** 使得可以将从一个CSS样式配置转换到另一个CSS样式配置。动画包括两个部分:描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。



[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) **animation** 属性是 [`animation-name`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name)，[`animation-duration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration), [`animation-timing-function`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)，[`animation-delay`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)，[`animation-iteration-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count)，[`animation-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)，[`animation-fill-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) 和 [`animation-play-state`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state) 属性的一个简写属性形式。



## 子属性

- animation-delay

  > 设置延时，即从元素加载完成之后到动画序列开始执行的这段时间
  >
  > 单位：s

- animation-direction

  > 设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行
  >
  > - normal
  >
  >   > 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性
  >
  > - alternate
  >
  >   > 动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向
  >
  > - reverse
  >
  >   > 反向运行动画，每周期结束动画由尾到头运行
  >
  > - alternate-reverse
  >
  >   > 反向交替， 反向开始交替

- animation-duration

  > 设置动画一个周期的时长
  >
  > 单位：s

- animation-iteration-count

  > 设置动画重复次数， 可以指定infinite无限次重复动画

- animation-name

  > 指定由 [`@keyframes`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes) 描述的关键帧名称

- animation-play-state

  > 允许暂停和恢复动画

- animation-timing-function

  > 设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化

- animation-fill-mode

  > 指定动画执行前后如何为目标元素应用样式



## 使用 keyframes 定义动画序列

`@keyframes` 可以定义动画在不同时间点上的样式表现；例如在开始（0%）和结束（100%）的样式：

```css
@keyframes test {
    0% {
        // 开始样式写在这里，可以使用 from 代替 0%
    }
    100% {
        // 结束样式写在这里，可以使用 to 代替 100%
    }
}
```

还可以更细粒度地控制时间点样式：

```css
@keyframes test {
    0% {
        // 
    }
    25% {
        // 
    }
    50% {
        // 
    }
    75% {
        // 
    }
    100% {
        // 
    }
}
```



## 特性

### 重复播放动画

将 `animation-iteration-count` 属性设置为 `infinite` 可以让动画无限重复播放。

### 来回运动

将 `animation-direction` 属性设置为 `alternate` 可以让动画来回播放。



## 事件

- animationstart

  > 动画开始播放

- animationend

  > 动画结束播放

- animationiteration

  > 动画循环播放



## 参考

[1] MDN, [animation](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation>)

[2] MDN, [《使用 CSS 动画》](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations>)
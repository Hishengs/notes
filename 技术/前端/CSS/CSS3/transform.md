## 概述

CSS **transform** 属性允许你**旋转**，**缩放**，**倾斜**或**平移**给定元素。



CSS3 的 transform 变换主要包括以下几种类型：

- matrix 矩阵变换
- translate 平移
- rotate 旋转
- scale 缩放
- skew 扭曲



以上几种类型分别有 2D（平面） 和 3D（空间） 的变换形态



### 2D（平面）

- matrix
- translate
- translateX
- translateY
- rotate
- scale
- scaleX
- scaleY
- skew
- skewX
- skewY



### 3D（空间）

- matrix3d
- translate3d
- translateZ
- rotate



## 平移 translate

使用 `translate(X, Y)` 来平移指定元素，其中 X 是水平偏移像素，Y 是垂直偏移像素。

也可以使用 `translateX` 和 `translateY` 单独在 X 轴，Y 轴进行偏移。



## 旋转 rotate

使用 `rotate(xdeg)` 来旋转指定元素，`xdeg` 为旋转的角度，范围为 0-360



## 缩放 scale

使用 `scale(X, Y)` 来拉伸缩放指定元素，其中 X 是水平缩放倍数，Y 是垂直缩放倍数。

也可以使用 `scaleX` 和 `scaleY` 单独在 X 轴，Y 轴进行缩放。



## 歪斜 skew

使用 `skew(Xdeg, Ydeg)` 来拉伸缩放指定元素，其中 X 是水平歪斜角度，Y 是垂直歪斜角度。

也可以使用 `skewX` 和 `skewY` 单独在 X 轴，Y 轴进行歪斜。



## 矩阵变换 matrix





## 改变原点

很多的 transform 变换都需要指定的一个点作为旋转，倾斜，平移等的原点，默认是元素的中心点；

可以通过 [`transform-origin`](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin>) 来改变。



## 参考

[1] MDN, [transform](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform>)

[2] MDN, [使用 CSS 变形](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms>)
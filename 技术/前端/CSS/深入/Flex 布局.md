# Flex 布局

Flex，即 Flex Box，弹性盒的意思，如果一个元素声明了 `display: flex;` ，那么这个元素盒子就拥有了弹性布局的能力。



声明为 flex 布局的元素，称之为“容器”，其下所有的子元素称之为“容器项”。

> 设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。



## 主轴与交叉轴

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。



## 容器属性

- **flex-direction**

  > 描述了主轴的方向（项目在主轴的排列方向）。
  >
  > 可取值：
  >
  > - **row** 以水平轴为主轴，从左往右（默认值）
  > - **row-reverse** 以水平轴为主轴，从右往左
  > - **column** 以垂直轴为主轴，从上往下
  > - **column-reverse** 以垂直轴为主轴，从下往上
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

- **flex-wrap**

  > 描述了当空间不够时，如何换行。
  >
  > 可取值：
  >
  > - **nowrap** 不换行（默认值）
  >
  >   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)
  >
  > - **wrap** 换行，且第一行在上方，新增的行由上往下排列
  >
  >   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)
  >
  > - **wrap-reverse** 换行且第一行在下方，新增的行由下往上排列
  >
  >   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

- **flex-flow**

  > `flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

- **justify-content**

  > 描述了在主轴上容器项之间的对齐方式。
  >
  > 可取值：
  >
  > - **flex-start** 左对齐（默认值）
  > - **flex-end** 右对齐
  > - **center** 居中
  > - **space-between** 两端对齐，容器项之间保持相同间距
  > - **space-around** 容器项两边保持相同的间距
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

- **align-items**

  > 描述了在交叉轴上容器项的对齐方式。
  >
  > 可取值：
  >
  > - **flex-start** 以交叉轴起点为准对齐（上对齐）
  > - **flex-end** 以交叉轴终点为准对齐（下对齐）
  > - **center** 在交叉轴上居中对齐
  > - **baseline** 以项目的第一行文字基线对齐
  > - **stretch** 拉伸容器项对齐，容器项将占满整个容器的高度（默认值）
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

- **align-content**

  > 定义了**多根轴线**的对齐方式。如果项目只有一根轴线，该属性不起作用。
  >
  > 可取值：
  >
  > - `flex-start`：与交叉轴的起点对齐。
  > - `flex-end`：与交叉轴的终点对齐。
  > - `center`：与交叉轴的中点对齐。
  > - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
  > - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  > - `stretch`（默认值）：轴线占满整个交叉轴。
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)



## 容器项目属性

- **order**

  >描述了容器项的排列顺序。数值越小，排列越靠前，默认为0。

- **flex-grow**

  > 描述了容器项在容器有多余空间时的拉伸比例。默认为0，即如果存在剩余空间，也不放大。负值无效。
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

- **flex-shrink**

  > 描述了容器项在容器空间不足时的缩小比例。默认为1，即如果空间不足，该项目将缩小。负值无效。
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)

- **flex-basis**

  > `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。
  >
  > 相当于设置 width

- **flex**

  > `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

- **align-self**

  > 描述了该容器项在交叉轴的对齐方式，会覆盖容器 `align-items` 的设置。
  >
  > 可取值同 `align-items` 一样。默认为 auto，即自动跟随容器设置。
  >
  > ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)





## 参考

[1] [《Flex 布局教程：语法篇》](<http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>)


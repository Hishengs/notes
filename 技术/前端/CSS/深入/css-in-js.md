# CSS in JS



先合而分，再分而合。



CSS in JS 解决方案须解决以下痛点：

- 保持 JS 的灵活性，动态性
- 支持伪类
- 支持样式复用
- 支持主题



优点：

- 可以动态计算、改变样式
- 无需单独 import 组件样式文件

缺点：

- 由于是动态生成，注入样式，一开始无法先渲染出组件样式，必须得等 JS 执行后
- 样式检查，高亮、提示支持较差



相关 CSS in JS 库：

- [Polished](https://github.com/styled-components/polished) 一个用于 JS 写 CSS 的工具函数库，可与 styled-components 等完美契合
- [styled-components](https://github.com/styled-components/styled-components) 当前最流行的 CSS in JS 解决方案
- [Tiny-color](https://github.com/bgrins/TinyColor), [Chroma](https://github.com/gka/chroma.js) 颜色操作工具库



相关文章：

- [CSS in JS 简介](https://www.ruanyifeng.com/blog/2017/04/css_in_js.html)
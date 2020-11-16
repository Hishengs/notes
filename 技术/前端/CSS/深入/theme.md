# Theme 主题



实现主题的几种方式：

- less, scss 静态编译出不同的主题文件，前端根据需要动态加载覆盖

- 通过 styled-components 等 css-in-js 库动态修改样式注入

- css3 变量

  > 这种方式有一定缺点，例如无法 JS 操作 css3 变量衍生其他的变量


# Vue

核心特性

- 数据响应原理
- 虚拟 DOM: diff 算法
- 单文件 SFC Parse: template-compiler
- 双向数据绑定（v-model ）
- 指令
- 计算属性与监听器 Watcher
- 支持具名插槽与作用域插槽



知识点

- Vue.nextTick 实现原理

  > Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。

- Vue.extend 实现原理

- Vue.mixin 实现原理

- Vue.mixin 与 Vue.extend 的区别

- defineProperty 如何实现数据订阅，依赖收集

- Dep, Observer, Watcher 之间的关系

- provide / inject 的实现原理

- Functional Component 的与普通的 Compoent 的区别

- 如何实现一个自定义指令（例如 v-click-outside）

- keep-alive 的实现原理

- SSR 的实现，与 CSR 的区别



比较

- 与 React 的异同

  相同点

  - 组件化
  - virtual dom
  - jsx
  - 响应式
  - 尽量保持核心库简单
  - 都存在 Native 方案：Vue => Week, React => React Native
  - 支持 SSR: Vue => [Nuxt.js](https://nuxtjs.org/), React => [Next.js](https://nextjs.org/)

  不同点

  - 在 React 应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树；

    而 Vue 能精确定位数据变化需要更新的节点

  - 对 CSS 的使用支持不同，React 只支持 CSS-in-JS 或者其他的 CSS Module 方案；而 Vue 单文件自带支持 scoped css

  - Vue 同时支持模板和 JSX, React 只支持 JSX

  - Vue 内置丰富的指令，而 React 需要自己实现

- [Comparison with Other Frameworks](https://vuejs.org/v2/guide/comparison.html)



Vue2 核心目录及其作用

- compiler

  > 解析 template 字符串转为 render 函数

- core

  > Vue 核心 API, 响应式实现, Virtual DOM diff 等

- platform

  > 不同平台（web / weex ）等差异化编译入口

- server

  > 服务端渲染逻辑 createRender

- sfc

  > 解析 .vue 单文件

- shared

  > 以上模块通用工具函数



完整目录结构示意

```js
|-- /src
	|-- /compiler
	|-- /core
		|-- /components	// keep-alive 实现
		|-- /global-api	// 全局 API
		|-- /instance		// Vue 构造函数及实例相关方法
		|-- /observer		// 实现数据响应
		|-- /util				// 工具函数
		|-- /vdom				// 构造虚拟 dom，对 dom 节点进行 diff, patch
		|-- config.js		// Vue.config 默认配置项
		|-- index.js		// 入口文件，暴露 Vue
	|-- /platform
	|-- /server
	|-- /sfc
	|-- /shared
```



某些场景在 React 中如何做到？

- 如何监听 state 的变化并触发方法，类似 Vue 的 Watch

  > 使用 componentWillUpdate 或者 componentDidUpdate 生命周期函数

- 如何实现 Vue 的 computed 计算属性

  > 直接通过 object getter
## 对比 React

**相同之处：**

- 使用 Virtual DOM

- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件

- 都是单向数据流（Vue 的 v-model 是双向绑定）

  ![img](https://user-gold-cdn.xitu.io/2018/9/2/165984beb2c823d1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库

- 都提供了 Native 方案，例如 RN，Weex



**不同之处：**

- 数据（状态）变化时，组件的更新方式不一样，React 是以状态所在组件为根，重新渲染整个组件子树；

- 数据（状态）修改方式不同：Vue 可以直接修改数据，而 React 状态改变需要通过 setState 设置，而且是异步的；

- Vue 提供了 `computed` 计算属性和 `watch` 选项

- 渲染方式不同：Vue 提供了单文件模板和 JSX，而 React 只支持 JSX；

- React 的样式基本以 CSS-in-JS 的方式，而 Vue 单文件的方式，JS 和 CSS 可以单独分开写；

- Vue 对 DOM 的操作基本通过指令的方式，而 React 则是通过 JSX 和 JS 来操作

- 组件嵌套：Vue 是通过 slot 的方式，而 React 是通过 `this.props.children` 的方式包含

  ```js
  export default class Wrapper extends Component {
    render() {
      return (
        <section>
          <header>我是Wrapper头部</header>
          { this.props.children }
          <footer>我是Wrapper尾部</footer>
        </section>
      );
    }
  }
  ```

- Vue 中组件功能与方法的整合是通过 mixins 的方式实现的，而 React 是通过 HOC（高阶组件）实现

- 数据跨域多级组件：一般数据的传递是通过 props 的方式，但这种方式只能在父子组件之间，当父组件想向深层的子组件传递数据时，需要多层 props 传递，很不优雅；Vue 提供了 inject 和 provide 的方式解决这个问题，而 React 则是通过 context 的方式。

- 生命周期不同：

  **Vue**

  ![img](https://user-gold-cdn.xitu.io/2018/9/6/165ad6f55c319399?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**React**

![img](https://user-gold-cdn.xitu.io/2018/9/6/165ad7307ebbf0e7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 参考

[1] [「Vue」与「React」--使用上的区别](<https://juejin.im/post/5c2de832f265da6172659b45>)

[2] [个人理解Vue和React区别](<https://juejin.im/post/5b8b56e3f265da434c1f5f76>)
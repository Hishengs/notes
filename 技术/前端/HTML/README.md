**设置文档语言**

```html
<html lang="zh-Hans">
```

> 可用语言查询：<https://www.w3.org/International/articles/language-tags/>



**块引用**

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  HTML Block
  Quotation Element
</blockquote>
```



**行内引用**

```html
<q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q>
```



**缩略语**

```html
<p>我们使用 <abbr title="超文本标记语言（Hypertext Markup Language）">HTML</abbr> 来组织网页文档。</p>
```



**联系方式**

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```



**上下标**

```html
<p>咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
```



#### 语义化结构化标签

* `<header>`：标题栏

* `<nav>`：导航栏

* `<main>`：主内容
  * `<article>`：文章
  * `<section>`：片段
* `<aside>`: 侧边栏
* `<footer>`：页脚



#### 无语义结构化标签

* `div` 块级无语义标签
* `<span>` 行内无语义标签



**检测你的网页正确性**

[https://validator.w3.org](https://validator.w3.org/)
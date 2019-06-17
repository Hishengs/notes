**HTML5 新加入的标签**



`DOCTYEP`

HTML5 直接使用简洁的 `<!DOCTYPE html>` 标明文档类型，不要像以前那么复杂了



**语义化元素**



`nav`

使用此标签用于定义网站的导航栏部分



`header`

使用此标签用于定义网站的头部部分，一般显示网站标题，Logo 等



`main`

使用此标签用于定义网站的主体部分



`aside`

使用此标签用于定义网站的非主体，边栏部分，例如用于显示广告位



`footer`

使用此标签用于定义网站的页脚部分，一般是网站信息，如地址，联系方式等



`article`

使用此标签用于定义网站的文章、帖子、评论等内容



`section`

使用此标签用于定义网站的 `article` 下的章节，片段等，`section` 下可以有独立的标题和段落



`time`

使用此标签用于明显时间相关的显示，提供更好的语义化，例如程序可以通过该标签识别时间信息，提供日程计划安排

> 支持度较低



`figure` , `figcaption`

用于定义可附加标题的内容，例如 图片 + 图片标题说明 的组合

```html
<figure>
    <img src="/media/examples/elephant-660-480.jpg" alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```



`menu` , `menuitem`

用于定义普通菜单或者上下文菜单选项

> 支持度较低



`hgroup`

定义标题组

> 支持度较低



`small`

定义小于正常字体大小的小号字体，一般用于 *注释，版权信息，法律信息*  等的显示



`details` , `summary`

用于定义一个总结性的内容区域，包含 总结标题（`summary`） + 可展开详情（`details`）

```html
<details>
    <summary>这是一句总结</summary>
    这里 blabla... 是对总结的详细描述及解释
    ...
</details>
```



`ruby` , `rt` , `rp`

`ruby` 主要结合 `rt` , `rp` 元素用于展示东亚文字注音或字符注释

`rt` 一般用于显示汉字注音等



`progress`

进度条控件元素，拥有 `max` 和 `value` 两个属性

> 不同浏览器样式差异较大



`meter`

类似于 `progress`，但表达的含义不同，一般用于表示标量百分比，区间段等

> IE 暂不支持



`bdi`

用于单独进行元素方向隔离

> 支持度很低



`command`

用于显示命令按钮

> 慎用，基本不被浏览器支持



`dialog`

用于将 `dialog` 包含的部分声明为对话框，加上 `open` 属性可作为一个可交互的弹窗使用

> 支持度较低



`mark`

用于着重标注的文字，一般有上下文关联，不同于 `em`



`wbr`

参见：<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/wbr>，用处较少



**多媒体（图像、音视频等）**



`canvas`

参见：<https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial>



`audio` , `video` , `source` , `track`

参见：<https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content>



`embed`



**表单元素**



`datalist`

定义一系列可选列表项，用于 `input` 搜索时使用

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```



`output`

用于显示计算或者用户操作的结果，提供更好的语义

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```



``keygen`

> 已被废弃



**已移除的元素**

`acronym` , `applet` , `basefont` , `big` , `center` , `dir` , `font` , `frame` , `frameset` , `noframes` , `strike` , `tt`





***在不支持 HTML5 的浏览器如何处理兼容？***

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#%E5%9C%A8%E4%B8%8D%E6%94%AF%E6%8C%81HTML5%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E5%99%A8%E4%B8%AD%E4%BD%BF%E7%94%A8HTML5
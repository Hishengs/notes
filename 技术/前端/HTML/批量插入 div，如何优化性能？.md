#### 批量插入 div，如何优化性能？

> 1. 使用 Fragment，先批量创建，再一次性添加
>
> ```js
> var fragment = document.createDocumentFragment();
> for (let i=0; i<10000; i++) {
>   var div = document.createElement('div');
>   fragment.append(div);
> }
> target.append(fragment);
> ```
>
> 2. 使用字符串创建元素（JS 操作字符串速度很快）
>
> ```js
> var tpl = '';
> for (let i=0; i<10000; i++) {
>   tpl += '<div></div>';
> }
> target.innerHTML = tpl;
> ```

问题扩展：向1000个并排的div元素中，插入一个平级的div元素，如何优化插入的性能

> - 先 display:none 然后插入 再 display:block
> - 赋予key，然后使用 virtual-dom，先render，然后 diff，最后 patch
> - 脱离文档流，用 GPU 去渲染，开启硬件加速
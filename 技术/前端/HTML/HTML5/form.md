html5 新增加的表单功能



### form 新增

`<form>` 主要新增了以下两个属性：

- autocomplete

  > 是否支持自动完成功能

- novalidate

  > 是否需要对表单进行验证



### input 新增

新增的属性：

- autocomplete

  > 是否支持自动完成功能

- autofocus

  > 是否在页面加载完成后自动获得焦点

- form

  > 指向一个 `<form>` 表单元素 ID，指明该表单项属于哪个表单
  >
  > 如需引用一个以上的表单，请使用空格分隔

- height, width

  > 规定用于 image 类型的 input 标签的图像高度和宽度
  >
  > `<input type="image" src="img_submit.gif" width="99" height="99" />`

- list

  > 指向提供可选项的 `datalist` 元素 ID

- min, max, step

  > 提供给 type=number 的 input 的属性，min, max 限定可输入的最小最大值，step 限定了单次递增递减的步长

- multiple

  > 输入域是否支持输入多个值
  >
  > 适用的 type：email, file

- novalidate

  > 在提交表单的时候是否需要对此表单项进行验证

- pattern

  > 提供一个正则表达式，用于对表单域值的验证
  >
  > 适用 type：text, search, url, telephone, email 以及 password

- placeholder

  > 提供提示，描述输入域所期待的值，在输入值为空时显示
  >
  > 适用 type：text, search, url, telephone, email 以及 password

- required

  > 此项是否必须填写



input 新增的 **type**

- color
- date, time, datetime, datetime-local, month, week
- email
- range
- search
- tel
- url
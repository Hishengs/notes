HTML5 新增加的表单功能



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



### 新的元素

[<output>](<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/output>)

> 表示计算或用户操作的结果

*Warning: IE 暂不支持*



### 表单数据校验

> <https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation>

HTML5 提供了一系列规则用于表单数据验证，例如

通过校验属性定义校验规则，不满足时表单无法被提交



如果表单元素校验通过，

可通过 `:valid` 伪类进行样式化



如果未通过，

可通过 `:invalid` 伪类进行样式化



#### required

通过在 input 元素添加 `required` 属性，标志此表单必填，否则验证不通过



#### 正则表达式

通过在 input 元素添加 `pattern` 属性，可以使用正则自定义验证规则

例如，手机号码验证：

```html
<input pattern="^1[3|5|7|8]\d{9}$">
```



#### 限制长度

通过 `minlength`，`maxlength` 限制 input, textarea 的输入长度



#### 数字限制

`min`, `max` 限制数字最小最大值，`step` 限制每次变化步长



#### 使用新的校验 API

HTML5 提供 [the constraint validation API](http://www.w3.org/TR/html5/forms.html#the-constraint-validation-api) 来检测自定义表单元素的状态

对于支持 HTML5 的浏览器，每一个表单元素都拥有一个 `validity` 属性（[`ValidityState`](https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState) 实例），保存了其校验信息，包括：

* validity.customError

  > 是否设置了自定义错误

* validity.patternMismatch

  > 不匹配所设置的正则表达式

* validity.rangeOverflow

* validity.rangeUnderflow

* validity.stepMismatch

* validity.tooLong

* validity.typeMismatch

* validity.valid

* validity.valueMissing

* willValidate

方法：

- checkValidity()

  > 验证有效性

- setCustomValidity(*message*)

  > 设置自定义错误消息
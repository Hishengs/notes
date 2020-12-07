# 我不知道的 Javascript 知识点



> 函数 arguments 中的参数是对 形参 的**别名**，所以改变 arguments 的值也会影响到对应形参的值，但是在**严格模式**下，则不存在这种关联



> 当函数直接调用时，this 指向全局对象，一般是 windows，非严格模式下，this 则是 undefined.
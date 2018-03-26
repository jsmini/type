# 文档
js的typeof有缺陷，对简单数据类型支持有bug，比如对null支持不正确；对复杂数据类型基本无用

type.js借助内部的[class]来给绝大部分数据类型做出正确的类型判断，支持的部分类型如下：

- number
- boolean
- string
- undefined
- null
- symbol
- array
- object
- set
- weakset
- map
- weakmap
- function
- class
- regexp
- date
- math
- promise

**注意：**编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](../demo/demo-global.html)中的例子

## type
type函数的参数和返回类型入选：

- @param x {任意类型} 带判断的参数
- @return {string} 类型的字符串

下面给出type和typeof的对比结果：

```js
type(1) // 'number'
typeof 1 // 'number'

type(true) // 'boolean'
typeof true // 'boolean'

type('') // 'string'
typeof '' // 'string'

type(undefined) // 'undefined'
typeof undefined // 'undefined'

type(null) // 'null'
typeof null // 'object'

type(Symbol()) // 'symbol'
typeof Symbol() // 'symbol'

type([]) // 'array'
typeof [] // 'object'

type({}) // 'object'
typeof {} // 'object'

type(new Set()) // 'set'
typeof new Set() // 'object'

type(new WeakSet()) // 'weakset'
typeof new WeakSet() // 'object'

type(new Map()) // 'map'
typeof new Map() // 'object'

type(new WeakMap()) // 'weakmap'
typeof new WeakMap() // 'object'

type(function () {}) // 'function'
typeof function () {} // 'function'

type(class A {}) // 'function'
typeof class A {} // 'function'

type(/1/) // 'regexp'
typeof /1/ // 'object'

type(new Date()) // 'date'
typeof new Date() // 'object'

type(Math) // 'math'
typeof Math // 'object'

type(new Promise(function () {})) // 'promise'
typeof new Promise(function () {}) // 'object'
```

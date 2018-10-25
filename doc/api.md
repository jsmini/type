# 文档
js的typeof有缺陷，对简单数据类型支持有bug，比如对null支持不正确；对复杂数据类型基本无用

type.js借助内部的[class]来给绝大部分数据类型做出正确的类型判断，支持的部分类型如下：

- number, boolean, string, undefined, null, symbol
- array, object, set, weakset, map, weakmap
- function, class
- regexp, date, math, promise

常见问题，不同方式结果对比

| 值           | typeof | [class] | type    | type+strict |
| ----------- | ------ | ------- | ------- | ----------- |
| null        | object | Null    | null    | null        |
| new String  | object | String  | string  | String      |
| new Number  | object | Number  | number  | Number      |
| new Boolean | object | Boolean | boolean | Boolean     |
| []          | object | Array   | array   | array       |
| new Set     | object | Set     | set     | set         |
| /1/         | object | Regexp  | regexp  | regexp      |
| new Date()  | object | Date    | date    | date        |
| new Promise | object | Promise | promise | promise     |
| new A       | object | Object  | A       | A           |

## type
type函数的参数和返回类型入选：

- @param {*} x 带判断的参数
- @param {boolean} [strict=false]  是否是严格模式，严格模式下将会有所不同
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

大部分情况下不需要区分原始值和对象值，但对于布尔类型会有区别

```js
!!false // false
!!new Boolean(false) // true
```

type通过引入严格模式，来区分基本类型的原始值和对象值

```js
// number
type(1); // number
type(new Number(1)); // number

type(1, true); // number
type(new Number(1, true)); // Number

// string
type(''); // string
type(new String('')); // string

type('', true); // string
type(new String('', true)); // String

// boolean
type(true); // boolean
type(new Boolean(true)); // boolean

type(true, true); // boolean
type(new Boolean(true, true)); // Boolean
```

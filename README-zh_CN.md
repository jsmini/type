# [type](https://github.com/jsmini/type)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/type/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/jsmini/type.svg?branch=master)](https://travis-ci.org/jsmini/type)
[![Coveralls](https://img.shields.io/coveralls/jsmini/type.svg)](https://coveralls.io/github/jsmini/type)
[![npm](https://img.shields.io/badge/npm-0.9.2-orange.svg)](https://www.npmjs.com/package/@jsmini/type)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/type.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/type)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/type.svg)](http://isitmaintained.com/project/jsmini/type "Percentage of issues still open")

类型检测库，弥补typeof的问题，原生兼容IE6

[English](./README.md) | 简体中文

## 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | 安卓   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 23+  | 4+   | 6+   | 10+  | 5+   | 2.3+ | 0.10+ |


## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 如何使用
通过npm下载安装代码

```bash
$ npm install --save @jsmini/type
```

如果你是node环境

```js
var type = require('@jsmini/type').type;

type(1) // 'number'
type(true) // 'boolean'
```

如果你是webpack等环境

```js
import { type } from '@jsmini/type';

type(1) // 'number'
type(true) // 'boolean'
```

如果你是requirejs环境

```js
requirejs(['node_modules/@jsmini/type/dist/index.aio.js'], function (jsmini_type) {
    var type = jsmini_type.type;

    type(1) // 'number'
    type(true) // 'boolean'
})
```

如果你是浏览器环境

```html
<script src="node_modules/@jsmini/type/dist/index.aio.js"></script>

<script>
    var type = jsmini_type.type;

    type(1) // 'number'
    type(true) // 'boolean'
</script>
```

## 文档
[API](https://github.com/jsmini/type/blob/master/doc/api.md)

## 贡献指南  ![PRs welcome](<https://img.shields.io/badge/PRs-welcome-brightgreen.svg>)
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 更新日志
[CHANGELOG.md](https://github.com/jsmini/type/blob/master/CHANGELOG.md)

## 计划列表
[TODO.md](https://github.com/jsmini/type/blob/master/TODO.md)

## 谁在使用

- [is](https://github.com/jsmini/is)
- [querystring](https://github.com/jsmini/querystring)
- [clone](https://github.com/jsmini/clone)
- [react-compare](https://github.com/fXy-during/react-compare)
- [z](https://github.com/PinghuaZhuang/z)

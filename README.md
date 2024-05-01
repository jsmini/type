# [type](https://github.com/jsmini/type)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/type/blob/master/LICENSE)
[![CI](https://github.com/jsmini/type/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/type/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.12.0-orange.svg)](https://www.npmjs.com/package/@jsmini/type)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/type.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/type)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/type.svg)](http://isitmaintained.com/project/jsmini/type 'Percentage of issues still open')

type checking library. fixed the problem of typeof. support IE6.

English | [简体中文](./README-zh_CN.md)

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | --- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+  | 2.3+    | 0.10+ |

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage

npm installation

```bash
$ npm install --save @jsmini/type
```

Node.js

```js
var type = require('@jsmini/type').type;

type(1); // 'number'
type(true); // 'boolean'
```

webpack

```js
import { type } from '@jsmini/type';

type(1); // 'number'
type(true); // 'boolean'
```

Require.js

```js
requirejs(
  ['node_modules/@jsmini/type/dist/index.aio.js'],
  function (jsmini_type) {
    var type = jsmini_type.type;

    type(1); // 'number'
    type(true); // 'boolean'
  },
);
```

Browser

```html
<script src="node_modules/@jsmini/type/dist/index.aio.js"></script>

<script>
  var type = jsmini_type.type;

  type(1); // 'number'
  type(true); // 'boolean'
</script>
```

## Document

[API](https://github.com/jsmini/type/blob/master/doc/api.md)

## Contributing Guide ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

when initialize, install dependencies

```bash
$ npm install
```

builds your code for production to `build` folder

```bash
$ npm run build
```

run unit test. notice: borwser enviroment need to test manually. test file is in `test/browser`

```bash
$ npm test
```

change the version in package.json and README.md, add your description in CHANGELOG.md, and then release it happily.

```bash
$ npm run release
```

publish the new package to npm

```bash
$ npm publish
```

## CHANGELOG

[CHANGELOG.md](https://github.com/jsmini/type/blob/master/CHANGELOG.md)

## TODO

[TODO.md](https://github.com/jsmini/type/blob/master/TODO.md)

## who is using

- [is](https://github.com/jsmini/is)
- [querystring](https://github.com/jsmini/querystring)
- [clone](https://github.com/jsmini/clone)
- [react-compare](https://github.com/fXy-during/react-compare)
- [z](https://github.com/PinghuaZhuang/z)

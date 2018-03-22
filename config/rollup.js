var pkg = require('../package.json');

// 兼容 type.js 和 @yanhaijing/type.js 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * type.js ${version} (https://github.com/yanhaijing/type.js)
 * API https://github.com/yanhaijing/type.js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/type.js/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;

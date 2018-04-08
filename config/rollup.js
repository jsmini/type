var pkg = require('../package.json');

// 兼容 type 和 @jsmini/type 
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * type ${version} (https://github.com/jsmini/type)
 * API https://github.com/jsmini/type/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/type/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;

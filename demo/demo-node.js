var type = require('../dist/index.js').type;

console.log(type(123));

console.log(typeof new Promise(function () {}));

console.log(type(new Promise(function () {})));

console.log(Object.prototype.toString.call(new Promise(function () {})));

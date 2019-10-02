'use strict';

var expect = require('expect.js');

var type = require('../src/index.js').type;

describe('单元测试', function() {
    this.timeout(1000);

    var baseList = [
        // undefined
        { a: undefined, b: 'undefined' },

        // null
        { a: null, b: 'null' },

        // number
        { a: 1, b: 'number' },
        { a: 1.1, b: 'number' },
        { a: Math.pow(2, 64), b: 'number' },
        { a: Number(1), b: 'number' },
        { a: new Number(1), b: 'Number' },

        // boolean
        { a: true, b: 'boolean' },
        { a: false, b: 'boolean' },
        { a: Boolean(true), b: 'boolean' },
        { a: new Boolean(true), b: 'Boolean' },

        // string
        { a: '123', b: 'string' },
        { a: String(123), b: 'string' },
        { a: new String(123), b: 'String' },

        // symbol
        { a: Symbol(), b: 'symbol' },
    ];

    function B() {}
    B.prototype.constructor = null;

    var refList = [
        // array
        { a: [], b: 'array'},
        { a: Array(1), b: 'array'},
        { a: new Array(1), b: 'array'},

        // object
        { a: {}, b: 'object'},
        { a: Object({}), b: 'object'},
        { a: new Object(), b: 'object'},
        { a: Object.create({}), b: 'object'},
        { a: Object.create(null), b: 'object'},

        // set
        { a: new Set(), b: 'set'},

        // weakset
        { a: new WeakSet(), b: 'weakset'},

        // map
        { a: new Map(), b: 'map'},

        // weakmap
        { a: new WeakMap(), b: 'weakmap'},

        // function
        { a: function () {}, b: 'function'},
        { a: () => {}, b: 'function'},
        { a: new Function(), b: 'function'},

        // class
        { a: class A {}, b: 'function'},
        { a: new class A {}, b: 'A'},

        // regexp
        { a: /1/, b: 'regexp'},
        { a: new RegExp, b: 'regexp'},

        // date
        { a: new Date(), b: 'date'},

        // math
        { a: Math, b: 'math'},

        // promise
        { a: new Promise(function () {}), b: 'promise'},

        // unknown
        { a: new B, b: 'unknown'},
    ];

    describe('非严格模式', function() {
        it('基本类型', function() {
            for (var i = 0; i < baseList.length; i++) {
                var a = baseList[i].a;
                var b = baseList[i].b;
                expect(type(a)).to.equal(b.toLowerCase());
            }
        });

        it('复杂类型', function() {
            for (var i = 0; i < refList.length; i++) {
                var a = refList[i].a;
                var b = refList[i].b;
                expect(type(a)).to.equal(b);
            }
        });
    });

    describe('严格模式', function() {
        it('基本类型', function() {
            for (var i = 0; i < baseList.length; i++) {
                var a = baseList[i].a;
                var b = baseList[i].b;
                expect(type(a, true)).to.equal(b);
            }

            expect(type(NaN, true)).to.equal('nan');
        });

        it('复杂类型', function() {
            for (var i = 0; i < refList.length; i++) {
                var a = refList[i].a;
                var b = refList[i].b;
                expect(type(a, true)).to.equal(b);
            }

            expect(type(new Number(NaN), true)).to.equal('NaN');
        });
    });
});

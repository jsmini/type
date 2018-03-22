var expect = require('expect.js');

var type = require('../dist/index.js').type;

describe('单元测试', function() {
    this.timeout(1000);

    describe('基本类型', function() {
        it('number', function() {
            expect(type(1)).to.equal('number');
            expect(type(1.1)).to.equal('number');
            expect(type(Math.pow(2, 64))).to.equal('number');
        });

        it('boolean', function() {
            expect(type(true)).to.equal('boolean');
            expect(type(false)).to.equal('boolean');
        });

        it('string', function() {
            expect(type('123')).to.equal('string');
        });

        it('undefined', function() {
            expect(type()).to.equal('undefined');
        });

        it('null', function() {
            expect(type(null)).to.equal('null');
        });

        it('symbol', function() {
            expect(type(Symbol())).to.equal('symbol');
        });
    });

    describe('引用类型', function() {
        it('array', function() {
            expect(type([])).to.equal('array');
            expect(type(new Array())).to.equal('array');
        });

        it('object', function() {
            expect(type({})).to.equal('object');
            expect(type((new Object()))).to.equal('object');
        });

        it('set', function() {
            expect(type(new Set())).to.equal('set');
        });

        it('weakset', function() {
            expect(type(new WeakSet())).to.equal('weakset');
        });

        it('map', function() {
            expect(type(new Map())).to.equal('map');
        });

        it('weakmap', function() {
            expect(type(new WeakMap())).to.equal('weakmap');
        });

        it('function', function() {
            expect(type(function () {})).to.equal('function');
            expect(type(() => {})).to.equal('function');
            expect(type(new Function())).to.equal('function');
        });

        it('class', function() {
            expect(type(class A {})).to.equal('function');
        });

        it('regexp', function() {
            expect(type(/1/)).to.equal('regexp');
            expect(type(new RegExp)).to.equal('regexp');
        });

        it('date', function() {
            expect(type(new Date())).to.equal('date');
        });

        it('math', function() {
            expect(type(Math)).to.equal('math');
        });

        it('promise', function() {
            expect(type(new Promise(function () {}))).to.equal('promise');
        });
    });
});

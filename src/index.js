const toString = Object.prototype.toString;

export function type(x) {
    if(x === null){
        return 'null';
    }

    const t= typeof x;

    if(t !== 'object'){
        return t;
    }

    let c;
    try {
        c = toString.call(x).slice(8, -1).toLowerCase();
    } catch(e) {
        return 'object';
    }

    if(c !== 'object'){
        return c;
    }

    if(x.constructor == Object){
        return c;
    }

    // Object.create(null)
    try {
        // __proto__ 部分早期firefox浏览器
        if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
            return 'object';
        }
    } catch(e) {
        // ie下无Object.getPrototypeOf会报错
    }

    // function A() {}; new A
    try {
        const cname = x.constructor.name;

        if (typeof cname === 'string') {
            return cname;
        }
    } catch(e) {
        // 无constructor
    }

    // function A() {}; A.prototype.constructor = null; new A
    return 'unknown';
}

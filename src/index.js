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

    try {
        // Object.create(null)
        if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
            return 'object';
        }

        // function A() {}; new A
        return 'unknown';
    } catch(e) {
        // ie下无Object.getPrototypeOf
        return 'unknown';
    }
}

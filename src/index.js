const toString = Object.prototype.toString;

export function type(x, strict = false) {
  strict = !!strict;

  // fix typeof null = object
  if (x === null) {
    return 'null';
  }

  const t = typeof x;

  // 严格模式 区分NaN和number
  if (strict && t === 'number' && isNaN(x)) {
    return 'nan';
  }

  // number string boolean undefined symbol
  if (t !== 'object') {
    return t;
  }

  let cls;
  let clsLow;
  try {
    cls = toString.call(x).slice(8, -1);
    clsLow = cls.toLowerCase();
  } catch (e) {
    // ie下的 activex对象
    return 'object';
  }

  if (clsLow !== 'object') {
    if (strict) {
      // 区分NaN和new Number
      if (clsLow === 'number' && isNaN(x)) {
        return 'NaN';
      }
      // 区分 String() 和 new String()
      if (clsLow === 'number' || clsLow === 'boolean' || clsLow === 'string') {
        return cls;
      }
    }
    return clsLow;
  }

  // eslint-disable-next-line eqeqeq
  if (x.constructor == Object) {
    return clsLow;
  }

  // Object.create(null)
  try {
    // __proto__ 部分早期firefox浏览器
    if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
      return 'object';
    }
  } catch (e) {
    // ie下无Object.getPrototypeOf会报错
  }

  // function A() {}; new A
  try {
    const cname = x.constructor.name;

    if (typeof cname === 'string') {
      return cname;
    }
  } catch (e) {
    // 无constructor
  }

  // function A() {}; A.prototype.constructor = null; new A
  return 'unknown';
}

/**
 * 返回对象是否是 undefined 或者 null
 * @param {Object} value
 * @returns {boolean}
 */
export function isNil(value) {
  return value === undefined || value === null;
}

/**
 * 返回对象是否是Null
 * @param {Object} value
 * @returns
 */
export function isNull(value) {
  return value === undefined || value === null;
}

/**
 * 返回对象是否是Number
 * @param {Object} value
 * @returns
 */
export function isNumber(value) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[Object Number]'
  );
}

/**
 * 返回对象是否是Object
 * @param {Object} value
 * @returns
 */
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

/**
 * 返回对象是否是函数
 * @param {Object} value
 * @returns
 */
export function isFunction(value) {
  return typeof value === 'function';
}
/**
 * 判断传入对象是否空
 */
export function isNullOrEmpty(value) {
  if (isNull(value)) {
    return true;
  }
  switch (Object.prototype.toString.call(value)) {
    case '[object String]':
      return value.trim().length === 0;
    case '[object Array]':
      return value.length === 0;
    case '[object Object]':
      return Object.keys(value).length === 0;
    default:
      throw new TypeError();
  }
}


export function isNil(value: any) {
  return value === undefined || value === null;
}

export function isNull(value: any) {
  return value === undefined || value === null;
}

export function isNumber(value: any) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[Object Number]'
  );
}

export function isObject(value: any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isFunction(value: any) {
  return typeof value === 'function';
}

export function isNullOrEmpty(value: any) {
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


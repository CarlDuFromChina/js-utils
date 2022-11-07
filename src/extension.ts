import { encode, decode } from 'js-base64';
import { isNullOrEmpty } from './common';

/**
 * 原型链添加方法
 * @param {String} name 
 * @param {Object} func 
 * @returns this
 */
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
};

String.prototype.toText = function() {
  if (!isNullOrEmpty(this)) {
    const result = this.replace(/<([^>]+)>([\d\D]*?)<\/\1>/g, '$2 ').split(
      /\s+/
    );
    result.pop(); // 去掉最后一个空格
    return result.join();
  }
  return '';
}

String.prototype.toBase64String = function () {
  if (!isNullOrEmpty(this)) {
    return encode(this.toString());
  }
  return '';
}

String.prototype.toStringFromBase64 = function () {
  if (!isNullOrEmpty(this)) {
    return decode(this.toString());
  }
  return '';
}

/**
 * 去除尾部字符空格
 * @param {String} c 
 * @returns 
 */
String.prototype.trimLast = function (c: string) {
  if (isNullOrEmpty(c)) {
    return String.prototype.trimEnd.call(this);
  } else {
    var str = this;
    var rg = new RegExp(c);
    var i = str.length;
    while (rg.test(str.charAt(--i)));
    return str.slice(0, i + 1);
  }
};

/**
 * 根据传入大小分组数组
 * @param {Number} size 
 * @returns {Array} 返回分组后的数组
 */
Array.prototype.chunk = function (size = 1) {
  size = Math.max(parseInt(size.toString()), 0)
  const length = this == null ? 0 : this.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = this.slice(index, (index += size))
  }
  return result
};

/**
 * 数组去重
 */
Array.prototype.distinct = function () {
  return [...new Set(this)];
};
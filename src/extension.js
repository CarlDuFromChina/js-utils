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

/**
 * 获取 html 文本内容
 */
String.method('toText', function () {
  if (!isNullOrEmpty(this)) {
    const result = this.replace(/<([^>]+)>([\d\D]*?)<\/\1>/g, '$2 ').split(
      /\s+/
    );
    result.pop(); // 去掉最后一个空格
    return result.join();
  }
  return '';
});

/**
 * 转base64
 */
String.method('toBase64String', function () {
  if (!isNullOrEmpty(this)) {
    return encode(this);
  }
  return '';
});

/**
 * 转base64为文本
 */
String.method('toStringFromBase64', function () {
  if (!isNullOrEmpty(this)) {
    return decode(this);
  }
  return '';
});

/**
 * 根据传入大小分组数组
 * @param {Number} size 
 * @returns {Array} 返回分组后的数组
 */
Array.method('chunk', function (size = 1) {
  size = Math.max(parseInt(size), 0)
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
});

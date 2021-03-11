import { encode, decode } from 'js-base64';
import { isNullOrEmpty } from './common';

/**
 * 获取 html 文本内容
 */
String.prototype.toText = function () {
  if (!isNullOrEmpty(this)) {
    const result = this.replace(/<([^>]+)>([\d\D]*?)<\/\1>/g, '$2 ').split(
      /\s+/
    );
    result.pop(); // 去掉最后一个空格
    return result.join();
  }
  return '';
};

/**
 * 转base64
 */
String.prototype.toBase64String = function () {
  if (!isNullOrEmpty(this)) {
    return encode(this);
  }
  return '';
}

/**
 * 转base64为文本
 */
String.prototype.toStringFromBase64 = function () {
  if (!isNullOrEmpty(this)) {
    return decode(this);
  }
  return '';
}

/**
 * 根据传入大小分组数组
 * @param {Number} size 
 * @returns {Array} 返回分组后的数组
 */
Array.prototype.chunk = function chunk(size = 1) {
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
}
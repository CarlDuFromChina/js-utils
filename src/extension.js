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
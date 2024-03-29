# js-tuils

js-tuils 是一个 JavaScript 库，极大简化了 JavaScript 编程

## 变更日志

[变更日志](./CHANGELOG.md)详细记录了每个发行版的详细更改

## 功能

- 加密（AES、MD5、RSA、BASE64）
- uuid 生成
- 常用帮助函数

## 使用方式

安装：

```shell
yarn add @sixpence/js-utils # 使用 yarn 安装
npm install @sixpence/js-utils --save # 使用 npm 安装
```

使用：

```javascript
import { common, http } from '@sixpence/js-utils';

window.sp = Object.assign({}, common, http);

// common
var obj = null;
sp.isNull(obj); // true
sp.isNullOrEmpty(''); // true
sp.isNullOrEmpty({}); // true
sp.isNullOrEmpty([]); // true

// http
sp.get('...'); // Promise
sp.post('...'); // Promise

// uuid
import { encrypt } from '@sixpence/js-utils';

encrypt.uuid.generate(); // f908ce33-6387-4b81-897c-17468d3f6320
encrypt.uuid.isSame(
  'f908ce33-6387-4b81-897c-17468d3f6320',
  'F908CE33-6387-4B81-897C-17468D3F6320'
); // true

// md5
encrypt.md5.encrypt('hello world!');

// aes
encrypt.aes.encrypt('hello world!', '123'); // U2FsdGVkX19PE9K17xCVGQX0LXBbiejjHbC0ArMekNg=
encrypt.aes.decrypt('U2FsdGVkX19PE9K17xCVGQX0LXBbiejjHbC0ArMekNg=', '123'); // hello world!

// base64
encrypt.base64.encode('123'); // MTIz
encrypt.base64.decode('MTIz'); // 123

// rsa
encrypt.rsa.encrypt('123', 'swiskqwe');
encrypt.rsa.decrypt('123', 'asdasdasd');
```

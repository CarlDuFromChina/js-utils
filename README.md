# Web Core

Web Core 是一个 JavaScript 库，简化了 JavaScript 编程。
## 介绍

web core

```
├── src
│   ├── common.js
│   ├── encryption.js
│   ├── extension.js
│   ├── http.js
│   ├── uuid.js
│   └── index.js
├── package.json
├── readme.md
└── index.js
```

## 使用方式

```javascript
import 'web-core';

// common
var obj = null;
sp.isNull(obj); // true
sp.isNullOrEmpty(''); // true
sp.isNullOrEmpty({}); // true
sp.isNullOrEmpty([]); // true

// http
sp.get('...'); // Promise
sp.post('...'); // Promise

// guid
sp.newUUID(); // f908ce33-6387-4b81-897c-17468d3f6320
sp.isSameUUID('f908ce33-6387-4b81-897c-17468d3f6320', 'F908CE33-6387-4B81-897C-17468D3F6320'); // true
```

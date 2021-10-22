# Browser Detection
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
![jsdelivr downloads][jsdelivr-downloads-href]
![License][license-href]
[![twitter-href][twitter-href]](https://twitter.com/qiuge227)

## 😊 项目介绍
使用用户代理进行浏览器版本检测

## ✨ 演示
* [browser]: https://beth-zhang.github.io/browser-detection/example/mvp.html

## 📖 如何使用
browser-detection 非常好用，直接引用js文件即可

```
<script src="https://cdn.jsdelivr.net/npm/@cxy227/browser-detection@0.1.1/dist/index.js"></script>

const bd = new browserDetection()

// output
{
  info: {
    name: 'Chrome',
    version: '94',
    os: 'Mac OS X
  }
}
```

```javascript
<script id="drowserDetection" data-check="auto" src="https://cdn.jsdelivr.net/npm/@cxy227/browser-detection@0.1.1/dist/index.js"></script>
```

## 🧰 开发测试
● npm run dev

## 📄 证书（License）
[MIT License](./LICENSE)

Copyright (c) beth

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@cxy227/browser-detection
[npm-version-href]: https://npmjs.com/package/@cxy227/browser-detection
[npm-downloads-src]: https://img.shields.io/npm/dw/@cxy227/browser-detection
[npm-downloads-href]: https://npmjs.com/package/@cxy227/browser-detection
[license-src]: https://img.cxy227.io/npm/l/@cxy227/browser-detection.svg
[license-href]: https://img.shields.io/badge/license-MIT-green
[jsdelivr-downloads-href]: https://img.shields.io/jsdelivr/gh/hy/cxy227/browser-detection
[twitter-href]: https://img.shields.io/twitter/url?label=qiuge227&style=social&url=https%3A%2F%2Ftwitter.com%2Fqiuge227
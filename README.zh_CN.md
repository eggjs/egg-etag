# egg-etag

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-etag.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-etag
[travis-image]: https://img.shields.io/travis/eggjs/egg-etag.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-etag
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-etag.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-etag?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-etag.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-etag
[snyk-image]: https://snyk.io/test/npm/egg-etag/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-etag
[download-image]: https://img.shields.io/npm/dm/egg-etag.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-etag

基于 [koa-etag](https://github.com/koajs/etag) 和 [koa-conditional-get](https://github.com/koajs/conditional-get) 的 egg 插件封装。

开启以后，插件将基于 Response Body 计算 ETag 值，并 Response Header 增加 `ETag`，同时如果 Request Header 里面有 `If-None-Match`，并请匹配目前的计算出的 ETag，将返回 status 304。

此功能在一些内容变化不多的场景，能有效避免网络下载。

**通常来说，基于性能方面的考虑，在生产环境我们会使用 [Nginx ETag](http://nginx.org/en/docs/http/ngx_http_core_module.html#etag) 来替代该插件。**

## 安装依赖

```bash
$ npm i egg-etag --save
```

## 开启插件

```js
// {app_root}/config/plugin.js
exports.etag = {
  package: 'egg-etag',
};
```

## 配置

参见 [etag](https://github.com/jshttp/etag#options) 的配置

```js
// {app_root}/config/config.default.js
exports.etag = {
  weak: false,
};
```

## 反馈

使用上遇到问题, 或者你有更好的建议, 欢迎到提到 [egg issue](https://github.com/eggjs/egg/issues).

## 开源协议

[MIT](LICENSE)

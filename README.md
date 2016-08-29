# ETag plugin for Egg

为 Egg 应用开启 ETag。

## 功能

基于 [koa-etag](https://github.com/koajs/etag) 和 [koa-conditional-get](https://github.com/koajs/conditional-get) 的封装，为 Egg 应用开启 ETag 功能。

开启以后，插件将基于 Response Body 计算 ETag 值，并 Response Header 增加 `ETag`，同时如果 Request Header 里面有 `If-None-Match`，并请匹配目前的计算出的 ETag，将返回 status 304。

此功能在一些内容变化不多的场景，能有效避免网络下载。

## 配置

```js
exports.i18n = {
  enable: true,
  package: 'egg-etag',
};
```



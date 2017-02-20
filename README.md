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

Wrap [koa-etag](https://github.com/koajs/etag) and [koa-conditional-get](https://github.com/koajs/conditional-get) for egg

**For better performance, we recommend to use [Nginx ETag](http://nginx.org/en/docs/http/ngx_http_core_module.html#etag) rather than use this plugin.**

## Install

```bash
$ npm i egg-etag --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.etag = {
  package: 'egg-etag',
};
```

## Configuration

Support all configurations in [etag](https://github.com/jshttp/etag#options).

```js
// {app_root}/config/config.default.js
exports.etag = {
  weak: false,
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

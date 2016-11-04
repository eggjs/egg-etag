'use strict';

const etag = require('koa-etag');

module.exports = options => {
  return etag(options);
};

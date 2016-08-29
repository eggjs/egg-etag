'use strict';

const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

module.exports = function(app) {
  app.use(conditional());
  app.use(etag());
};
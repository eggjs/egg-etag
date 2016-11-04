'use strict';

module.exports = app => {
  app.config.coreMiddleware.push('conditional');
  app.config.coreMiddleware.push('etag');
};

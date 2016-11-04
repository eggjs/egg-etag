'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const path = require('path');

describe('test/etag.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/etag',
      customEgg: path.join(__dirname, '../node_modules/egg'),
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET / with etag', () => {
    return request(app.callback())
    .get('/')
    .expect('hi, egg')
    .expect('ETag', '"7-CpbO4o2YQ+a1l3uAqpqk4w"')
    .expect(200);
  });

  it('should response 304 ', () => {
    return request(app.callback())
    .get('/')
    .set('If-None-Match', '"7-CpbO4o2YQ+a1l3uAqpqk4w"')
    .expect(304);
  });

});

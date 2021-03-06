'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/etag.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/etag',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET / with etag', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, egg')
      .expect('ETag', '"7-F2kXUudLW/RKSGyNB58I1KPnwuI"')
      .expect(200);
  });

  it('should response 304 ', () => {
    return request(app.callback())
      .get('/')
      .set('If-None-Match', '"7-F2kXUudLW/RKSGyNB58I1KPnwuI"')
      .expect(304);
  });
});

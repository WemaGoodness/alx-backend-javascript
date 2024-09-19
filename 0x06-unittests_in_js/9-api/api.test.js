const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
  it('should return 200 and payment methods for a valid cart id', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .expect('Payment methods for cart 12', done);
  });

  it('should return 404 for an invalid cart id', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});

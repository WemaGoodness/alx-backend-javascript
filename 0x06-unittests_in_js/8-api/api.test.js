const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  after(() => {
    server.close();
  });

  it('should return 200 and correct message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

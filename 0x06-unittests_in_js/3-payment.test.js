const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
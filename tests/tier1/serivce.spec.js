const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { stub, spy, useFakeTimers } = require('sinon');
const { describe, it, after, afterEach, before, beforeEach } = exports.lab = Lab.script();

const {Service} = require('../../lib/service/Service');

describe('Logger Service', () => {
  describe('when initialized', ()=>{
    it('should return instance of service', ()=>{
      const sut = new Service({driver:{}});
      expect(sut).be.instanceOf(Service);
    });
  });

  describe('when info method called', () => {
    let clock;
    const timestamp = new Date().now;
    function createDriver() {
      return {log:spy()}
    };

    beforeEach(() => {
      clock = useFakeTimers({ now: timestamp });
    });

    it('should return emit log entry', () => {
      const mockDriver = createDriver();
      const sut = new Service({driver:mockDriver});
      sut.info({message:'hello world', correlationId:'1fs3-se4f-5ety-5y43'});
      expect(sut).be.instanceOf(Service);
      expect(mockDriver.log.args[0]).to.be.equal([
        {
          correlationId: '1fs3-se4f-5ety-5y43',
          severity: 'info',
          level: 'info',
          message: 'hello world'
        }
      ])
    });

    after(()=>{
      clock.restore();
    });

  });

});

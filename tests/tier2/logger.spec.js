const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { spy } = require('sinon');
const { describe, it } = exports.lab = Lab.script();

const TransportStream = require('winston-transport');
const config = require('./config');
const { createLoggerService } = require('../../lib');

class MockTransport extends TransportStream {

  constructor({spy}) {
    super();
    this._spy=spy;
  }

  write(info) {
    this._spy(info[Symbol.for("message")]);
  }

  log() {} // needed for winston
}

const createSut = (_config) => {
  const writespy = spy();
  const stream = new MockTransport({spy:writespy});
  const transports = [stream];
  const sut = createLoggerService({loggerConfig:{ ..._config.loggerConfig, transports}});

  return {sut,spies:{ write: writespy}};
};

describe('Logger Service', () => {
  it('should create and emit message', () => {
    const {sut, spies} = createSut(config);

    sut.info({message:"hello", correlationId: "123234"});
    expect(spies.write.args[0][0]).to.be.equal(
      '{"level":"info","message":"hello","correlationId":"123234"}'
    );
  });
});

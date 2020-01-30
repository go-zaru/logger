const {createLoggerService} = require('../../lib');
const { createLogger, format, transports } = require('winston');
const { APPLICATION_LOG_LEVEL } = process.env;
const { combine, timestamp, label, prettyPrint, json } = format;

const config = {
  loggerConfig: {
    level: APPLICATION_LOG_LEVEL,
    format: combine(timestamp(), json()),
    defaultMeta: {
      appName: "Test AppName",
      appVersion: "1.3.0"
    }
  }
};

const logger = createLoggerService(config);

logger.info({
  message:"info test message",
  correlationId: "123435",
  data: { hello:"world" }
});

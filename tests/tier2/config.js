require('dotenv').config();

const {
  APPLICATION_LOG_LEVEL='info'
} = process.env;

module.exports = {
  loggerConfig: {
    APPLICATION_LOG_LEVEL
  }
};

import { LoggerLogLevels } from "../types";

const logLevels = {
  [LoggerLogLevels.fatal]:10,
  [LoggerLogLevels.error]:20,
  [LoggerLogLevels.warn]: 30,
  [LoggerLogLevels.info]: 40,
  [LoggerLogLevels.debug]:50,
  [LoggerLogLevels.trace]:60,
};

export {logLevels}

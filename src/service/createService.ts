import { Service } from "./Service";
import { ServiceConfig, LoggerService } from "../types";
import { createLogger, transports as streams } from 'winston';
import { logLevels } from "./levels";


export const createService = (config: ServiceConfig): LoggerService => {
  const { loggerConfig } = config;
  const { "transports": transportsConfig } = loggerConfig;
  const transports = (transportsConfig) ? transportsConfig : [ new streams.Console() ];
  const driver = createLogger({...loggerConfig, transports, levels:logLevels });

  return new Service({driver});
};

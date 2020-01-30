import {
  LoggerService,
  LogPayload,
  ServiceDependencies,
  LogDriver,
  ErrorLogEntry,
  LogEntry
} from "../types";

export class Service implements LoggerService {
  private _driver: LogDriver;

  constructor({ driver }: ServiceDependencies) {
    this._driver = driver;
  }

  fatal(entry: ErrorLogEntry): void {
    this.log({level:this.fatal.name, ...entry});
  }

  error(entry: ErrorLogEntry): void {
    this.log({level:this.error.name, ...entry});
  }

  warn(entry: LogEntry): void {
    this.log({level:this.warn.name, ...entry});
  }

  info(entry: LogEntry): void {
    this.log({level:this.info.name, ...entry});
  }

  debug(entry: LogEntry): void {
    this.log({level:this.debug.name, ...entry});
  }

  trace(entry: LogEntry): void {
    this.log({level:this.trace.name, ...entry});
  }

  private log({level, message, correlationId, ...meta}: LogPayload): void {
    this._driver.log({level, severity:level, message, correlationId, ...meta});
  }
}

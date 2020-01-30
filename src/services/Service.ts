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
    this.log({level:'fatal', ...entry});
  }

  error(entry: ErrorLogEntry): void {
    this.log({level:'error', ...entry});
  }

  warn(entry: LogEntry): void {
    this.log({level:'warn', ...entry});
  }

  info(entry: LogEntry): void {
    this.log({level:'info', ...entry});
  }

  debug(entry: LogEntry): void {
    this.log({level:'debug', ...entry});
  }

  trace(entry: LogEntry): void {
    this.log({level:'trace', ...entry});
  }

  private log({level, message, correlationId, ...meta}: LogPayload): void {
    this._driver.log({level, message, correlationId, ...meta});
  }
}

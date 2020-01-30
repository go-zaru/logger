import TransportStream from "winston-transport";
import logform from "logform";
import {Transform} from "stream";

export type AnyData = string | boolean | number | object;
export type AnyValue = AnyData | undefined;

export interface OptionalData {
  [key:string]: AnyValue | AnyValue[];
}

export type LoggerLogLevel = 'trace'|'debug'|'info'|'warn'|'error'|'fatal';

export enum LoggerLogLevels {
  fatal = 'fatal',
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
  trace = 'trace'
}

export interface LoggerMetaProperties extends OptionalData {
  appName: string;
  appVersion: string;
}

export interface RequiredLoggerConfig {
  defaultMeta: LoggerMetaProperties;
  level: LoggerLogLevel;
}

export interface OptionalFormatConfig {
  format?: logform.Format
}

export interface OptionalTransportsConfig {
  transports?: TransportStream[];
}

export interface LoggerConfig
  extends RequiredLoggerConfig, OptionalFormatConfig, OptionalTransportsConfig, OptionalData {}

export interface ServiceConfig extends OptionalData {
  loggerConfig: LoggerConfig;
}

export interface LogEntry {
  message: string;
  correlationId: string;
  data?: OptionalData;
}

export interface ErrorLogEntry extends LogEntry {
  err:Error
}

export interface LogPayload extends LogEntry, OptionalData {
  level:string;
}

export interface LogDriver {
  log(log: LogPayload):Transform;
};

export interface ServiceDependencies {
  driver: LogDriver;
}

export interface LoggerService {
  fatal(entry: ErrorLogEntry):void;
  error(entry: ErrorLogEntry):void;
  warn(entry: LogEntry) :void;
  info(entry: LogEntry) :void;
  debug(entry: LogEntry):void;
  trace(entry: LogEntry):void;
}



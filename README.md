# go-zaru/logger

> $ npm i @go-zaru/logger

A simple wrapper interface over winston logger.

Intent is to clone and add custom logic for logging in a central location.

Since use-cases for application logs will vary, it assumed a specification will define common properties.

log model example
```
{
  timestamp // UTC ISO8061
  message // human readable
  severity // log level or another indicator
  level // the log method/level used
  correlationId
  appName // name of application the logger is a part of
  appVersion // the application verison
  name // name of the logger logging

  api?: {
      request?: {},
      response?: {}
   } //
  query: {
      request:{}
      response:{}
  }
}

```

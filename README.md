# go-zaru/logger

> $ npm i go-zaru/logger

A simple wrapper interface over winston logger.

Intent is to clone and add custom logic for logging in a central location.

Since use-cases for application logs will vary, it assumed a specification will define common properties.

for example
```
{
  timestamp
  message
}

```

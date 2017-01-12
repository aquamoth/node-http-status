# http-status-codes

This is a fork to rewrite the status codes in **TypeScript**.

Constants enumerating the HTTP status codes. 
Based on the [Java Apache HttpStatus API](http://hc.apache.org/httpclient-3.x/apidocs/org/apache/commons/httpclient/HttpStatus.html).
All status codes defined in RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV) and RFC6585 (Additional HTTP Status Codes) are supported.

The TypeScript file creates the module `HttpStatus` that exports the various status codes as constants, 
and a function `getStatusText()` that returns the english plaintext for the requested status code.

The ambition was to make it easy to require the status codes using RequireJS. 
Check out [RequireJS.Net](https://github.com/vtfuture/RequireJSDotNet) for reference of how to use RequireJS + TypeScript in Mvc.Net.

## Installation

The TypeScript version named `http-status-codes.ts`, while the original file `index.js` is left unaltered.

For now there isn't a Nuget package to install from. Instead just copy `http-status-codes.ts` to your local /Scripts path 
or wherever is convenient for you to require it from.


## Usage

```typescript
import "http-status-codes";

console.log('Status code', HttpStatus.OK, ' == ', HttpStatus.getStatusText(HttpStatus.OK));
console.log('Status code', HttpStatus.INTERNAL_SERVER_ERROR, ' == ', HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR));
```

## Codes

Constant                            | Code  | Message
------------------------------------|-------|-----------------------------------
ACCEPTED                            | 202   | Accepted
BAD_GATEWAY                         | 502   | Bad Gateway
BAD_REQUEST                         | 400   | Bad Request
CONFLICT                            | 409   | Conflict
CONTINUE                            | 100   | Continue
CREATED                             | 201   | Created
EXPECTATION_FAILED                  | 417   | Expectation Failed
FAILED_DEPENDENCY                   | 424   | Failed Dependency
FORBIDDEN                           | 403   | Forbidden
GATEWAY_TIMEOUT                     | 504   | Gateway Timeout
GONE                                | 410   | Gone
HTTP_VERSION_NOT_SUPPORTED          | 505   | HTTP Version Not Supported
INSUFFICIENT_SPACE_ON_RESOURCE      | 419   | Insufficient Space on Resource
INSUFFICIENT_STORAGE                | 507   | Insufficient Storage
INTERNAL_SERVER_ERROR               | 500   | Server Error
LENGTH_REQUIRED                     | 411   | Length Required
LOCKED                              | 423   | Locked
METHOD_FAILURE                      | 420   | Method Failure
METHOD_NOT_ALLOWED                  | 405   | Method Not Allowed
MOVED_PERMANENTLY                   | 301   | Moved Permanently
MOVED_TEMPORARILY                   | 302   | Moved Temporarily
MULTI_STATUS                        | 207   | Multi-Status
MULTIPLE_CHOICES                    | 300   | Multiple Choices
NETWORK_AUTHENTICATION_REQUIRED     | 511   | Network Authentication Required
NO_CONTENT                          | 204   | No Content
NON_AUTHORITATIVE_INFORMATION       | 203   | Non Authoritative Information
NOT_ACCEPTABLE                      | 406   | Not Acceptable
NOT_FOUND                           | 404   | Not Found
NOT_IMPLEMENTED                     | 501   | Not Implemented
NOT_MODIFIED                        | 304   | Not Modified
OK                                  | 200   | OK
PARTIAL_CONTENT                     | 206   | Partial Content
PAYMENT_REQUIRED                    | 402   | Payment Required
PRECONDITION_FAILED                 | 412   | Precondition Failed
PRECONDITION_REQUIRED               | 428   | Precondition Required
PROCESSING                          | 102   | Processing
PROXY_AUTHENTICATION_REQUIRED       | 407   | Proxy Authentication Required
REQUEST_HEADER_FIELDS_TOO_LARGE     | 431   | Request Header Fields Too Large
REQUEST_TIMEOUT                     | 408   | Request Timeout
REQUEST_TOO_LONG                    | 413   | Request Entity Too Large
REQUEST_URI_TOO_LONG                | 414   | Request-URI Too Long
REQUESTED_RANGE_NOT_SATISFIABLE     | 416   | Requested Range Not Satisfiable
RESET_CONTENT                       | 205   | Reset Content
SEE_OTHER                           | 303   | See Other
SERVICE_UNAVAILABLE                 | 503   | Service Unavailable
SWITCHING_PROTOCOLS                 | 101   | Switching Protocols
TEMPORARY_REDIRECT                  | 307   | Temporary Redirect
TOO_MANY_REQUESTS                   | 429   | Too Many Requests
UNAUTHORIZED                        | 401   | Unauthorized
UNPROCESSABLE_ENTITY                | 422   | Unprocessable Entity
UNSUPPORTED_MEDIA_TYPE              | 415   | Unsupported Media Type
USE_PROXY                           | 305   | Use Proxy

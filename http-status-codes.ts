/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * and RFC2518 (WebDAV) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 * Rewritten as TypeScript by Mattias Åslund, 2017-01-12
 *
 * Available at: https://github.com/aquamoth/node-http-status
 * Forked from: https://github.com/prettymuchbryce/node-http-status
 */


let HttpStatus = {
    ACCEPTED: 202,
    BAD_GATEWAY: 502,
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CONTINUE: 100,
    CREATED: 201,
    EXPECTATION_FAILED: 417,
    FAILED_DEPENDENCY: 424,
    FORBIDDEN: 403,
    GATEWAY_TIMEOUT: 504,
    GONE: 410,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    INSUFFICIENT_SPACE_ON_RESOURCE: 419,
    INSUFFICIENT_STORAGE: 507,
    INTERNAL_SERVER_ERROR: 500,
    LENGTH_REQUIRED: 411,
    LOCKED: 423,
    METHOD_FAILURE: 420,
    METHOD_NOT_ALLOWED: 405,
    MOVED_PERMANENTLY: 301,
    MOVED_TEMPORARILY: 302,
    MULTI_STATUS: 207,
    MULTIPLE_CHOICES: 300,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    NO_CONTENT: 204,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NOT_ACCEPTABLE: 406,
    NOT_FOUND: 404,
    NOT_IMPLEMENTED: 501,
    NOT_MODIFIED: 304,
    OK: 200,
    PARTIAL_CONTENT: 206,
    PAYMENT_REQUIRED: 402,
    PRECONDITION_FAILED: 412,
    PRECONDITION_REQUIRED: 428,
    PROCESSING: 102,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    REQUEST_TIMEOUT: 408,
    REQUEST_TOO_LONG: 413,
    REQUEST_URI_TOO_LONG: 414,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    RESET_CONTENT: 205,
    SEE_OTHER: 303,
    SERVICE_UNAVAILABLE: 503,
    SWITCHING_PROTOCOLS: 101,
    TEMPORARY_REDIRECT: 307,
    TOO_MANY_REQUESTS: 429,
    UNAUTHORIZED: 401,
    UNPROCESSABLE_ENTITY: 422,
    UNSUPPORTED_MEDIA_TYPE: 415,
    USE_PROXY: 305,


    getStatusText: function (statusCode: number) {
        if (this.hasOwnProperty(statusCode)) {
            return this[statusCode];
        } else {
            throw new Error("Status code does not exist: " + statusCode);
        }
    }
};

HttpStatus[HttpStatus.ACCEPTED] = "Accepted";
HttpStatus[HttpStatus.BAD_GATEWAY] = "Bad Gateway";
HttpStatus[HttpStatus.BAD_REQUEST] = "Bad Request";
HttpStatus[HttpStatus.CONFLICT] = "Conflict";
HttpStatus[HttpStatus.CONTINUE] = "Continue";
HttpStatus[HttpStatus.CREATED] = "Created";
HttpStatus[HttpStatus.EXPECTATION_FAILED] = "Expectation Failed";
HttpStatus[HttpStatus.FAILED_DEPENDENCY] = "Failed Dependency";
HttpStatus[HttpStatus.FORBIDDEN] = "Forbidden";
HttpStatus[HttpStatus.GATEWAY_TIMEOUT] = "Gateway Timeout";
HttpStatus[HttpStatus.GONE] = "Gone";
HttpStatus[HttpStatus.HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
HttpStatus[HttpStatus.INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
HttpStatus[HttpStatus.INSUFFICIENT_STORAGE] = "Insufficient Storage";
HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR] = "Server Error";
HttpStatus[HttpStatus.LENGTH_REQUIRED] = "Length Required";
HttpStatus[HttpStatus.LOCKED] = "Locked";
HttpStatus[HttpStatus.METHOD_FAILURE] = "Method Failure";
HttpStatus[HttpStatus.METHOD_NOT_ALLOWED] = "Method Not Allowed";
HttpStatus[HttpStatus.MOVED_PERMANENTLY] = "Moved Permanently";
HttpStatus[HttpStatus.MOVED_TEMPORARILY] = "Moved Temporarily";
HttpStatus[HttpStatus.MULTI_STATUS] = "Multi-Status";
HttpStatus[HttpStatus.MULTIPLE_CHOICES] = "Multiple Choices";
HttpStatus[HttpStatus.NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required";
HttpStatus[HttpStatus.NO_CONTENT] = "No Content";
HttpStatus[HttpStatus.NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
HttpStatus[HttpStatus.NOT_ACCEPTABLE] = "Not Acceptable";
HttpStatus[HttpStatus.NOT_FOUND] = "Not Found";
HttpStatus[HttpStatus.NOT_IMPLEMENTED] = "Not Implemented";
HttpStatus[HttpStatus.NOT_MODIFIED] = "Not Modified";
HttpStatus[HttpStatus.OK] = "OK";
HttpStatus[HttpStatus.PARTIAL_CONTENT] = "Partial Content";
HttpStatus[HttpStatus.PAYMENT_REQUIRED] = "Payment Required";
HttpStatus[HttpStatus.PRECONDITION_FAILED] = "Precondition Failed";
HttpStatus[HttpStatus.PRECONDITION_REQUIRED] = "Precondition Required";
HttpStatus[HttpStatus.PROCESSING] = "Processing";
HttpStatus[HttpStatus.PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
HttpStatus[HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large";
HttpStatus[HttpStatus.REQUEST_TIMEOUT] = "Request Timeout";
HttpStatus[HttpStatus.REQUEST_TOO_LONG] = "Request Entity Too Large";
HttpStatus[HttpStatus.REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
HttpStatus[HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
HttpStatus[HttpStatus.RESET_CONTENT] = "Reset Content";
HttpStatus[HttpStatus.SEE_OTHER] = "See Other";
HttpStatus[HttpStatus.SERVICE_UNAVAILABLE] = "Service Unavailable";
HttpStatus[HttpStatus.SWITCHING_PROTOCOLS] = "Switching Protocols";
HttpStatus[HttpStatus.TEMPORARY_REDIRECT] = "Temporary Redirect";
HttpStatus[HttpStatus.TOO_MANY_REQUESTS] = "Too Many Requests";
HttpStatus[HttpStatus.UNAUTHORIZED] = "Unauthorized";
HttpStatus[HttpStatus.UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
HttpStatus[HttpStatus.UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
HttpStatus[HttpStatus.USE_PROXY] = "Use Proxy";

export = HttpStatus;

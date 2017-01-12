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

module HttpStatus {
    let statusCodes = [];

    export const ACCEPTED = 202; statusCodes[ACCEPTED] = "Accepted";
    export const BAD_GATEWAY = 502; statusCodes[BAD_GATEWAY] = "Bad Gateway";
    export const BAD_REQUEST = 400; statusCodes[BAD_REQUEST] = "Bad Request";
    export const CONFLICT = 409; statusCodes[CONFLICT] = "Conflict";
    export const CONTINUE = 100; statusCodes[CONTINUE] = "Continue";
    export const CREATED = 201; statusCodes[CREATED] = "Created";
    export const EXPECTATION_FAILED = 417; statusCodes[EXPECTATION_FAILED] = "Expectation Failed";
    export const FAILED_DEPENDENCY = 424; statusCodes[FAILED_DEPENDENCY] = "Failed Dependency";
    export const FORBIDDEN = 403; statusCodes[FORBIDDEN] = "Forbidden";
    export const GATEWAY_TIMEOUT = 504; statusCodes[GATEWAY_TIMEOUT] = "Gateway Timeout";
    export const GONE = 410; statusCodes[GONE] = "Gone";
    export const HTTP_VERSION_NOT_SUPPORTED = 505; statusCodes[HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
    export const INSUFFICIENT_SPACE_ON_RESOURCE = 419; statusCodes[INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
    export const INSUFFICIENT_STORAGE = 507; statusCodes[INSUFFICIENT_STORAGE] = "Insufficient Storage";
    export const INTERNAL_SERVER_ERROR = 500; statusCodes[INTERNAL_SERVER_ERROR] = "Server Error";
    export const LENGTH_REQUIRED = 411; statusCodes[LENGTH_REQUIRED] = "Length Required";
    export const LOCKED = 423; statusCodes[LOCKED] = "Locked";
    export const METHOD_FAILURE = 420; statusCodes[METHOD_FAILURE] = "Method Failure";
    export const METHOD_NOT_ALLOWED = 405; statusCodes[METHOD_NOT_ALLOWED] = "Method Not Allowed";
    export const MOVED_PERMANENTLY = 301; statusCodes[MOVED_PERMANENTLY] = "Moved Permanently";
    export const MOVED_TEMPORARILY = 302; statusCodes[MOVED_TEMPORARILY] = "Moved Temporarily";
    export const MULTI_STATUS = 207; statusCodes[MULTI_STATUS] = "Multi-Status";
    export const MULTIPLE_CHOICES = 300; statusCodes[MULTIPLE_CHOICES] = "Multiple Choices";
    export const NETWORK_AUTHENTICATION_REQUIRED = 511; statusCodes[NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required";
    export const NO_CONTENT = 204; statusCodes[NO_CONTENT] = "No Content";
    export const NON_AUTHORITATIVE_INFORMATION = 203; statusCodes[NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
    export const NOT_ACCEPTABLE = 406; statusCodes[NOT_ACCEPTABLE] = "Not Acceptable";
    export const NOT_FOUND = 404; statusCodes[NOT_FOUND] = "Not Found";
    export const NOT_IMPLEMENTED = 501; statusCodes[NOT_IMPLEMENTED] = "Not Implemented";
    export const NOT_MODIFIED = 304; statusCodes[NOT_MODIFIED] = "Not Modified";
    export const OK = 200; statusCodes[OK] = "OK";
    export const PARTIAL_CONTENT = 206; statusCodes[PARTIAL_CONTENT] = "Partial Content";
    export const PAYMENT_REQUIRED = 402; statusCodes[PAYMENT_REQUIRED] = "Payment Required";
    export const PRECONDITION_FAILED = 412; statusCodes[PRECONDITION_FAILED] = "Precondition Failed";
    export const PRECONDITION_REQUIRED = 428; statusCodes[PRECONDITION_REQUIRED] = "Precondition Required";
    export const PROCESSING = 102; statusCodes[PROCESSING] = "Processing";
    export const PROXY_AUTHENTICATION_REQUIRED = 407; statusCodes[PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
    export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431; statusCodes[REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large";
    export const REQUEST_TIMEOUT = 408; statusCodes[REQUEST_TIMEOUT] = "Request Timeout";
    export const REQUEST_TOO_LONG = 413; statusCodes[REQUEST_TOO_LONG] = "Request Entity Too Large";
    export const REQUEST_URI_TOO_LONG = 414; statusCodes[REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
    export const REQUESTED_RANGE_NOT_SATISFIABLE = 416; statusCodes[REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
    export const RESET_CONTENT = 205; statusCodes[RESET_CONTENT] = "Reset Content";
    export const SEE_OTHER = 303; statusCodes[SEE_OTHER] = "See Other";
    export const SERVICE_UNAVAILABLE = 503; statusCodes[SERVICE_UNAVAILABLE] = "Service Unavailable";
    export const SWITCHING_PROTOCOLS = 101; statusCodes[SWITCHING_PROTOCOLS] = "Switching Protocols";
    export const TEMPORARY_REDIRECT = 307; statusCodes[TEMPORARY_REDIRECT] = "Temporary Redirect";
    export const TOO_MANY_REQUESTS = 429; statusCodes[TOO_MANY_REQUESTS] = "Too Many Requests";
    export const UNAUTHORIZED = 401; statusCodes[UNAUTHORIZED] = "Unauthorized";
    export const UNPROCESSABLE_ENTITY = 422; statusCodes[UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
    export const UNSUPPORTED_MEDIA_TYPE = 415; statusCodes[UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
    export const USE_PROXY = 305; statusCodes[USE_PROXY] = "Use Proxy";

    export function getStatusText(statusCode) {
        if (statusCodes.hasOwnProperty(statusCode)) {
            return statusCodes[statusCode];
        } else {
            throw new Error("Status code does not exist: " + statusCode);
        }
    }
}

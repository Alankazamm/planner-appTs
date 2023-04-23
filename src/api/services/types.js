//Errors
export var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NETWORK_ERROR"] = "Network Error";
    ErrorMessages["ACCESS_DENIED"] = "Access Denied";
    ErrorMessages["ACCESS_DENIEDII"] = "Request failed with status code 403";
    ErrorMessages["INTERNAL_SERVER_ERROR"] = "Request failed with status code 500";
    ErrorMessages["UNAUTHORIZED"] = "Request failed with status code 401";
    ErrorMessages["BAD_REQUEST"] = "Request failed with status code 400";
    ErrorMessages["NOT_FOUND"] = "Request failed with status code 404";
    ErrorMessages["NOT_FOUND_WEEK"] = "Request failed with status code 404 in week request";
    ErrorMessages["TOKEN_EXPIRED"] = "The incoming token has expired";
})(ErrorMessages || (ErrorMessages = {}));
//# sourceMappingURL=types.js.map
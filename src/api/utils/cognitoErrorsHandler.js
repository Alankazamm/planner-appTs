"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHandler = exports.CognitoErrorCodes = void 0;
var CognitoErrorCodes;
(function (CognitoErrorCodes) {
    CognitoErrorCodes["UserNotFound"] = "Username/client id combination not found.";
    CognitoErrorCodes["UserCannotBeEmpty"] = "Username cannot be empty";
    CognitoErrorCodes["Unregistered"] = "Cannot reset password for the user as there is no registered/verified email or phone_number";
    CognitoErrorCodes["CodeCannotBeEmpty"] = "Confirmation code cannot be empty";
    CognitoErrorCodes["CodeInvalid"] = "Invalid verification code provided, please try again.";
    CognitoErrorCodes["PasswordCannotBeEmpty"] = "Password cannot be empty";
    CognitoErrorCodes["PasswordInvalid"] = "Password did not conform with policy: Password not long enough";
})(CognitoErrorCodes = exports.CognitoErrorCodes || (exports.CognitoErrorCodes = {}));
const messageHandler = (error) => {
    if (error.message) {
        switch (error.message) {
            case CognitoErrorCodes.UserNotFound:
                return "User not found";
            case CognitoErrorCodes.UserCannotBeEmpty:
                return "User cannot be empty";
            case CognitoErrorCodes.CodeCannotBeEmpty:
                return "Code cannot be empty";
            case CognitoErrorCodes.CodeInvalid:
                return "Code invalid";
            case CognitoErrorCodes.PasswordCannotBeEmpty:
                return "Password cannot be empty";
            case CognitoErrorCodes.PasswordInvalid:
                return "Password invalid";
            case CognitoErrorCodes.Unregistered:
                return "Unregistered or not verificated user, please register or verify the account first";
            default:
                return error.message;
        }
    }
    return "Unknown error, please try again";
};
exports.messageHandler = messageHandler;
//# sourceMappingURL=cognitoErrorsHandler.js.map
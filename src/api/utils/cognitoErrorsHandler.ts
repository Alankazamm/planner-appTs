export const enum CognitoErrorCodes {
    UserNotFound = "Username/client id combination not found.",
    UserCannotBeEmpty = "Username cannot be empty",
    Unregistered = "Cannot reset password for the user as there is no registered/verified email or phone_number",
    CodeCannotBeEmpty = "Confirmation code cannot be empty",
    CodeInvalid = "Invalid verification code provided, please try again.",
    PasswordCannotBeEmpty = "Password cannot be empty",
    PasswordInvalid = "Password did not conform with policy: Password not long enough",
    
}

export const messageHandler = (error: any) => {
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
    
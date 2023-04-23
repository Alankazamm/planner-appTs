export const errorsHandler = (err) => {
    const treathedError = err.toString();
    if (treathedError.includes("Password attempts exceeded")) {
        return "Password attempts exceeded";
    }
    if (treathedError.includes("Incorrect username or password.")) {
        return "Incorrect username or password.";
    }
    if (treathedError.includes("User does not exist")) {
        return "User does not exist";
    }
    if (treathedError.includes("Username cannot be empty")) {
        return "Username cannot be empty";
    }
    if (treathedError.includes("Custom auth lambda trigger is not configured for the user pool.")) {
        return "Password cannot be empty";
    }
    if (treathedError.includes("User is not confirmed")) {
        return "User is not confirmed";
    }
    if (treathedError.includes("UsernameExistsException: An account with the given email already exists.")) {
        return "An account with the given email already exists.";
    }
    return "Unknown error";
};
//# sourceMappingURL=errorsHandler.js.map
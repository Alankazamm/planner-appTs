export var signupErrors;
(function (signupErrors) {
    //sign-up && sign-in
    signupErrors["unknownError"] = "Unknown error";
    signupErrors["passwordEmpty"] = "Password is required";
    signupErrors["emailEmpty"] = "Email is required";
    signupErrors["emailInvalid"] = "Email is not valid";
    //sign-up
    signupErrors["emailExists"] = "UsernameExistsException: An account with the given email already exists.";
    signupErrors["firstNameEmpty"] = "First name is required";
    signupErrors["firstNameLength"] = "First name must be at least 2 characters";
    signupErrors["lastNameEmpty"] = "Last name is required";
    signupErrors["lastNameLength"] = "Last name must be at least 1 characters";
    signupErrors["birthDateEmpty"] = "Birth date is required";
    signupErrors["cityEmpty"] = "City is required";
    signupErrors["countryEmpty"] = "Country is required";
    signupErrors["passwordLength"] = "Password must be at least 8 characters";
    signupErrors["confirmPasswordEmpty"] = "Confirm password is required";
    signupErrors["confirmNotMatch"] = "Passwords do not match";
    //sign-in
    signupErrors["emailNotExists"] = "This user doesn't exist. Please sign up first!";
    signupErrors["incorrectPassword"] = "Invalid data.";
})(signupErrors || (signupErrors = {}));
export var ActionType;
(function (ActionType) {
    ActionType["UPDATE_FORM"] = "UPDATE_FORM";
    ActionType["VALIDATE_FORM"] = "VALIDATE_FORM";
    ActionType["LOG_USER"] = "LOG_USER";
    ActionType["RESET_FORMSTATE"] = "RESET_FORMSTATE";
    ActionType["REGISTER_LOADING"] = "REGISTER_LOADING";
    ActionType["REGISTER_SUCCESS"] = "REGISTER_SUCCESS";
    ActionType["REGISTER_FAIL"] = "REGISTER_FAIL";
    ActionType["LOGIN_LOADING"] = "LOGIN_LOADING";
    ActionType["LOGIN_SUCCESS"] = "LOGIN_SUCCESS";
    ActionType["LOGIN_FAIL"] = "LOGIN_FAIL";
    ActionType["VALIDATE_LOGIN"] = "VALIDATE_LOGIN";
})(ActionType || (ActionType = {}));
;
//reducer
export const formsReducer = (state, action) => {
    switch (action.type) {
        // this case updates the value of the input based on the name of the input
        case ActionType.UPDATE_FORM:
            const name = action.payload.name;
            const value = action.payload.value;
            // this validation checks if the name of the input is confirmPassword and if it is, it checks if the value of the input is equal to the value of the password input
            if (name === 'confirmPassword') {
                if (value !== state.password.value) {
                    return {
                        ...state,
                        [name]: { ...state[name], value, hasError: true, error: "Passwords do not match" },
                    };
                }
            }
            return {
                ...state,
                [name]: { ...state[name], value, hasError: false, error: undefined },
            };
        // this validation treats the errors and for each enum value, it checks if the error
        // is present in the array of errors then sets the hasError proprerty of each input to true
        case ActionType.VALIDATE_FORM:
            const errors = state.auth.errors;
            if (errors) {
                errors.forEach((error) => {
                    switch (error) {
                        case signupErrors.unknownError:
                            state.unknownError = true;
                            break;
                        case signupErrors.emailExists:
                            state.email.hasError = true;
                            state.email.error = error;
                            break;
                        case signupErrors.firstNameEmpty:
                            state.firstName.hasError = true;
                            state.firstName.error = error;
                            break;
                        case signupErrors.firstNameLength:
                            state.firstName.hasError = true;
                            state.firstName.error = error;
                            break;
                        case signupErrors.lastNameEmpty:
                            state.lastName.hasError = true;
                            state.lastName.error = error;
                            break;
                        case signupErrors.lastNameLength:
                            state.lastName.hasError = true;
                            state.lastName.error = error;
                            break;
                        case signupErrors.birthDateEmpty:
                            state.birthDate.hasError = true;
                            state.birthDate.error = error;
                            break;
                        case signupErrors.cityEmpty:
                            state.city.hasError = true;
                            state.city.error = error;
                            break;
                        case signupErrors.countryEmpty:
                            state.country.hasError = true;
                            state.country.error = error;
                            break;
                        case signupErrors.emailEmpty:
                            state.email.hasError = true;
                            state.email.error = error;
                            break;
                        case signupErrors.emailInvalid:
                            state.email.hasError = true;
                            state.email.error = error;
                            break;
                        case signupErrors.passwordEmpty:
                            state.password.hasError = true;
                            state.password.error = error;
                            state.confirmPassword.hasError = true;
                            state.confirmPassword.error = error;
                            break;
                        case signupErrors.passwordLength:
                            state.password.hasError = true;
                            state.confirmPassword.hasError = true;
                            state.password.error = error;
                            state.confirmPassword.error = error;
                            break;
                        case signupErrors.confirmNotMatch:
                            state.password.hasError = true;
                            state.confirmPassword.hasError = true;
                            state.password.error = "Passwords do not match";
                            state.confirmPassword.hasError = true;
                            state.confirmPassword.error = "Passwords do not match";
                            break;
                        case signupErrors.confirmNotMatch:
                            state.password.hasError = true;
                            state.confirmPassword.hasError = true;
                            state.password.error = "Passwords do not match";
                            state.confirmPassword.hasError = true;
                            state.confirmPassword.error = "Passwords do not match";
                            break;
                    }
                });
            }
            return { ...state };
        //this case is called when clicking the button to login and is fetching the data from the server
        case ActionType.REGISTER_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: true,
                }
            };
        //this case is called when the register is successful and reset the form from SignUp
        case ActionType.REGISTER_SUCCESS:
            return {
                ...state,
                // firstName: { value: "", hasError: false },
                // lastName: { value: "", hasError: false },
                // birthDate: { value: "", hasError: false },
                // country: { value: "", hasError: false },
                // city: { value: "", hasError: false },
                // email: { value: "", hasError: false },
                // password: { value: "", hasError: false },
                // confirmPassword: { value: "", hasError: false },
                // loginPassword: { value: "", hasError: false },
                // user: { value: "", hasError: false },
                isFormValid: false,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: action.payload,
                    errors: undefined,
                }
            };
        //this case is called when the register is unsuccessful and set the errors in the auth state
        case ActionType.REGISTER_FAIL:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    errors: action.payload,
                }
            };
        //this case is called when the login button is clicked and is fetching the data
        case ActionType.LOGIN_LOADING:
            return {
                ...state,
                loginAuth: {
                    ...state.loginAuth,
                    loading: true,
                }
            };
        //this case is called when the login is successful,
        // it resets the form from LogIn and the loginAuth state
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loginPassword: { value: "", hasError: false },
                user: { value: "", hasError: false },
                loginAuth: {
                    ...state.loginAuth,
                    loading: false,
                    data: action.payload,
                    errors: undefined,
                }
            };
        //this case is called when the login is unsuccessful and set the errors in the loginAuth state
        case ActionType.LOGIN_FAIL:
            return {
                ...state,
                loginAuth: {
                    ...state.loginAuth,
                    loading: false,
                    errors: action.payload,
                }
            };
        // this validation treats the errors and for each enum value it checks if the error 
        //is present in the array of errors then sets the hasError proprerty of each input to true
        case ActionType.VALIDATE_LOGIN:
            const loginErrors = state.loginAuth.errors;
            if (loginErrors) {
                loginErrors.forEach((error) => {
                    switch (error) {
                        case signupErrors.emailEmpty:
                            state.user.hasError = true;
                            state.user.error = error;
                            break;
                        case signupErrors.emailInvalid:
                            state.user.hasError = true;
                            state.user.error = error;
                            break;
                        case signupErrors.passwordLength:
                            state.loginPassword.hasError = true;
                            state.loginPassword.error = error;
                        case signupErrors.passwordEmpty:
                            state.loginPassword.hasError = true;
                            state.loginPassword.error = error;
                            break;
                        case signupErrors.incorrectPassword:
                            state.loginPassword.hasError = true;
                            state.loginPassword.error = "Incorrect password";
                            break;
                        case signupErrors.emailNotExists:
                            state.user.hasError = true;
                            state.user.error = "Email does not exist";
                            break;
                    }
                });
            }
            return { ...state };
        // this case sets the logged user in the state
        case ActionType.LOG_USER:
            return {
                ...state,
                loginAuth: {
                    loading: false,
                    data: undefined,
                    errors: undefined,
                },
            };
        // this case resets the form state
        case ActionType.RESET_FORMSTATE:
            return {
                ...state,
                firstName: { value: "", hasError: false },
                lastName: { value: "", hasError: false },
                birthDate: { value: "", hasError: false },
                country: { value: "", hasError: false },
                city: { value: "", hasError: false },
                email: { value: "", hasError: false },
                password: { value: "", hasError: false },
                confirmPassword: { value: "", hasError: false },
                user: { value: "", hasError: false },
                loginPassword: { value: "", hasError: false },
                auth: {
                    loading: false,
                    data: undefined,
                    errors: undefined,
                },
                loginAuth: {
                    loading: false,
                    data: undefined,
                    errors: undefined,
                },
                isFormValid: false,
            };
        default: return state;
    }
};

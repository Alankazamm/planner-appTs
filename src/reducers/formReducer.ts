//description: this reducer is used to update the state of the form and validate the form
//types
export type formItem = { value: string; hasError: boolean, error?: string };
export enum signupErrors {
    
    //sign-up && sign-in
    passwordEmpty = "\"password\" is not allowed to be empty",
    emailEmpty = "\"email\" is not allowed to be empty",
    emailInvalid = "\"email\" must be a valid email",
    //sign-up
    emailExists = 'User with required email already exists. Please sign in!',
    firstNameEmpty = "\"firstName\" is not allowed to be empty",
    lastNameEmpty = "\"lastName\" is not allowed to be empty",
    birthDateInvalid = "\"birthDate\" must be a valid date",
    cityEmpty = "\"city\" is not allowed to be empty",
    countryEmpty = "\"country\" is not allowed to be empty",
    passwordLength = "\"password\" length must be at least 6 characters long",
    confirmNotMatch = "\"confirmPassword\" must be [ref:password]",
    //sign-in
    emailNotExists = "This user doesn't exist. Please sign up first!",
    incorrectPassword = "Invalid data.",

}
export type userLogged = {
    firstName: string,
    id: string,
    city: string,
    country: string,
}
export type formState = {
    firstName: formItem,
    lastName: formItem,
    birthDate: formItem,
    country: formItem,
    city: formItem,
    email: formItem,
    password: formItem,
    confirmPassword?: formItem,
    loginPassword?: formItem,
    user: formItem,
    isFormValid?: boolean,
    auth: {
        loading: boolean,
        errors?:signupErrors[],
        data: any,
    },
    loginAuth: {
        loading: boolean,
        errors?: signupErrors[],
        data: any,
    }
    isLoginValid?: boolean,
};
export enum ActionType {
    UPDATE_FORM = 'UPDATE_FORM',
    VALIDATE_FORM = 'VALIDATE_FORM',
    LOG_USER = 'LOG_USER',
    RESET_FORMSTATE = 'RESET_FORMSTATE',
    REGISTER_LOADING = 'REGISTER_LOADING',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
    LOGIN_LOADING = 'LOGIN_LOADING',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    VALIDATE_LOGIN = 'VALIDATE_LOGIN',
};
export type action =
    { type: ActionType.UPDATE_FORM, payload: { name: keyof formState; value: string } }
    | { type: ActionType.VALIDATE_FORM }
    | { type: ActionType.LOG_USER, payload: userLogged}
    | { type: ActionType.RESET_FORMSTATE }
    | { type: ActionType.REGISTER_LOADING } | { type: ActionType.REGISTER_SUCCESS, payload: any }
    | { type: ActionType.REGISTER_FAIL, payload: signupErrors[] } | { type: ActionType.LOGIN_LOADING }
    | { type: ActionType.LOGIN_SUCCESS, payload: any } | { type: ActionType.LOGIN_FAIL, payload: signupErrors[] }
    | { type: ActionType.VALIDATE_LOGIN };

//reducer
export const formsReducer = (state: formState, action: action): formState => {

    switch (action.type) {
        // this case updates the value of the input based on the name of the input
        case ActionType.UPDATE_FORM:
            const name = action.payload.name
            const value = action.payload.value
            if( name === 'confirmPassword' ){
                if (value !== state.password.value) {
                    return {
                        ...state,
                        [name as keyof formState]: { ...state[name] as formItem, value, hasError: true, error: "Passwords do not match" },
                    }
                }
            }
            return {
                ...state,
                [name as keyof formState]: { ...state[name] as formItem, value, hasError: false, error: undefined },
            }
        // this validation treats the errors and for each enum value, it checks if the error
        // is present in the array of errors then sets the hasError proprerty of each input to true
        case ActionType.VALIDATE_FORM:
            const errors:signupErrors[] | undefined = state.auth!.errors;
            if (errors) {
                errors.forEach((error) => {
                    switch (error) {
                        case signupErrors.emailExists:
                            state.email.hasError = true;
                            state.email.error = error;
                            break;
                        case signupErrors.firstNameEmpty:
                            state.firstName!.hasError = true;
                            state.firstName!.error = error;
                            break;
                        case signupErrors.lastNameEmpty:
                            state.lastName!.hasError = true;
                            state.lastName!.error = error;
                            break;
                        case signupErrors.birthDateInvalid:
                            state.birthDate!.hasError = true;
                            state.birthDate!.error = error;
                            break;
                        case signupErrors.cityEmpty:
                            state.city!.hasError = true;
                            state.city!.error = error;
                            break;
                        case signupErrors.countryEmpty:
                            state.country!.hasError = true;
                            state.country!.error = error;
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
                            state.confirmPassword!.hasError = true;
                            state.confirmPassword!.error = error;
                            break;
                        case signupErrors.passwordLength:
                            state.password.hasError = true;
                            state.confirmPassword!.hasError = true;
                            state.password.error = error;
                            state.confirmPassword!.error = error; 
                            break;
                        case signupErrors.confirmNotMatch:
                            state.password.hasError = true;
                            state.confirmPassword!.hasError = true;
                            state.password.error = "Passwords do not match";
                            state.confirmPassword!.hasError = true;
                            state.confirmPassword!.error = "Passwords do not match";
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
                    ...state.auth!,
                    loading: true,
                }
            };
        //this case is called when the register is successful and reset the form from SignUp
        case ActionType.REGISTER_SUCCESS:
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
                loginPassword: { value: "", hasError: false },
                user: { value: "", hasError: false },
                isFormValid: false,
                auth: {
                    ...state.auth!,
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
                    ...state.auth!,
                    loading: false,
                    errors: action.payload,
                }
            };
        //this case is called when the login button is clicked and is fetching the data
        case ActionType.LOGIN_LOADING:
            return {
                ...state,
                loginAuth: {
                    ...state.loginAuth!,
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
                    ...state.loginAuth!,
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
                    ...state.loginAuth!,
                    loading: false,
                    errors: action.payload,
                }
            };
        // this validation treats the errors and for each enum value it checks if the error 
        //is present in the array of errors then sets the hasError proprerty of each input to true
        case ActionType.VALIDATE_LOGIN:
            const loginErrors: signupErrors[] | undefined = state.loginAuth!.errors;
            if (loginErrors) {
                loginErrors.forEach((error) => {
                    switch (error) {
                        case signupErrors.emailEmpty:
                            state.user!.hasError = true;
                            state.user!.error = error;
                            break;
                        case signupErrors.emailInvalid:
                            state.user!.hasError = true;
                            state.user!.error = error;
                            break;
                        case signupErrors.passwordLength:
                            state.loginPassword!.hasError = true;
                            state.loginPassword!.error = error;
                        case signupErrors.passwordEmpty:
                            state.loginPassword!.hasError = true;
                            state.loginPassword!.error = error;
                            break;
                        case signupErrors.incorrectPassword:
                            state.loginPassword!.hasError = true;
                            state.loginPassword!.error = "Incorrect password";
                            break;
                        case signupErrors.emailNotExists:
                            state.user!.hasError = true;
                            state.user!.error = "Email does not exist";
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
    }




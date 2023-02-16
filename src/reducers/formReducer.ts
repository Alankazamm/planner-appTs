//description: this reducer is used to update the state of the form and validate the form
//types
export type formItem = { value: string; hasError: boolean, error?: string };
export enum signupErrors {
    emailExists = 'User with required email already exists. Please sign in!',
    firstNameEmpty = "\"firstName\" is not allowed to be empty",
    lastNameEmpty = "\"lastName\" is not allowed to be empty",
    birthDateInvalid = "\"birthDate\" must be a valid date",
    cityEmpty = "\"city\" is not allowed to be empty",
    countryEmpty = "\"country\" is not allowed to be empty",
    emailEmpty = "\"email\" is not allowed to be empty",
    emailInvalid = "\"email\" must be a valid email",
    passwordEmpty = "\"password\" is not allowed to be empty",
    passwordLength = "\"password\" length must be at least 6 characters long",
    confirmNotMatch = "\"confirmPassword\" must be [ref:password]",

}
export type formState = {
    firstName?: formItem,
    lastName?: formItem,
    birthDate?: formItem,
    country?: formItem,
    city?: formItem,
    email: formItem,
    password: formItem,
    confirmPassword?: formItem,
    loginPassword?: formItem,
    user?: formItem,
    isFormValid?: boolean,
    auth?: {
        loading: boolean,
        errors?:signupErrors[],
        data: any,
    },
    isLoginValid?: boolean,
};
export enum ActionType {
    UPDATE_FORM = 'UPDATE_FORM',
    VALIDATE_FORM = 'VALIDATE_FORM',
    SEND_LOGIN = 'SEND_LOGIN',
    RESET_LOGIN = 'RESET_LOGIN',
    REGISTER_LOADING = 'REGISTER_LOADING',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
};
export type action =
    { type: ActionType.UPDATE_FORM, payload: { name: keyof formState; value: string } }
    | { type: ActionType.VALIDATE_FORM } | { type: ActionType.SEND_LOGIN } | { type: ActionType.RESET_LOGIN }
    | { type: ActionType.REGISTER_LOADING }| { type: ActionType.REGISTER_SUCCESS, payload: any } | { type: ActionType.REGISTER_FAIL, payload: signupErrors[] };

//reducer
export const formsReducer = (state: formState, action: action): formState => {

    switch (action.type) {
        // this case updates the value of the input based on the name of the input
        case ActionType.UPDATE_FORM:
            const name = action.payload.name
            const value = action.payload.value
            return {
                ...state,
                [name as keyof formState]: { ...state[name] as formItem, value, hasError: false, error: undefined },
            }
        // this validation treats the errors and for each enum value it checks if the error is present in the array of errors then sets the hasError proprerty of each input to true
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
        case ActionType.REGISTER_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth!,
                    loading: true,
                }
            };
        case ActionType.REGISTER_SUCCESS:
            return {
                //set the hasError property of each input to false
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
        case ActionType.REGISTER_FAIL:
            return {
                ...state,
                auth: {
                    ...state.auth!,
                    loading: false,
                    errors: action.payload,
                }
            };
        
        // this case sends the login data to the server
        case ActionType.SEND_LOGIN:
            const { email, password } = JSON.parse(localStorage.getItem('user')!);

            state.user!.value !== email ? state.user!.hasError = true : state.user!.hasError = false;
            state.loginPassword!.value !== password ? state.loginPassword!.hasError = true : state.loginPassword!.hasError = false;

            if (state.user!.hasError || state.loginPassword!.hasError) {

                return { ...state, isLoginValid: false };
            }
            else {
                return {
                    ...state,
                    isLoginValid: true
                };
            };
        case ActionType.RESET_LOGIN:
            return {
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
                isFormValid: false,
                isLoginValid: false,
            }


                default: return state;
            }




    }




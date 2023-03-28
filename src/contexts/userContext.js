import { jsx as _jsx } from "react/jsx-runtime";
// This is the context that will be used to store the user data and the form data
//hooks
import { createContext, useReducer, } from "react";
import { useNavigate } from "react-router-dom";
//reducers
import { formsReducer, ActionType, } from "../reducers/formReducer";
//initial states
const initialState = {
    firstName: { value: "", hasError: false, error: "" },
    lastName: { value: "", hasError: false, error: "" },
    birthDate: { value: "", hasError: false, error: "" },
    country: { value: "", hasError: false, error: "" },
    city: { value: "", hasError: false, error: "" },
    email: { value: "", hasError: false, error: "" },
    password: { value: "", hasError: false, error: "" },
    confirmPassword: { value: "", hasError: false, error: "" },
    user: { value: "", hasError: false, error: "" },
    loginPassword: { value: "", hasError: false, error: "" },
    auth: {
        loading: false,
        errors: [],
        data: null,
    },
    loginAuth: {
        loading: false,
        errors: [],
        data: null,
    },
    isFormValid: false,
    isLoginValid: false,
    unknownError: false,
};
//context
export const UserContext = createContext({});
export const UserContextProvider = ({ children }) => {
    //hooks
    const [formState, dispatch] = useReducer(formsReducer, initialState);
    const navigate = useNavigate();
    //functions
    //when the user signs out, the form state is reset and the user is redirected to the login page
    //the user is also removed from the local storage
    const signout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("user");
        dispatch({ type: ActionType.RESET_FORMSTATE });
        navigate('/login');
    };
    return (_jsx(UserContext.Provider, { value: { formState, dispatch, signout, }, children: children }));
};

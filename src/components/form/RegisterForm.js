import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
import { useContext } from "react";
//Styles
import { Input } from "./inputs/styles/Input.styles";
import { Label } from './inputs/styles/Label.styles';
import { InputWrapper } from './inputs/styles/InputWrapper.styles';
import { Form } from "./Form.styles";
//external functions
import { ActionType } from "../../reducers/formReducer";
import ErrorTooltip from '../common/error-handling/tooltip/ErrorTooltip.styles';
//contexts
import { UserContext } from './../../contexts/userContext';
export const RegisterForm = () => {
    const { formState, dispatch } = useContext(UserContext);
    //send the input value to the reducer on change
    const inputHandler = (e) => {
        dispatch({ type: ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    };
    return (_jsxs(Form, { page: "signup", children: [_jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "firstName", children: "first name" }), _jsx(Input, { type: "text", name: "firstName", onChange: inputHandler, value: formState.firstName.value, placeholder: "Your first name", hasError: formState.firstName.hasError }), formState.firstName.hasError && _jsx(ErrorTooltip, { children: formState.firstName.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "lastName", children: "last name" }), _jsx(Input, { type: "text", name: "lastName", onChange: inputHandler, value: formState.lastName.value, placeholder: "Your last name", hasError: formState.lastName.hasError }), formState.lastName.hasError && _jsx(ErrorTooltip, { children: formState.lastName.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "birthDate", children: "birth date" }), _jsx(Input, { type: "date", name: "birthDate", onChange: inputHandler, value: formState.birthDate.value, placeholder: "MM/DD/YYYY", hasError: formState.birthDate.hasError }), formState.birthDate.hasError && _jsx(ErrorTooltip, { children: formState.birthDate.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "country", children: "Country" }), _jsx(Input, { type: "text", name: "country", onChange: inputHandler, value: formState.country.value, placeholder: "Your Country", hasError: formState.country.hasError }), formState.country.hasError && _jsx(ErrorTooltip, { children: formState.country.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "city", children: "City" }), _jsx(Input, { type: "city", name: "city", onChange: inputHandler, value: formState.city.value, placeholder: "Your City", hasError: formState.city.hasError }), formState.city.hasError && _jsx(ErrorTooltip, { children: formState.city.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "email", children: "e-mail" }), _jsx(Input, { type: "email", name: "email", onChange: inputHandler, value: formState.email.value, placeholder: "A valid e-mail here", hasError: formState.email.hasError }), formState.email.hasError && _jsx(ErrorTooltip, { children: formState.email.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "password", children: "password" }), _jsx(Input, { type: "password", name: "password", onChange: inputHandler, value: formState.password.value, placeholder: "Your password", hasError: formState.password.hasError }), formState.password.hasError && _jsx(ErrorTooltip, { children: formState.password.error })] }), _jsxs(InputWrapper, { children: [_jsx(Label, { htmlFor: "confirmPassword", children: "password" }), _jsx(Input, { type: "password", name: "confirmPassword", onChange: inputHandler, value: formState.confirmPassword.value, placeholder: "Comfirm your password", hasError: formState.confirmPassword.hasError || formState.password.hasError }), (formState.confirmPassword.hasError) && _jsx(ErrorTooltip, { children: formState.confirmPassword.error })] })] }));
};

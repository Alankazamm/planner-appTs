//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
import { useContext } from "react";
import React from "react";
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
    return (React.createElement(Form, { page: "signup" },
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "firstName" }, "first name"),
            React.createElement(Input, { type: "text", name: "firstName", onChange: inputHandler, value: formState.firstName.value, placeholder: "Your first name", hasError: formState.firstName.hasError }),
            formState.firstName.hasError && React.createElement(ErrorTooltip, null, formState.firstName.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "lastName" }, "last name"),
            React.createElement(Input, { type: "text", name: "lastName", onChange: inputHandler, value: formState.lastName.value, placeholder: "Your last name", hasError: formState.lastName.hasError }),
            formState.lastName.hasError && React.createElement(ErrorTooltip, null, formState.lastName.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "birthDate" }, "birth date"),
            React.createElement(Input, { type: "date", name: "birthDate", onChange: inputHandler, value: formState.birthDate.value, placeholder: "MM/DD/YYYY", hasError: formState.birthDate.hasError }),
            formState.birthDate.hasError && React.createElement(ErrorTooltip, null, formState.birthDate.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "country" }, "Country"),
            React.createElement(Input, { type: "text", name: "country", onChange: inputHandler, value: formState.country.value, placeholder: "Your Country", hasError: formState.country.hasError }),
            formState.country.hasError && React.createElement(ErrorTooltip, null, formState.country.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "city" }, "City"),
            React.createElement(Input, { type: "city", name: "city", onChange: inputHandler, value: formState.city.value, placeholder: "Your City", hasError: formState.city.hasError }),
            formState.city.hasError && React.createElement(ErrorTooltip, null, formState.city.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "email" }, "e-mail"),
            React.createElement(Input, { type: "email", name: "email", onChange: inputHandler, value: formState.email.value, placeholder: "A valid e-mail here", hasError: formState.email.hasError }),
            formState.email.hasError && React.createElement(ErrorTooltip, null, formState.email.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "password" }, "password"),
            React.createElement(Input, { type: "password", name: "password", onChange: inputHandler, value: formState.password.value, placeholder: "Your password", hasError: formState.password.hasError }),
            formState.password.hasError && React.createElement(ErrorTooltip, null, formState.password.error)),
        React.createElement(InputWrapper, null,
            React.createElement(Label, { htmlFor: "confirmPassword" }, "password"),
            React.createElement(Input, { type: "password", name: "confirmPassword", onChange: inputHandler, value: formState.confirmPassword.value, placeholder: "Comfirm your password", hasError: formState.confirmPassword.hasError || formState.password.hasError }),
            (formState.confirmPassword.hasError) && React.createElement(ErrorTooltip, null, formState.confirmPassword.error))));
};

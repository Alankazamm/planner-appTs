"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterForm = void 0;
//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
const react_1 = require("react");
const React = __importStar(require("react"));
//Styles
const Input_styles_1 = require("../components/Input/Input.styles");
const Label_styles_1 = require("../components/Input/Label.styles");
const InputWrapper_styles_1 = require("../components/Input/InputWrapper.styles");
const styles_1 = require("../styles");
//external functions
const formReducer_1 = require("../../../reducers/formReducer");
//contexts
const usersContext_1 = require("../../../contexts/usersContext");
const styles_2 = require("../../../styles");
const RegisterForm = () => {
    const { formState, dispatch } = (0, react_1.useContext)(usersContext_1.UserContext);
    //send the input value to the reducer on change
    const inputHandler = (e) => {
        dispatch({ type: formReducer_1.ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    };
    return (React.createElement(styles_1.Form, { page: "signup" },
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "firstName" }, "first name"),
            React.createElement(Input_styles_1.Input, { type: "text", name: "firstName", onChange: inputHandler, value: formState.firstName.value, placeholder: "Your first name", hasError: formState.firstName.hasError }),
            formState.firstName.hasError && React.createElement(styles_2.TooltipError, null, formState.firstName.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "lastName" }, "last name"),
            React.createElement(Input_styles_1.Input, { type: "text", name: "lastName", onChange: inputHandler, value: formState.lastName.value, placeholder: "Your last name", hasError: formState.lastName.hasError }),
            formState.lastName.hasError && React.createElement(styles_2.TooltipError, null, formState.lastName.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "birthDate" }, "birth date"),
            React.createElement(Input_styles_1.Input, { type: "date", name: "birthDate", onChange: inputHandler, value: formState.birthDate.value, placeholder: "MM/DD/YYYY", hasError: formState.birthDate.hasError }),
            formState.birthDate.hasError && React.createElement(styles_2.TooltipError, null, formState.birthDate.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "country" }, "Country"),
            React.createElement(Input_styles_1.Input, { type: "text", name: "country", onChange: inputHandler, value: formState.country.value, placeholder: "Your Country", hasError: formState.country.hasError }),
            formState.country.hasError && React.createElement(styles_2.TooltipError, null, formState.country.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "city" }, "City"),
            React.createElement(Input_styles_1.Input, { type: "city", name: "city", onChange: inputHandler, value: formState.city.value, placeholder: "Your City", hasError: formState.city.hasError }),
            formState.city.hasError && React.createElement(styles_2.TooltipError, null, formState.city.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "email" }, "e-mail"),
            React.createElement(Input_styles_1.Input, { type: "email", name: "email", onChange: inputHandler, value: formState.email.value, placeholder: "A valid e-mail here", hasError: formState.email.hasError }),
            formState.email.hasError && React.createElement(styles_2.TooltipError, null, formState.email.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "password" }, "password"),
            React.createElement(Input_styles_1.Input, { type: "password", name: "password", onChange: inputHandler, value: formState.password.value, placeholder: "Your password", hasError: formState.password.hasError }),
            formState.password.hasError && React.createElement(styles_2.TooltipError, null, formState.password.error)),
        React.createElement(InputWrapper_styles_1.InputWrapper, null,
            React.createElement(Label_styles_1.Label, { htmlFor: "confirmPassword" }, "password"),
            React.createElement(Input_styles_1.Input, { type: "password", name: "confirmPassword", onChange: inputHandler, value: formState.confirmPassword.value, placeholder: "Comfirm your password", hasError: formState.confirmPassword.hasError || formState.password.hasError }),
            (formState.confirmPassword.hasError) && React.createElement(styles_2.TooltipError, null, formState.confirmPassword.error))));
};
exports.RegisterForm = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map
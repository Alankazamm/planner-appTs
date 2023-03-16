import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// description: this is a form component that will be used to log in to dashboard
//hooks
import { useContext, useEffect, useState } from "react";
import ErrorTooltip from "../common/error-handling/tooltip/ErrorTooltip.styles";
import { Form } from "./Form.styles";
import { Icon } from "./icon/Icon";
//styles
import { Input } from "./inputs/styles/Input.styles";
import { LoginInputWrapper } from "./inputs/styles/InputWrapper.styles";
import { UserContext } from './../../contexts/userContext';
export const LoginForm = () => {
    //hooks
    const [errorUser, setErrorUser] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [iconIsInside, setIconIsInside] = useState({ user: false, password: false });
    const { formState, dispatch } = useContext(UserContext);
    //set the error for the states that manages icons colors and error tooltips
    useEffect(() => {
        setErrorUser(formState.user.hasError);
    }, [formState.user.hasError]);
    useEffect(() => {
        setErrorPassword(formState.loginPassword.hasError);
    }, [formState.loginPassword.hasError]);
    //manages the icons inside or not, and remove the error state from the formstate(to remove error markups)
    const inputHandler = (e) => {
        dispatch({ type: "UPDATE_FORM", payload: { name: e.target.name, value: e.target.value } });
        if (e.target.value !== "") {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: true })
                : setIconIsInside({ ...iconIsInside, password: true });
        }
        else {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: false })
                : setIconIsInside({ ...iconIsInside, password: false });
        }
    };
    return (_jsxs(Form, { page: "login", hasError: formState.user.hasError || formState.loginPassword.hasError, children: [_jsx("h2", { children: "Login" }), _jsxs(LoginInputWrapper, { children: [_jsxs("div", { children: [_jsx(Input, { type: "text", name: "user", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, user: true }), onBlur: (e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, user: false }) : null, value: formState.user.value, placeholder: "user name", hasError: formState.user.hasError }), errorUser && _jsx(ErrorTooltip, { page: "login", children: formState.user.error })] }), _jsx(Icon, { icon: "userIcon", hasError: errorUser, iconIsInside: iconIsInside.user })] }), _jsxs(LoginInputWrapper, { children: [_jsxs("div", { children: [_jsx(Input, { type: "password", name: "loginPassword", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, password: true }), onBlur: (e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, password: false }) : null, value: formState.loginPassword.value, placeholder: "password", hasError: formState.loginPassword.hasError }), errorPassword && _jsx(ErrorTooltip, { page: "login", children: formState.loginPassword.error })] }), _jsx(Icon, { icon: "passwordIcon", hasError: errorPassword, iconIsInside: iconIsInside.password })] }), _jsx("div", { className: "errorDiv", children: _jsx("span", { className: "error", children: "Wow, invalid username or password. Please, try again!" }) })] }));
};

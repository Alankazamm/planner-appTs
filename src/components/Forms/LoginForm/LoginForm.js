"use strict";
// description: this is a form component that will be used to log in to dashboard
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
exports.LoginForm = void 0;
//hooks
const react_1 = require("react");
//styles
const Input_1 = require("../components/Input");
const Icon_1 = require("../components/Icon");
const styles_1 = require("../../../styles");
const styles_2 = require("../styles");
//context
const usersContext_1 = require("../../../contexts/usersContext");
const React = __importStar(require("react"));
const LoginForm = () => {
    //hooks
    const [errorUser, setErrorUser] = (0, react_1.useState)(false);
    const [errorPassword, setErrorPassword] = (0, react_1.useState)(false);
    const [iconIsInside, setIconIsInside] = (0, react_1.useState)({
        user: false,
        password: false,
    });
    const { formState, dispatch } = (0, react_1.useContext)(usersContext_1.UserContext);
    //useEffects
    (0, react_1.useEffect)(() => {
        setErrorUser(formState.user.hasError);
    }, [formState.user.hasError]);
    (0, react_1.useEffect)(() => {
        setErrorPassword(formState.loginPassword.hasError);
    }, [formState.loginPassword.hasError]);
    //manages the icons inside or not, and remove the error state from the formstate(to remove error markups)
    const inputHandler = (e) => {
        dispatch({
            type: "UPDATE_FORM",
            payload: { name: e.target.name, value: e.target.value },
        });
        e.target.value !== ""
            ? e.target.name === "user"
                ? setIconIsInside({ ...iconIsInside, user: true })
                : setIconIsInside({ ...iconIsInside, password: true })
            : e.target.name === "user"
                ? setIconIsInside({ ...iconIsInside, user: false })
                : setIconIsInside({ ...iconIsInside, password: false });
    };
    return (React.createElement(styles_2.Form, { page: "login", hasError: formState.user.hasError || formState.loginPassword.hasError },
        React.createElement("h2", null, "Login"),
        React.createElement(Input_1.LoginInputWrapper, null,
            React.createElement("div", null,
                React.createElement(Input_1.Input, { type: "text", name: "user", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, user: true }), onBlur: (e) => e.target.value === ""
                        ? setIconIsInside({ ...iconIsInside, user: false })
                        : null, value: formState.user.value, placeholder: "user name", hasError: formState.user.hasError }),
                errorUser && (React.createElement(styles_1.TooltipError, { page: "login" }, formState.user.error))),
            React.createElement(Icon_1.Icon, { icon: "userIcon", hasError: errorUser, iconIsInside: iconIsInside.user })),
        React.createElement(Input_1.LoginInputWrapper, null,
            React.createElement("div", null,
                React.createElement(Input_1.Input, { type: "password", name: "loginPassword", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, password: true }), onBlur: (e) => e.target.value === ""
                        ? setIconIsInside({ ...iconIsInside, password: false })
                        : null, value: formState.loginPassword.value, placeholder: "password", hasError: formState.loginPassword.hasError }),
                errorPassword && (React.createElement(styles_1.TooltipError, { page: "login" }, formState.loginPassword.error))),
            React.createElement(Icon_1.Icon, { icon: "passwordIcon", hasError: errorPassword, iconIsInside: iconIsInside.password })),
        React.createElement("div", { className: "errorDiv" },
            React.createElement("span", { className: "error" }, "Wow, invalid username or password. Please, try again!"))));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map
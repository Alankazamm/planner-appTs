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
exports.SignUp = void 0;
// description: this is the sign up page
const React = __importStar(require("react"));
//hooks
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styles
const FormButton_1 = require("../components/Forms/components/Button/FormButton");
const RegisterForm_1 = require("../components/Forms/RegisterForm/RegisterForm");
const Header_1 = require("../components/common/Header/Header");
const ContentContainer_1 = require("../components/Forms/components/Containers/ContentContainer");
const styles_1 = require("../components/Forms/components/Containers/styles");
//external funcs
const register_1 = require("../api/auth/register");
//contexts
const usersContext_1 = require("../contexts/usersContext");
//types
const formReducer_1 = require("../reducers/formReducer");
//components
const SignErrorModal_1 = require("../components/common/Modals/components/SignErrorModal");
const ConfirmEmailModal_1 = require("../components/common/Modals/components/ConfirmEmailModal");
const styles_2 = require("../styles");
const Aside_1 = require("./../components/Aside");
const SignUp = () => {
    //hook's calls
    const { formState, dispatch } = (0, react_1.useContext)(usersContext_1.UserContext);
    const [confirmEmail, setConfirmEmail] = (0, react_1.useState)(false);
    const toggleConfirmEmail = () => setConfirmEmail(!confirmEmail);
    const navigate = (0, react_router_dom_1.useNavigate)();
    //avoid access to protected pages
    (0, react_1.useEffect)(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }, []);
    const toggleModalFunction = () => {
        dispatch({ type: formReducer_1.ActionType.TOGGLE_UNKNOWN_ERROR, payload: false });
    };
    const signUpHandler = () => {
        const { firstName, lastName, birthDate, country, city, email, password, confirmPassword, } = formState;
        //format date from YYYY-MM-DD to DD/MM/YYYY
        const newDate = birthDate.value
            .split("-")
            .reverse()
            .join("/");
        //when clicked and treated the data, send it to sing-up api request
        (0, register_1.register)({
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: newDate,
            country: country.value,
            city: city.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        })(dispatch);
        console.log(formState);
    };
    (0, react_1.useEffect)(() => {
        dispatch({ type: formReducer_1.ActionType.VALIDATE_FORM });
    }, [formState.auth.errors]);
    (0, react_1.useEffect)(() => {
        if (formState.auth.data) {
            setConfirmEmail(true);
        }
    }, [formState.auth.data]);
    return (React.createElement(styles_2.MainContainer, null,
        React.createElement(ContentContainer_1.ContentContainer, null,
            React.createElement("div", { id: "wrapper" },
                React.createElement(styles_1.FormContainer, { page: "signup" },
                    React.createElement(Header_1.HeaderText, { page: "signup", title: "Welcome,", description: "Please, register to continue" }),
                    React.createElement(RegisterForm_1.RegisterForm, null),
                    React.createElement(FormButton_1.FormButton, { text: "Register Now", page: "login", redirectText: "Already have an account?", isLoading: formState.auth.loading, onClick: signUpHandler })))),
        formState.unknownError && React.createElement(SignErrorModal_1.SignErrorModal, { toggleModal: toggleModalFunction }),
        confirmEmail && React.createElement(ConfirmEmailModal_1.ConfirmEmailModal, { email: formState.email.value, toggleModal: toggleConfirmEmail }),
        React.createElement(Aside_1.BgSection, null)));
};
exports.SignUp = SignUp;
//# sourceMappingURL=SignUp.js.map
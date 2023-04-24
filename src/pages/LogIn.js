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
exports.LogIn = void 0;
// description: login page
const React = __importStar(require("react"));
//hooks
const react_1 = require("react");
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styles
const styles_1 = require("../components/Forms/components/Containers/styles");
//components
const Header_1 = require("../components/common/Header/Header");
const ContentContainer_1 = require("../components/Forms/components/Containers/ContentContainer");
const LoginForm_1 = require("../components/Forms/LoginForm/LoginForm");
const FormButton_1 = require("../components/Forms/components/Button/FormButton");
//contexts
const usersContext_1 = require("../contexts/usersContext");
//types
const formReducer_1 = require("../reducers/formReducer");
//external funcs
const login_1 = require("../api/auth/login");
const ConfirmEmailModal_1 = require("../components/common/Modals/components/ConfirmEmailModal");
// import { updateToken } from "../helpers/axios";
const ForgotPasswordModal_1 = require("../components/common/Modals/components/ForgotPasswordModal");
const ResetPasswordModal_1 = require("../components/common/Modals/components/ResetPasswordModal");
const styles_2 = require("../styles");
const BgSection_1 = require("../components/Aside/BgSection");
let firstRender = true;
const LogIn = () => {
    //hook's calls
    const { formState, dispatch } = (0, react_1.useContext)(usersContext_1.UserContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [showModal, setShowModal] = (0, react_1.useState)({
        confirmModal: false,
        forgotPasswordModal: {
            show: false,
            sended: false,
        },
    });
    //functions
    const loginHandler = () => {
        const email = formState.user.value;
        const password = formState.loginPassword.value;
        (0, login_1.login)({ email, password })(dispatch);
    };
    const toggleConfirmEmail = () => {
        setShowModal({ ...showModal, confirmModal: !showModal.confirmModal });
    };
    const toggleForgotPassword = (sended) => {
        setShowModal({ ...showModal, forgotPasswordModal: { show: !showModal.forgotPasswordModal.show, sended } });
    };
    const forgotLinkHandler = () => {
        toggleForgotPassword(false);
    };
    const toggleResetModal = () => {
        //it will close the reset modal with forgotPasswordModal.sended
        setShowModal({ ...showModal, forgotPasswordModal: { show: false, sended: false } });
    };
    //useEffect's
    (0, react_2.useEffect)(() => {
        if (firstRender) {
            firstRender = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            dispatch({ type: formReducer_1.ActionType.LOG_USER });
        }
    }, []);
    (0, react_2.useEffect)(() => {
        if (formState.loginAuth.errors) {
            dispatch({ type: formReducer_1.ActionType.VALIDATE_LOGIN });
        }
    }, [formState.loginAuth.errors]);
    (0, react_2.useEffect)(() => {
        if (formState.loginAuth.data) {
            navigate("/planner");
        }
    }, [formState.loginAuth.data]);
    (0, react_2.useEffect)(() => {
        if (formState.user.error) {
            //check if the error is because the user is not confirmed
            console.log(formState.user.error);
            if (formState.user.error.includes("User is not confirmed")) {
                console.log("user is not confirmed");
                toggleConfirmEmail();
            }
        }
    }, [formState.user.error]);
    return (React.createElement(styles_2.MainContainer, null,
        React.createElement(ContentContainer_1.ContentContainer, null,
            React.createElement("div", { className: "wrapper" },
                React.createElement(styles_1.FormContainer, { page: "login" },
                    React.createElement(Header_1.HeaderText, { page: "login", title: "Welcome,", description: "To continue browsing safely, log in to the network." }),
                    React.createElement(LoginForm_1.LoginForm, null),
                    React.createElement(FormButton_1.FormButton, { text: "Log in", page: "signup", redirectText: "Don't have an account?", isLoading: formState.loginAuth.loading, onClick: loginHandler }),
                    React.createElement("span", { style: {
                            textAlign: "center",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "rgb(255, 255, 255)",
                        } },
                        " Forgot password? ",
                        React.createElement("span", { style: {
                                textDecoration: "underline",
                                color: "#ff0000",
                                cursor: "pointer",
                                marginLeft: "5px",
                            }, onClick: forgotLinkHandler }, "Click here")),
                    showModal.forgotPasswordModal.sended && React.createElement(ResetPasswordModal_1.ResetPasswordModal, { toggleModal: toggleResetModal }),
                    showModal.forgotPasswordModal.show && React.createElement(ForgotPasswordModal_1.ForgotPasswordModal, { toggleModal: toggleForgotPassword }),
                    showModal.confirmModal && React.createElement(ConfirmEmailModal_1.ConfirmEmailModal, { toggleModal: toggleConfirmEmail, email: formState.user.value })))),
        React.createElement(BgSection_1.BgSection, null)));
};
exports.LogIn = LogIn;
//# sourceMappingURL=LogIn.js.map
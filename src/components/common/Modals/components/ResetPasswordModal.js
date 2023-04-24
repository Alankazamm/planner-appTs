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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordModal = void 0;
const styles_1 = require("../styles");
const react_1 = require("react");
const aws_amplify_1 = require("aws-amplify");
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const react_2 = require("react");
const cognitoErrorsHandler_1 = require("../../../../api/utils/cognitoErrorsHandler");
const React = __importStar(require("react"));
const ResetPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)({
        email: '',
        verificationcode: '',
        newpassword: '',
        loading: false,
        error: false,
        success: false,
    });
    const inputChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleResetPassword = () => {
        setState({ ...state, loading: true });
        try {
            aws_amplify_1.Auth.forgotPasswordSubmit(state.email, state.verificationcode, state.newpassword)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            console.log(error, 'error');
            setState({ ...state, loading: false, error: true });
        }
    };
    (0, react_2.useEffect)(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal();
            }, 2000);
        }
    }, [state.success]);
    return (React.createElement(styles_1.ResetPasswordModal, null,
        React.createElement("div", { className: "resetPasswordModalContent" },
            React.createElement("div", { className: "resetPasswordModalTitle" }, "Set new password"),
            React.createElement("div", { className: "resetPasswordModalText" },
                React.createElement("p", null, "Enter your new password below.")),
            React.createElement("input", { className: "resetPasswordModalInput", name: "email", type: "text", placeholder: "Email", onChange: e => inputChange(e) }),
            React.createElement("input", { className: "resetPasswordModalInput", name: "verificationcode", type: "text", placeholder: "Verification code", onChange: e => inputChange(e) }),
            React.createElement("input", { className: "resetPasswordModalInput", name: "newpassword", type: "password", placeholder: "New password", onChange: e => inputChange(e) }),
            state.success && React.createElement("div", { className: "resetPasswordModalSuccess" }, "Password changed! Please, login"),
            state.error && React.createElement("div", { className: "resetPasswordModalError" }, errorMessage),
            state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) :
                React.createElement("div", { className: "resetPasswordModalButtons" },
                    React.createElement("button", { className: "resetPasswordButton", onClick: handleResetPassword }, "Reset password"),
                    React.createElement("button", { className: "closeButton", onClick: toggleModal }, "Cancel")))));
};
exports.ResetPasswordModal = ResetPasswordModal;
//# sourceMappingURL=ResetPasswordModal.js.map
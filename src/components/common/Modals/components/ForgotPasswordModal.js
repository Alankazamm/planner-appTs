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
exports.ForgotPasswordModal = void 0;
const styles_1 = require("../styles");
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const react_1 = require("react");
const aws_amplify_1 = require("aws-amplify");
const cognitoErrorsHandler_1 = require("../../../../api/utils/cognitoErrorsHandler");
const React = __importStar(require("react"));
const ForgotPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)({
        email: '',
        loading: false,
        error: false,
        success: false,
    });
    const handleForgotPassword = () => {
        setState({ ...state, loading: true });
        try {
            aws_amplify_1.Auth.forgotPassword(state.email)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(error));
            setState({ ...state, loading: false, error: true });
        }
    };
    (0, react_1.useEffect)(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal(true);
            }, 2000);
        }
    }, [state.success]);
    const cancelHandler = () => {
        toggleModal(false);
    };
    return (React.createElement(styles_1.ForgotPasswordModal, null,
        React.createElement("div", { className: "forgotPasswordModalContent" },
            React.createElement("div", { className: "forgotPasswordModalTitle" }, "Forgot password"),
            React.createElement("div", { className: "forgotPasswordModalText" },
                React.createElement("p", null, "Enter your email address and we will send you a link to reset your password.")),
            React.createElement("input", { className: "forgotPasswordModalInput", onChange: (e) => setState({ ...state, email: e.target.value }), type: "text", placeholder: "Email address" }),
            state.success && React.createElement("div", { className: "forgotPasswordModalSuccess" }, "Email sent!"),
            state.error && React.createElement("div", { className: "forgotPasswordModalError" }, errorMessage),
            state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) :
                React.createElement("div", { className: "forgotPasswordModalButtons" },
                    React.createElement("button", { className: "forgotPasswordButton", onClick: handleForgotPassword }, "Send"),
                    React.createElement("button", { className: "closeButton", onClick: cancelHandler }, "Cancel")))));
};
exports.ForgotPasswordModal = ForgotPasswordModal;
//# sourceMappingURL=ForgotPasswordModal.js.map
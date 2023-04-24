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
exports.ConfirmEmailModal = void 0;
const aws_amplify_1 = require("aws-amplify");
const styles_1 = require("../styles");
const react_1 = require("react");
const aws_amplify_2 = require("aws-amplify");
const aws_exports_1 = __importDefault(require("../../../../aws-exports"));
const react_router_dom_1 = require("react-router-dom");
const React = __importStar(require("react"));
aws_amplify_2.Amplify.configure(aws_exports_1.default);
const ConfirmEmailModal = ({ email, toggleModal }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [code, setCode] = (0, react_1.useState)('');
    const [modalTitle, setModalTitle] = (0, react_1.useState)('Confirm your email');
    const handleConfirm = async () => {
        try {
            await aws_amplify_1.Auth.confirmSignUp(email, code);
            setModalTitle('Email confirmed');
        }
        catch (error) {
            if (error.code === 'CodeMismatchException') {
                setModalTitle('Incorrect code');
            }
            else if (error.code === 'ExpiredCodeException') {
                setModalTitle('Code expired, please request a new one');
            }
            else if (error.code === 'LimitExceededException') {
                setModalTitle('Too many attempts, please request a new code');
            }
            else if (error.toString().includes('Confirmation code cannot be empty')) {
                setModalTitle('Please enter a code');
            }
        }
    };
    return (React.createElement(styles_1.ConfirmEmailModal, null,
        React.createElement("div", { className: "confirmEmailModalContent" },
            React.createElement("div", { className: "confirmEmailModalTitle" }, modalTitle),
            React.createElement("div", { className: "confirmEmailModalText" },
                React.createElement("p", null, "We have sent you a confirmation code to your email address. Please enter it below to confirm your email address.")),
            React.createElement("input", { className: "confirmEmailModalInput", type: "text", placeholder: "Confirmation code", value: code, onChange: (e) => setCode(e.target.value) }),
            React.createElement("div", { className: "confirmEmailModalButtons" },
                React.createElement("button", { className: "confirmEmailButton", onClick: handleConfirm }, "Confirm"),
                modalTitle === 'Email confirmed' && React.createElement("button", { className: "closeButton", onClick: () => { toggleModal(); navigate('/login'); } }, "Close")))));
};
exports.ConfirmEmailModal = ConfirmEmailModal;
//# sourceMappingURL=ConfirmEmailModal.js.map
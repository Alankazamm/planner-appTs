import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ForgotPasswordModal as Modal } from './Modal.styles';
import spinner from '/src/assets/svg/spinner-uol.svg';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { messageHandler } from '../../../api/utils/cognitoErrorsHandler';
export const ForgotPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        email: '',
        loading: false,
        error: false,
        success: false,
    });
    const handleForgotPassword = () => {
        setState({ ...state, loading: true });
        try {
            Auth.forgotPassword(state.email)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage(messageHandler(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            setErrorMessage(messageHandler(error));
            setState({ ...state, loading: false, error: true });
        }
    };
    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal(true);
            }, 2000);
        }
    }, [state.success]);
    const cancelHandler = () => {
        toggleModal(false);
    };
    return (_jsx(Modal, { children: _jsxs("div", { className: "forgotPasswordModalContent", children: [_jsx("div", { className: "forgotPasswordModalTitle", children: "Forgot password" }), _jsx("div", { className: "forgotPasswordModalText", children: _jsx("p", { children: "Enter your email address and we will send you a link to reset your password." }) }), _jsx("input", { className: "forgotPasswordModalInput", onChange: (e) => setState({ ...state, email: e.target.value }), type: "text", placeholder: "Email address" }), state.success && _jsx("div", { className: "forgotPasswordModalSuccess", children: "Email sent!" }), state.error && _jsx("div", { className: "forgotPasswordModalError", children: errorMessage }), state.loading ? _jsx("img", { alt: "loading spinner", src: spinner }) :
                    _jsxs("div", { className: "forgotPasswordModalButtons", children: [_jsx("button", { className: "forgotPasswordButton", onClick: handleForgotPassword, children: "Send" }), _jsx("button", { className: "closeButton", onClick: cancelHandler, children: "Cancel" })] })] }) }));
};

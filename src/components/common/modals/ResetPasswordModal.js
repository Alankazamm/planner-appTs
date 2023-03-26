import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResetPasswordModal as Modal } from './Modal.styles';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import spinner from '/src/assets/svg/spinner-uol.svg';
import { useEffect } from 'react';
import { messageHandler } from '../../../helpers/cognitoErrorsHandler';
export const ResetPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
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
            Auth.forgotPasswordSubmit(state.email, state.verificationcode, state.newpassword)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage(messageHandler(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            console.log(error, 'error');
            setState({ ...state, loading: false, error: true });
        }
    };
    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal();
            }, 2000);
        }
    }, [state.success]);
    return (_jsx(Modal, { children: _jsxs("div", { className: "resetPasswordModalContent", children: [_jsx("div", { className: "resetPasswordModalTitle", children: "Set new password" }), _jsx("div", { className: "resetPasswordModalText", children: _jsx("p", { children: "Enter your new password below." }) }), _jsx("input", { className: "resetPasswordModalInput", name: "email", type: "text", placeholder: "Email", onChange: e => inputChange(e) }), _jsx("input", { className: "resetPasswordModalInput", name: "verificationcode", type: "text", placeholder: "Verification code", onChange: e => inputChange(e) }), _jsx("input", { className: "resetPasswordModalInput", name: "newpassword", type: "password", placeholder: "New password", onChange: e => inputChange(e) }), state.success && _jsx("div", { className: "resetPasswordModalSuccess", children: "Password changed! Please, login" }), state.error && _jsx("div", { className: "resetPasswordModalError", children: errorMessage }), state.loading ? _jsx("img", { alt: "loading spinner", src: spinner }) :
                    _jsxs("div", { className: "resetPasswordModalButtons", children: [_jsx("button", { className: "resetPasswordButton", onClick: handleResetPassword, children: "Reset password" }), _jsx("button", { className: "closeButton", onClick: toggleModal, children: "Cancel" })] })] }) }));
};

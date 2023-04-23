import { ResetPasswordModal as Modal } from '../styles';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import spinner from '/src/assets/svg/spinner-uol.svg';
import { useEffect } from 'react';
import { messageHandler } from '../../../../api/utils/cognitoErrorsHandler';
import * as React from "react";
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
    return (React.createElement(Modal, null,
        React.createElement("div", { className: "resetPasswordModalContent" },
            React.createElement("div", { className: "resetPasswordModalTitle" }, "Set new password"),
            React.createElement("div", { className: "resetPasswordModalText" },
                React.createElement("p", null, "Enter your new password below.")),
            React.createElement("input", { className: "resetPasswordModalInput", name: "email", type: "text", placeholder: "Email", onChange: e => inputChange(e) }),
            React.createElement("input", { className: "resetPasswordModalInput", name: "verificationcode", type: "text", placeholder: "Verification code", onChange: e => inputChange(e) }),
            React.createElement("input", { className: "resetPasswordModalInput", name: "newpassword", type: "password", placeholder: "New password", onChange: e => inputChange(e) }),
            state.success && React.createElement("div", { className: "resetPasswordModalSuccess" }, "Password changed! Please, login"),
            state.error && React.createElement("div", { className: "resetPasswordModalError" }, errorMessage),
            state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner }) :
                React.createElement("div", { className: "resetPasswordModalButtons" },
                    React.createElement("button", { className: "resetPasswordButton", onClick: handleResetPassword }, "Reset password"),
                    React.createElement("button", { className: "closeButton", onClick: toggleModal }, "Cancel")))));
};
//# sourceMappingURL=ResetPasswordModal.js.map
import { ForgotPasswordModal as Modal } from './Modal.styles';
import spinner from '/src/assets/svg/spinner-uol.svg';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { messageHandler } from '../../../api/utils/cognitoErrorsHandler';
import React from "react";
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
    return (React.createElement(Modal, null,
        React.createElement("div", { className: "forgotPasswordModalContent" },
            React.createElement("div", { className: "forgotPasswordModalTitle" }, "Forgot password"),
            React.createElement("div", { className: "forgotPasswordModalText" },
                React.createElement("p", null, "Enter your email address and we will send you a link to reset your password.")),
            React.createElement("input", { className: "forgotPasswordModalInput", onChange: (e) => setState({ ...state, email: e.target.value }), type: "text", placeholder: "Email address" }),
            state.success && React.createElement("div", { className: "forgotPasswordModalSuccess" }, "Email sent!"),
            state.error && React.createElement("div", { className: "forgotPasswordModalError" }, errorMessage),
            state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner }) :
                React.createElement("div", { className: "forgotPasswordModalButtons" },
                    React.createElement("button", { className: "forgotPasswordButton", onClick: handleForgotPassword }, "Send"),
                    React.createElement("button", { className: "closeButton", onClick: cancelHandler }, "Cancel")))));
};

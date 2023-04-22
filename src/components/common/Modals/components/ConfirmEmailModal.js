import { Auth } from 'aws-amplify';
import { ConfirmEmailModal as Modal } from '../styles';
import { useState } from 'react';
import { Amplify } from "aws-amplify";
import awsmobile from "../../../../aws-exports";
import { useNavigate } from 'react-router-dom';
import * as React from "react";
Amplify.configure(awsmobile);
export const ConfirmEmailModal = ({ email, toggleModal }) => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [modalTitle, setModalTitle] = useState('Confirm your email');
    const handleConfirm = async () => {
        try {
            await Auth.confirmSignUp(email, code);
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
    return (React.createElement(Modal, null,
        React.createElement("div", { className: "confirmEmailModalContent" },
            React.createElement("div", { className: "confirmEmailModalTitle" }, modalTitle),
            React.createElement("div", { className: "confirmEmailModalText" },
                React.createElement("p", null, "We have sent you a confirmation code to your email address. Please enter it below to confirm your email address.")),
            React.createElement("input", { className: "confirmEmailModalInput", type: "text", placeholder: "Confirmation code", value: code, onChange: (e) => setCode(e.target.value) }),
            React.createElement("div", { className: "confirmEmailModalButtons" },
                React.createElement("button", { className: "confirmEmailButton", onClick: handleConfirm }, "Confirm"),
                modalTitle === 'Email confirmed' && React.createElement("button", { className: "closeButton", onClick: () => { toggleModal(); navigate('/login'); } }, "Close")))));
};

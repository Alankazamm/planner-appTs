import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Auth } from 'aws-amplify';
import { ConfirmEmailModal as Modal } from '../modals/Modal.styles';
import { useState } from 'react';
import { Amplify } from "aws-amplify";
import awsmobile from "../../../aws-exports";
import { useNavigate } from 'react-router-dom';
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
    return (_jsx(Modal, { children: _jsxs("div", { className: "confirmEmailModalContent", children: [_jsx("div", { className: "confirmEmailModalTitle", children: modalTitle }), _jsx("div", { className: "confirmEmailModalText", children: _jsx("p", { children: "We have sent you a confirmation code to your email address. Please enter it below to confirm your email address." }) }), _jsx("input", { className: "confirmEmailModalInput", type: "text", placeholder: "Confirmation code", value: code, onChange: (e) => setCode(e.target.value) }), _jsxs("div", { className: "confirmEmailModalButtons", children: [_jsx("button", { className: "confirmEmailButton", onClick: handleConfirm, children: "Confirm" }), _jsx("button", { className: "closeButton", onClick: toggleModal, children: "Cancel" }), modalTitle === 'Email confirmed' && _jsx("button", { className: "closeButton", onClick: () => { toggleModal(); navigate('/login'); }, children: "Close" })] })] }) }));
};

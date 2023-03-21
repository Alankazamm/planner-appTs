import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Auth } from 'aws-amplify';
import { ConfirmModal } from './../error-handling/modals/Modal.styles';
import { useState } from 'react';
export const ConfirmEmailModal = ({ email, toggleConfirm }) => {
    const [code, setCode] = useState('');
    const handleConfirm = async () => {
        try {
            await Auth.confirmSignUp(email, code);
            console.log('success');
        }
        catch (error) {
            console.log('error confirming sign up', error);
        }
    };
    return (_jsx(ConfirmModal, { children: _jsxs("div", { className: "confirmModalContent", children: [_jsx("div", { className: "confirmModalTitle", children: _jsx("h5", { className: "confirmModalText", children: "Confirm your email" }) }), _jsxs("div", { className: "confirmModalText", children: [_jsx("p", { children: "We have sent you an email to confirm your account. Please check your inbox." }), _jsx("p", { children: " Code: " }), _jsx("input", { placeholder: "code", type: "text", onChange: (e) => setCode(e.target.value) })] }), _jsxs("div", { className: "confirmModalText", children: [_jsx("button", { onClick: handleConfirm, type: "button", className: "btn btn-primary", children: "Confirm" }), _jsx("button", { type: "button", className: "btn btn-secondary", onClick: toggleConfirm, children: "Cancel" })] })] }) }));
};

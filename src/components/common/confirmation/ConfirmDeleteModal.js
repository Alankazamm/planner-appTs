import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ConfirmModal } from './../error-handling/modal/Modal.styles';
const warningIcon = require('./../../../assets/icons/warning.svg');
export const ConfirmDeleteModal = ({ actionFunction, value, showModal }) => {
    const actionHandler = () => {
        value.id ? actionFunction(value.id) : actionFunction(value.dayOfWeek);
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    const cancelHandler = () => {
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    return (_jsx(ConfirmModal, { children: _jsxs("div", { className: "confirmModalContent", children: [_jsxs("div", { className: "confirmModalTitle", children: [_jsx("img", { src: warningIcon, alt: "warning icon" }), value.id && _jsx("h2", { children: "Are you sure you want to delete this task?" }), value.dayOfWeek && _jsxs("h3", { children: ["Are you sure you want to delete all tasks for ", value.dayOfWeek, "?"] })] }), _jsx("div", { className: "confirmModalText", children: _jsx("p", { children: "This action cannot be undone." }) }), _jsxs("div", { className: "confirmModalButtons", children: [_jsx("button", { className: "closeButton", onClick: cancelHandler, children: "Cancel" }), _jsx("button", { className: "confirmDeleteButton", onClick: actionHandler, children: "Delete" })] })] }) }));
};

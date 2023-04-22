import { ConfirmModal } from '../styles';
import warningIcon from '/src/assets/svg/icon-warning.svg';
import * as React from "react";
export const ConfirmDeleteModal = ({ actionFunction, value, showModal }) => {
    const actionHandler = () => {
        value.id ? actionFunction(value.id) : actionFunction(value.dayOfWeek);
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    const cancelHandler = () => {
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    return (React.createElement(ConfirmModal, null,
        React.createElement("div", { className: "confirmModalContent" },
            React.createElement("div", { className: "confirmModalTitle" },
                React.createElement("img", { src: warningIcon, alt: "warning icon" }),
                value.id && React.createElement("h2", null, "Are you sure you want to delete this task?"),
                value.dayOfWeek && React.createElement("h3", null,
                    "Are you sure you want to delete all tasks for ",
                    value.dayOfWeek,
                    "?")),
            React.createElement("div", { className: "confirmModalText" },
                React.createElement("p", null, "This action cannot be undone.")),
            React.createElement("div", { className: "confirmModalButtons" },
                React.createElement("button", { className: "closeButton", onClick: cancelHandler }, "Cancel"),
                React.createElement("button", { className: "confirmDeleteButton", onClick: actionHandler }, "Delete")))));
};

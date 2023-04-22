import { WarningModal } from './Modal.styles';
import warningIcon from "/src/assets/svg/icon-warning.svg";
import React from "react";
export const TaskWarnigModal = ({ toggleModal }) => {
    return (React.createElement(WarningModal, null,
        React.createElement("div", { className: "warningModalContent" },
            React.createElement("div", { className: "warnigModalTitle" },
                React.createElement("img", { src: warningIcon, alt: "warning icon" }),
                React.createElement("h2", null, "Warning")),
            React.createElement("div", { className: "warningModalText" },
                React.createElement("p", null, "Maybe there is more tasks than the display limit. Please, try to filter the tasks by desciption if you are not able to find the task you are looking for.")),
            React.createElement("div", { className: "warningModalButtons" },
                React.createElement("button", { className: "closeButton", onClick: e => toggleModal(false) }, "Ok")))));
};

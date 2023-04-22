import { WarningModal } from "../styles";
import warningIcon from "/src/assets/svg/icon-warning.svg";
import * as React from "react";
export const SignErrorModal = ({ toggleModal }) => {
    return (React.createElement(WarningModal, null,
        React.createElement("div", { className: "warningModalContent" },
            React.createElement("div", { className: "warnigModalTitle" },
                React.createElement("img", { src: warningIcon, alt: "warning icon" }),
                React.createElement("h2", null, "Warning")),
            React.createElement("div", { className: "warningModalText" },
                React.createElement("p", null, "There was an error while trying to sign up. Please, try to refresh the page or try again later.")),
            React.createElement("div", { className: "warningModalButtons" },
                React.createElement("button", { className: "closeButton", onClick: (e) => toggleModal() }, "Ok")))));
};

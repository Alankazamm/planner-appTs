import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { WarningModal } from "./Modal.styles";
import warningIcon from "/src/assets/svg/icon-warning.svg";
export const SignErrorModal = ({ toggleModal }) => {
    return (_jsx(WarningModal, { children: _jsxs("div", { className: "warningModalContent", children: [_jsxs("div", { className: "warnigModalTitle", children: [_jsx("img", { src: warningIcon, alt: "warning icon" }), _jsx("h2", { children: "Warning" })] }), _jsx("div", { className: "warningModalText", children: _jsx("p", { children: "There was an error while trying to sign up. Please, try to refresh the page or try again later." }) }), _jsx("div", { className: "warningModalButtons", children: _jsx("button", { className: "closeButton", onClick: (e) => toggleModal(), children: "Ok" }) })] }) }));
};

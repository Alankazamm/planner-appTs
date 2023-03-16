import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { WarningModal } from './Modal.styles';
const warningIcon = require('./../../../../assets/svg/icon-warning.svg');
export const TaskWarnigModal = ({ toggleModal }) => {
    return (_jsx(WarningModal, { children: _jsxs("div", { className: "warningModalContent", children: [_jsxs("div", { className: "warnigModalTitle", children: [_jsx("img", { src: warningIcon, alt: "warning icon" }), _jsx("h2", { children: "Warning" })] }), _jsx("div", { className: "warningModalText", children: _jsx("p", { children: "Maybe there is more tasks than the display limit. Please, try to filter the tasks by desciption if you are not able to find the task you are looking for." }) }), _jsx("div", { className: "warningModalButtons", children: _jsx("button", { className: "closeButton", onClick: e => toggleModal(false), children: "Ok" }) })] }) }));
};

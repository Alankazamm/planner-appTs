import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorModal } from './Modal.styles';
import { ErrorMessages } from './../../../../actions/types';
export const TasksErrorModal = (props) => {
    const { displayErrorModal, setDisplayErrorModal } = props;
    const closeModal = () => {
        setDisplayErrorModal(undefined);
    };
    const redirectToLogin = () => {
        window.location.href = "/login";
    };
    if (displayErrorModal === ErrorMessages.ACCESS_DENIED || displayErrorModal === ErrorMessages.ACCESS_DENIEDII) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Access denied" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "You are not authorized to access this resource. This could be due to invalid credentials or an expired session. Please log in again." }) }), _jsxs("div", { className: "errorModalButtons", children: [_jsx("button", { className: "closeButton", onClick: closeModal, children: "Close" }), _jsx("button", { className: "loginButton", onClick: redirectToLogin, children: "Login" })] })] }) }));
    }
    else if (displayErrorModal === ErrorMessages.INTERNAL_SERVER_ERROR) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Internal server error" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but something went wrong. Please try again later." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Event not found" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but we could not find the event in our database." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND_WEEK) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Event not found in week" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but we haven't found any events for the selected week in our database to delete." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else if (displayErrorModal === ErrorMessages.BAD_REQUEST) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Invalid data" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but the data you are trying to submit is invalid." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else {
        return null;
    }
};

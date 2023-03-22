import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { eventStatus } from '../../../contexts/tasksContext';
import { ErrorModal } from './Modal.styles';
export const TasksErrorModal = (props) => {
    const { displayErrorModal, setDisplayErrorModal } = props;
    const closeModal = () => {
        setDisplayErrorModal(undefined);
    };
    const redirectToLogin = () => {
        window.location.href = "/login";
    };
    if (displayErrorModal === eventStatus["Access denied"]) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Access denied" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "You are not authorized to access this resource. This could be due to invalid credentials or an expired session. Please log in again." }) }), _jsxs("div", { className: "errorModalButtons", children: [_jsx("button", { className: "closeButton", onClick: closeModal, children: "Close" }), _jsx("button", { className: "loginButton", onClick: redirectToLogin, children: "Login" })] })] }) }));
    }
    else if (displayErrorModal === eventStatus["Internal server error"]) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Internal server error" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but something went wrong. Please try again later." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else if (displayErrorModal === eventStatus["Event not found"]) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Event not found" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but the event you are looking for does not exist." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else if (displayErrorModal === eventStatus["Invalid data"]) {
        return (_jsx(ErrorModal, { children: _jsxs("div", { className: "errorModalContent", children: [_jsx("div", { className: "errorModalTitle", children: _jsx("h2", { children: "Invalid data" }) }), _jsx("div", { className: "errorModalText", children: _jsx("p", { children: "We are sorry for the inconvenience, but the data you are trying to submit is invalid." }) }), _jsx("div", { className: "errorModalButtons", children: _jsx("button", { className: "closeButton", onClick: closeModal, children: "Ok" }) })] }) }));
    }
    else {
        return null;
    }
};

import { ErrorModal } from '../styles';
import { ErrorMessages } from '../../../../api/services/types';
import * as React from "react";
export const TasksErrorModal = (props) => {
    const { displayErrorModal, setDisplayErrorModal } = props;
    const closeModal = () => {
        setDisplayErrorModal(undefined);
    };
    const redirectToLogin = () => {
        window.location.href = "/login";
    };
    if (displayErrorModal === ErrorMessages.ACCESS_DENIED
        || displayErrorModal === ErrorMessages.ACCESS_DENIEDII
        || displayErrorModal === ErrorMessages.UNAUTHORIZED) {
        return (React.createElement(ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Access denied")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "You are not authorized to access this resource. This could be due to invalid credentials or an expired session. Please log in again.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Close"),
                    React.createElement("button", { className: "loginButton", onClick: redirectToLogin }, "Login")))));
    }
    else if (displayErrorModal === ErrorMessages.INTERNAL_SERVER_ERROR) {
        return (React.createElement(ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Internal server error")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but something went wrong. Please try again later.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND) {
        return (React.createElement(ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Event not found")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but we could not find the event in our database.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND_WEEK) {
        return (React.createElement(ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Event not found in week")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but we haven't found any events for the selected week in our database to delete.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === ErrorMessages.BAD_REQUEST) {
        return (React.createElement(ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Invalid data")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but the data you are trying to submit is invalid.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else {
        return null;
    }
};
//# sourceMappingURL=TasksErrorModal.js.map
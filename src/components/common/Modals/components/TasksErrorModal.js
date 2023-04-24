"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksErrorModal = void 0;
const styles_1 = require("../styles");
const types_1 = require("../../../../api/services/types");
const React = __importStar(require("react"));
const TasksErrorModal = (props) => {
    const { displayErrorModal, setDisplayErrorModal } = props;
    const closeModal = () => {
        setDisplayErrorModal(undefined);
    };
    const redirectToLogin = () => {
        window.location.href = "/login";
    };
    if (displayErrorModal === types_1.ErrorMessages.ACCESS_DENIED
        || displayErrorModal === types_1.ErrorMessages.ACCESS_DENIEDII
        || displayErrorModal === types_1.ErrorMessages.UNAUTHORIZED) {
        return (React.createElement(styles_1.ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Access denied")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "You are not authorized to access this resource. This could be due to invalid credentials or an expired session. Please log in again.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Close"),
                    React.createElement("button", { className: "loginButton", onClick: redirectToLogin }, "Login")))));
    }
    else if (displayErrorModal === types_1.ErrorMessages.INTERNAL_SERVER_ERROR) {
        return (React.createElement(styles_1.ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Internal server error")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but something went wrong. Please try again later.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === types_1.ErrorMessages.NOT_FOUND) {
        return (React.createElement(styles_1.ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Event not found")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but we could not find the event in our database.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === types_1.ErrorMessages.NOT_FOUND_WEEK) {
        return (React.createElement(styles_1.ErrorModal, null,
            React.createElement("div", { className: "errorModalContent" },
                React.createElement("div", { className: "errorModalTitle" },
                    React.createElement("h2", null, "Event not found in week")),
                React.createElement("div", { className: "errorModalText" },
                    React.createElement("p", null, "We are sorry for the inconvenience, but we haven't found any events for the selected week in our database to delete.")),
                React.createElement("div", { className: "errorModalButtons" },
                    React.createElement("button", { className: "closeButton", onClick: closeModal }, "Ok")))));
    }
    else if (displayErrorModal === types_1.ErrorMessages.BAD_REQUEST) {
        return (React.createElement(styles_1.ErrorModal, null,
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
exports.TasksErrorModal = TasksErrorModal;
//# sourceMappingURL=TasksErrorModal.js.map
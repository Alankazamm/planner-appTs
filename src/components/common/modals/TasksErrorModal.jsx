"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksErrorModal = void 0;
const Modal_styles_1 = require("./Modal.styles");
const types_1 = require("../../../api/services/types");
const react_1 = __importDefault(require("react"));
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
        return (<Modal_styles_1.ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Access denied</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            You are not authorized to access this resource. This could be due to
                            invalid credentials or an expired session.
                            Please log in again.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Close</button>
                        <button className="loginButton" onClick={redirectToLogin}>Login</button>
                    </div>
                </div>
            </Modal_styles_1.ErrorModal>);
    }
    else if (displayErrorModal === types_1.ErrorMessages.INTERNAL_SERVER_ERROR) {
        return (<Modal_styles_1.ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Internal server error</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            We are sorry for the inconvenience, but something went wrong. Please
                            try again later.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </Modal_styles_1.ErrorModal>);
    }
    else if (displayErrorModal === types_1.ErrorMessages.NOT_FOUND) {
        return (<Modal_styles_1.ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Event not found</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            We are sorry for the inconvenience, but we could not find the event in our database.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </Modal_styles_1.ErrorModal>);
    }
    else if (displayErrorModal === types_1.ErrorMessages.NOT_FOUND_WEEK) {
        return (<Modal_styles_1.ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Event not found in week</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            We are sorry for the inconvenience, but we haven't found any events for the selected week in our database to delete.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </Modal_styles_1.ErrorModal>);
    }
    else if (displayErrorModal === types_1.ErrorMessages.BAD_REQUEST) {
        return (<Modal_styles_1.ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Invalid data</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            We are sorry for the inconvenience, but the data you are trying to
                            submit is invalid.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </Modal_styles_1.ErrorModal>);
    }
    else {
        return null;
    }
};
exports.TasksErrorModal = TasksErrorModal;

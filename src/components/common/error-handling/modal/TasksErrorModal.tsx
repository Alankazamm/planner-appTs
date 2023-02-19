import React from 'react'
import { eventStatus } from '../../../../contexts/tasksContext'
import ErrorModal from './ErrorModal.styles';

type props = {
    displayErrorModal: eventStatus|undefined,
    setDisplayErrorModal: React.Dispatch<React.SetStateAction<eventStatus|undefined>>,
}
export const TasksErrorModal = (props: props) => {
    const { displayErrorModal, setDisplayErrorModal } = props;
    const closeModal = () => {
        setDisplayErrorModal(undefined);
    }
    const redirectToLogin = () => {
        window.location.href = "/login";
    }

    if (displayErrorModal === eventStatus["Access denied"]) {
        return (
            <ErrorModal>
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
            </ErrorModal>
        )
    }
    else if (displayErrorModal === eventStatus["Internal server error"]) {
        return (
            <ErrorModal>
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
            </ErrorModal>
            )
    }
    else if (displayErrorModal === eventStatus["Event not found"]) {
        return (
            <ErrorModal>
                <div className="errorModalContent">
                    <div className="errorModalTitle">
                        <h2>Event not found</h2>
                    </div>
                    <div className="errorModalText">
                        <p>
                            We are sorry for the inconvenience, but the event you are looking for
                            does not exist.
                        </p>
                    </div>
                    <div className="errorModalButtons">
                        <button className="closeButton" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </ErrorModal>
        )
    }
    else {
        return null;
    }
}

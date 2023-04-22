import { ErrorModal } from '../styles';
import { ErrorMessages } from '../../../../api/services/types';
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
        return (<ErrorModal>
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
            </ErrorModal>);
    }
    else if (displayErrorModal === ErrorMessages.INTERNAL_SERVER_ERROR) {
        return (<ErrorModal>
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
            </ErrorModal>);
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND) {
        return (<ErrorModal>
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
            </ErrorModal>);
    }
    else if (displayErrorModal === ErrorMessages.NOT_FOUND_WEEK) {
        return (<ErrorModal>
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
            </ErrorModal>);
    }
    else if (displayErrorModal === ErrorMessages.BAD_REQUEST) {
        return (<ErrorModal>
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
            </ErrorModal>);
    }
    else {
        return null;
    }
};

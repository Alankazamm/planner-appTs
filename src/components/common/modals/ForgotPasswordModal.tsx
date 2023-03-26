
import { ForgotPasswordModal as Modal } from './Modal.styles';
import spinner from '/src/assets/svg/spinner-uol.svg'
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { messageHandler } from '../../../helpers/cognitoErrorsHandler';

export const ForgotPasswordModal = ({ toggleModal }: { toggleModal: (sended: boolean) => void }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        email: '',
        loading: false,
        error: false,
        success: false,
    });
    const handleForgotPassword = () => {
        setState({ ...state, loading: true });
        try {
            Auth.forgotPassword(state.email)
                .then(() => {
                    
                    setState({ ...state, loading: false, success: true });
                })
                .catch((err) => {
                    setErrorMessage(messageHandler(err));
                    setState({ ...state, loading: false, error: true });
                });
        } catch (error) {
            setErrorMessage(messageHandler(error));
            setState({ ...state, loading: false, error: true });
        }
    }
    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal(true);

            }, 2000);
        }
    }, [state.success]);
    const cancelHandler = () => {
        toggleModal(false);
    }
    return (
        <Modal>
            <div className="forgotPasswordModalContent">
                <div className="forgotPasswordModalTitle">
                    Forgot password
                </div>
                <div className="forgotPasswordModalText">
                    <p>Enter your email address and we will send you a link to reset your password.</p>
                </div>
                <input className="forgotPasswordModalInput" onChange={(e) => setState({...state, email: e.target.value})} type="text" placeholder="Email address" />
                {state.success && <div className="forgotPasswordModalSuccess">Email sent!</div>}
                {state.error && <div className="forgotPasswordModalError">{errorMessage}</div>}
                {state.loading ? <img alt="loading spinner" src={spinner}></img> :
                    <div className="forgotPasswordModalButtons">
                        <button className="forgotPasswordButton" onClick={handleForgotPassword}>Send</button>
                        <button className="closeButton" onClick={cancelHandler}>Cancel</button>
                    </div>
                }
               
            </div>
        </Modal>
    )
    
}

import { ResetPasswordModal as Modal } from '../styles';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import spinner from '/src/assets/svg/spinner-uol.svg'
import { useEffect } from 'react';
import { messageHandler } from '../../../api/utils/cognitoErrorsHandler';

export const ResetPasswordModal = ({ toggleModal }: { toggleModal: () => void }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        email: '',
        verificationcode: '',
        newpassword: '',
        loading: false,
        error: false,
        success: false,
    });

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleResetPassword = () => {
        setState({ ...state, loading: true });
        try {
            Auth.forgotPasswordSubmit(state.email, state.verificationcode, state.newpassword)
                .then(() => {
                    setState({ ...state, loading: false, success: true });
                })
                .catch((err) => {
                    setErrorMessage(messageHandler(err));
                    setState({ ...state, loading: false, error: true });
                });
        } catch (error) {
            console.log(error ,'error');
            setState({ ...state, loading: false, error: true });
        }
    }

    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal();
            }, 2000);
        }
    }, [state.success]);

    return (
        <Modal>
            <div className="resetPasswordModalContent">
                <div className="resetPasswordModalTitle">
                    Set new password
                </div>
                <div className="resetPasswordModalText">
                    <p>Enter your new password below.</p>
                </div>
                <input className="resetPasswordModalInput" name="email" type="text" placeholder="Email" onChange={e => inputChange(e)} />
                <input className="resetPasswordModalInput" name="verificationcode" type="text" placeholder="Verification code" onChange={e => inputChange(e)} />
                <input className="resetPasswordModalInput" name="newpassword" type="password" placeholder="New password" onChange={e => inputChange(e)} />
                {state.success && <div className="resetPasswordModalSuccess">Password changed! Please, login</div>}
                {state.error && <div className="resetPasswordModalError">{errorMessage}</div>}
                {state.loading ? <img alt="loading spinner" src={spinner}></img> :
                    <div className="resetPasswordModalButtons">
                        <button className="resetPasswordButton" onClick={handleResetPassword}>Reset password</button>
                        <button className="closeButton" onClick={toggleModal}>Cancel</button>
                    </div>
                }
                
            </div>
                
        </Modal>
    )
}
import { Auth } from 'aws-amplify';
import { ConfirmModal } from './../error-handling/modals/Modal.styles';
import { useState } from 'react';
export const ConfirmEmailModal = ({ email, toggleConfirm }: { email: string, toggleConfirm: () => void }) => {
    const [code, setCode] = useState<string>('');
    const handleConfirm = async () => {
        try {
            await Auth.confirmSignUp(email, code);
            console.log('success');
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }
    return (
        <ConfirmModal>
            <div className="confirmModalContent">
                <div className="confirmModalTitle">
                    <h5 className="confirmModalText">Confirm your email</h5>
                </div>
                <div className="confirmModalText">
                    <p>
                        We have sent you an email to confirm your account. Please check your inbox.
                    </p>
                    <p> Code: </p>
                    <input placeholder="code" type="text" onChange={(e) => setCode(e.target.value)} />
                </div>
                <div className="confirmModalText">
                    <button onClick={handleConfirm} type="button" className="btn btn-primary">Confirm</button>
                    <button type="button" className="btn btn-secondary" onClick={toggleConfirm}>Cancel</button>
                </div>
                
            </div>
        </ConfirmModal>
    )

}
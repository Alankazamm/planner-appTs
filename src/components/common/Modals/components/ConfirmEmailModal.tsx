import { Auth } from 'aws-amplify';
import { ConfirmEmailModal as Modal } from '../styles';
import { useState } from 'react';
import { Amplify } from "aws-amplify";
import awsmobile from "../../../../aws-exports";
import { useNavigate } from 'react-router-dom';

Amplify.configure(awsmobile);
export const ConfirmEmailModal = ({ email, toggleModal }: { email: string, toggleModal: () => void }) => {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>('');
    const [modalTitle, setModalTitle] = useState<string>('Confirm your email');
    const handleConfirm = async () => {
        try {
            await Auth.confirmSignUp(email, code);
            setModalTitle('Email confirmed');
        } catch (error:any) {
            if (error.code === 'CodeMismatchException') {
                setModalTitle('Incorrect code');
            } else if (error.code === 'ExpiredCodeException') {
                setModalTitle('Code expired, please request a new one');
            }
            else if (error.code === 'LimitExceededException') {
                setModalTitle('Too many attempts, please request a new code');
            }
            else if (error.toString().includes('Confirmation code cannot be empty')) {
                setModalTitle('Please enter a code');
            }
        }
            
    }
    return (
        <Modal>
            <div className="confirmEmailModalContent">
                <div className="confirmEmailModalTitle">
                    {modalTitle}
                </div>
                <div className="confirmEmailModalText">
                    <p>We have sent you a confirmation code to your email address. Please enter it below to confirm your email address.</p>
                </div>
             
                    <input className="confirmEmailModalInput" type="text" placeholder="Confirmation code" value={code} onChange={(e) => setCode(e.target.value)} />
               
                <div className="confirmEmailModalButtons">
                    <button className="confirmEmailButton" onClick={handleConfirm}>Confirm</button>
                    {modalTitle === 'Email confirmed' && <button className="closeButton" onClick={() => { toggleModal(); navigate('/login'); }}>Close</button>}
                </div>
            </div>


        </Modal>
    )

}
import { RenewTokenModal as Modal} from '../styles';
import { Auth } from 'aws-amplify';
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';

export const RenewTokenModal = () => {
    const {setDisplayRenewAccessTokenModal, signout} = useContext(UserContext);
    const renewToken = () => {
        try {
            Auth.currentSession().then((session) => {
                localStorage.removeItem("sessionToken");
                localStorage.removeItem("sessionRefreshToken");
                localStorage.removeItem("sessionAccessToken");
                localStorage.removeItem("sessionExpires");
                
                localStorage.setItem("sessionToken", session.getIdToken().getJwtToken());
                localStorage.setItem("sessionRefreshToken", session.getRefreshToken().getToken());
                localStorage.setItem("sessionAccessToken", session.getAccessToken().getJwtToken());
                localStorage.setItem("sessionExpires", session.getIdToken().getExpiration().toString());
                

            });
            setDisplayRenewAccessTokenModal(false);
        } catch (error) {
            console.log(error);//criar modal aqui para usuario renovar o token
        }
    }
    const logout = () => {
        setDisplayRenewAccessTokenModal(false);
        signout();
    }
    return (
        <Modal>
            <div className="renewTokenModalContent">
                <div className="renewTokenModalTitle">
                    Your session has expired
                </div>
                <div className="renewTokenModalText">
                    Your session has expired, please renew your session or logout.
                </div>
                <div className="renewTokenModalButtons">
                    <button className="renewTokenModalButton" onClick={renewToken}>Renew</button>
                    <button className="closeButton" onClick={logout}>Logout</button>
                </div>

            </div>
        </Modal>
    )
}
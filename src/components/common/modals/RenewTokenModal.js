import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RenewTokenModal as Modal } from './Modal.styles';
import { Auth } from 'aws-amplify';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/userContext';
export const RenewTokenModal = () => {
    const { setDisplayRenewAccessTokenModal, signout } = useContext(UserContext);
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
                setDisplayRenewAccessTokenModal(false);
            });
        }
        catch (error) {
            console.log(error); //criar modal aqui para usuario renovar o token
        }
    };
    const logout = () => {
        setDisplayRenewAccessTokenModal(false);
        signout();
    };
    return (_jsx(Modal, { children: _jsxs("div", { className: "renewTokenModalContent", children: [_jsx("div", { className: "renewTokenModalTitle", children: "Your session has expired" }), _jsx("div", { className: "renewTokenModalText", children: "Your session has expired, please renew your session or logout." }), _jsxs("div", { className: "renewTokenModalButtons", children: [_jsx("button", { className: "renewTokenModalButton", onClick: renewToken, children: "Renew" }), _jsx("button", { className: "closeButton", onClick: logout, children: "Logout" })] })] }) }));
};

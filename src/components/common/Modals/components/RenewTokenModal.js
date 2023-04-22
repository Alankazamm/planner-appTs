import { RenewTokenModal as Modal } from '../styles';
import { Auth } from 'aws-amplify';
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/usersContext';
import * as React from "react";
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
            });
            setDisplayRenewAccessTokenModal(false);
        }
        catch (error) {
            console.log(error); //criar modal aqui para usuario renovar o token
        }
    };
    const logout = () => {
        setDisplayRenewAccessTokenModal(false);
        signout();
    };
    return (React.createElement(Modal, null,
        React.createElement("div", { className: "renewTokenModalContent" },
            React.createElement("div", { className: "renewTokenModalTitle" }, "Your session has expired"),
            React.createElement("div", { className: "renewTokenModalText" }, "Your session has expired, please renew your session or logout."),
            React.createElement("div", { className: "renewTokenModalButtons" },
                React.createElement("button", { className: "renewTokenModalButton", onClick: renewToken }, "Renew"),
                React.createElement("button", { className: "closeButton", onClick: logout }, "Logout")))));
};

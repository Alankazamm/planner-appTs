"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenewTokenModal = void 0;
const Modal_styles_1 = require("./Modal.styles");
const aws_amplify_1 = require("aws-amplify");
const react_1 = require("react");
const userContext_1 = require("../../../contexts/userContext");
const react_2 = __importDefault(require("react"));
const RenewTokenModal = () => {
    const { setDisplayRenewAccessTokenModal, signout } = (0, react_1.useContext)(userContext_1.UserContext);
    const renewToken = () => {
        try {
            aws_amplify_1.Auth.currentSession().then((session) => {
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
    return (<Modal_styles_1.RenewTokenModal>
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
        </Modal_styles_1.RenewTokenModal>);
};
exports.RenewTokenModal = RenewTokenModal;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenewTokenModal = void 0;
const styles_1 = require("../styles");
const aws_amplify_1 = require("aws-amplify");
const react_1 = require("react");
const usersContext_1 = require("../../../../contexts/usersContext");
const React = __importStar(require("react"));
const RenewTokenModal = () => {
    const { setDisplayRenewAccessTokenModal, signout } = (0, react_1.useContext)(usersContext_1.UserContext);
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
    return (React.createElement(styles_1.RenewTokenModal, null,
        React.createElement("div", { className: "renewTokenModalContent" },
            React.createElement("div", { className: "renewTokenModalTitle" }, "Your session has expired"),
            React.createElement("div", { className: "renewTokenModalText" }, "Your session has expired, please renew your session or logout."),
            React.createElement("div", { className: "renewTokenModalButtons" },
                React.createElement("button", { className: "renewTokenModalButton", onClick: renewToken }, "Renew"),
                React.createElement("button", { className: "closeButton", onClick: logout }, "Logout")))));
};
exports.RenewTokenModal = RenewTokenModal;
//# sourceMappingURL=RenewTokenModal.js.map
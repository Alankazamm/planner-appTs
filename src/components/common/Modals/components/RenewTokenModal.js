System.register(["../styles", "aws-amplify", "react", "../../../../contexts/usersContext"], function (exports_1, context_1) {
    "use strict";
    var styles_1, aws_amplify_1, react_1, usersContext_1, React, RenewTokenModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            }
        ],
        execute: function () {
            exports_1("RenewTokenModal", RenewTokenModal = () => {
                const { setDisplayRenewAccessTokenModal, signout } = react_1.useContext(usersContext_1.UserContext);
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
            });
        }
    };
});
//# sourceMappingURL=RenewTokenModal.js.map
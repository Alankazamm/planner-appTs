System.register(["../styles", "react", "aws-amplify", "/src/assets/svg/spinner-uol.svg", "../../../../api/utils/cognitoErrorsHandler"], function (exports_1, context_1) {
    "use strict";
    var styles_1, react_1, aws_amplify_1, spinner_uol_svg_1, react_2, cognitoErrorsHandler_1, React, ResetPasswordModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
                react_2 = react_1_1;
                React = react_1_1;
            },
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            },
            function (spinner_uol_svg_1_1) {
                spinner_uol_svg_1 = spinner_uol_svg_1_1;
            },
            function (cognitoErrorsHandler_1_1) {
                cognitoErrorsHandler_1 = cognitoErrorsHandler_1_1;
            }
        ],
        execute: function () {
            exports_1("ResetPasswordModal", ResetPasswordModal = ({ toggleModal }) => {
                const [errorMessage, setErrorMessage] = react_1.useState('');
                const [state, setState] = react_1.useState({
                    email: '',
                    verificationcode: '',
                    newpassword: '',
                    loading: false,
                    error: false,
                    success: false,
                });
                const inputChange = (e) => {
                    setState({ ...state, [e.target.name]: e.target.value });
                };
                const handleResetPassword = () => {
                    setState({ ...state, loading: true });
                    try {
                        aws_amplify_1.Auth.forgotPasswordSubmit(state.email, state.verificationcode, state.newpassword)
                            .then(() => {
                            setState({ ...state, loading: false, success: true });
                        })
                            .catch((err) => {
                            setErrorMessage(cognitoErrorsHandler_1.messageHandler(err));
                            setState({ ...state, loading: false, error: true });
                        });
                    }
                    catch (error) {
                        console.log(error, 'error');
                        setState({ ...state, loading: false, error: true });
                    }
                };
                react_2.useEffect(() => {
                    if (state.success) {
                        setTimeout(() => {
                            toggleModal();
                        }, 2000);
                    }
                }, [state.success]);
                return (React.createElement(styles_1.ResetPasswordModal, null,
                    React.createElement("div", { className: "resetPasswordModalContent" },
                        React.createElement("div", { className: "resetPasswordModalTitle" }, "Set new password"),
                        React.createElement("div", { className: "resetPasswordModalText" },
                            React.createElement("p", null, "Enter your new password below.")),
                        React.createElement("input", { className: "resetPasswordModalInput", name: "email", type: "text", placeholder: "Email", onChange: e => inputChange(e) }),
                        React.createElement("input", { className: "resetPasswordModalInput", name: "verificationcode", type: "text", placeholder: "Verification code", onChange: e => inputChange(e) }),
                        React.createElement("input", { className: "resetPasswordModalInput", name: "newpassword", type: "password", placeholder: "New password", onChange: e => inputChange(e) }),
                        state.success && React.createElement("div", { className: "resetPasswordModalSuccess" }, "Password changed! Please, login"),
                        state.error && React.createElement("div", { className: "resetPasswordModalError" }, errorMessage),
                        state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) :
                            React.createElement("div", { className: "resetPasswordModalButtons" },
                                React.createElement("button", { className: "resetPasswordButton", onClick: handleResetPassword }, "Reset password"),
                                React.createElement("button", { className: "closeButton", onClick: toggleModal }, "Cancel")))));
            });
        }
    };
});
//# sourceMappingURL=ResetPasswordModal.js.map
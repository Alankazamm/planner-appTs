System.register(["../styles", "/src/assets/svg/spinner-uol.svg", "react", "aws-amplify", "../../../../api/utils/cognitoErrorsHandler"], function (exports_1, context_1) {
    "use strict";
    var styles_1, spinner_uol_svg_1, react_1, aws_amplify_1, cognitoErrorsHandler_1, React, ForgotPasswordModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (spinner_uol_svg_1_1) {
                spinner_uol_svg_1 = spinner_uol_svg_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            },
            function (cognitoErrorsHandler_1_1) {
                cognitoErrorsHandler_1 = cognitoErrorsHandler_1_1;
            }
        ],
        execute: function () {
            exports_1("ForgotPasswordModal", ForgotPasswordModal = ({ toggleModal }) => {
                const [errorMessage, setErrorMessage] = react_1.useState('');
                const [state, setState] = react_1.useState({
                    email: '',
                    loading: false,
                    error: false,
                    success: false,
                });
                const handleForgotPassword = () => {
                    setState({ ...state, loading: true });
                    try {
                        aws_amplify_1.Auth.forgotPassword(state.email)
                            .then(() => {
                            setState({ ...state, loading: false, success: true });
                        })
                            .catch((err) => {
                            setErrorMessage(cognitoErrorsHandler_1.messageHandler(err));
                            setState({ ...state, loading: false, error: true });
                        });
                    }
                    catch (error) {
                        setErrorMessage(cognitoErrorsHandler_1.messageHandler(error));
                        setState({ ...state, loading: false, error: true });
                    }
                };
                react_1.useEffect(() => {
                    if (state.success) {
                        setTimeout(() => {
                            toggleModal(true);
                        }, 2000);
                    }
                }, [state.success]);
                const cancelHandler = () => {
                    toggleModal(false);
                };
                return (React.createElement(styles_1.ForgotPasswordModal, null,
                    React.createElement("div", { className: "forgotPasswordModalContent" },
                        React.createElement("div", { className: "forgotPasswordModalTitle" }, "Forgot password"),
                        React.createElement("div", { className: "forgotPasswordModalText" },
                            React.createElement("p", null, "Enter your email address and we will send you a link to reset your password.")),
                        React.createElement("input", { className: "forgotPasswordModalInput", onChange: (e) => setState({ ...state, email: e.target.value }), type: "text", placeholder: "Email address" }),
                        state.success && React.createElement("div", { className: "forgotPasswordModalSuccess" }, "Email sent!"),
                        state.error && React.createElement("div", { className: "forgotPasswordModalError" }, errorMessage),
                        state.loading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) :
                            React.createElement("div", { className: "forgotPasswordModalButtons" },
                                React.createElement("button", { className: "forgotPasswordButton", onClick: handleForgotPassword }, "Send"),
                                React.createElement("button", { className: "closeButton", onClick: cancelHandler }, "Cancel")))));
            });
        }
    };
});
//# sourceMappingURL=ForgotPasswordModal.js.map
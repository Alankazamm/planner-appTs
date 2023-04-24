System.register(["react", "react-router-dom", "../components/Forms/components/Containers/styles", "../components/common/Header/Header", "../components/Forms/components/Containers/ContentContainer", "../components/Forms/LoginForm/LoginForm", "../components/Forms/components/Button/FormButton", "../contexts/usersContext", "../reducers/formReducer", "../api/auth/login", "../components/common/Modals/components/ConfirmEmailModal", "../components/common/Modals/components/ForgotPasswordModal", "../components/common/Modals/components/ResetPasswordModal", "../styles", "../components/Aside/BgSection"], function (exports_1, context_1) {
    "use strict";
    var React, react_1, react_2, react_router_dom_1, styles_1, Header_1, ContentContainer_1, LoginForm_1, FormButton_1, usersContext_1, formReducer_1, login_1, ConfirmEmailModal_1, ForgotPasswordModal_1, ResetPasswordModal_1, styles_2, BgSection_1, firstRender, LogIn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
                react_1 = React_1;
                react_2 = React_1;
            },
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (Header_1_1) {
                Header_1 = Header_1_1;
            },
            function (ContentContainer_1_1) {
                ContentContainer_1 = ContentContainer_1_1;
            },
            function (LoginForm_1_1) {
                LoginForm_1 = LoginForm_1_1;
            },
            function (FormButton_1_1) {
                FormButton_1 = FormButton_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            },
            function (formReducer_1_1) {
                formReducer_1 = formReducer_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (ConfirmEmailModal_1_1) {
                ConfirmEmailModal_1 = ConfirmEmailModal_1_1;
            },
            function (ForgotPasswordModal_1_1) {
                ForgotPasswordModal_1 = ForgotPasswordModal_1_1;
            },
            function (ResetPasswordModal_1_1) {
                ResetPasswordModal_1 = ResetPasswordModal_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (BgSection_1_1) {
                BgSection_1 = BgSection_1_1;
            }
        ],
        execute: function () {
            firstRender = true;
            exports_1("LogIn", LogIn = () => {
                //hook's calls
                const { formState, dispatch } = react_1.useContext(usersContext_1.UserContext);
                const navigate = react_router_dom_1.useNavigate();
                const [showModal, setShowModal] = react_1.useState({
                    confirmModal: false,
                    forgotPasswordModal: {
                        show: false,
                        sended: false,
                    },
                });
                //functions
                const loginHandler = () => {
                    const email = formState.user.value;
                    const password = formState.loginPassword.value;
                    login_1.login({ email, password })(dispatch);
                };
                const toggleConfirmEmail = () => {
                    setShowModal({ ...showModal, confirmModal: !showModal.confirmModal });
                };
                const toggleForgotPassword = (sended) => {
                    setShowModal({ ...showModal, forgotPasswordModal: { show: !showModal.forgotPasswordModal.show, sended } });
                };
                const forgotLinkHandler = () => {
                    toggleForgotPassword(false);
                };
                const toggleResetModal = () => {
                    //it will close the reset modal with forgotPasswordModal.sended
                    setShowModal({ ...showModal, forgotPasswordModal: { show: false, sended: false } });
                };
                //useEffect's
                react_2.useEffect(() => {
                    if (firstRender) {
                        firstRender = false;
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        dispatch({ type: formReducer_1.ActionType.LOG_USER });
                    }
                }, []);
                react_2.useEffect(() => {
                    if (formState.loginAuth.errors) {
                        dispatch({ type: formReducer_1.ActionType.VALIDATE_LOGIN });
                    }
                }, [formState.loginAuth.errors]);
                react_2.useEffect(() => {
                    if (formState.loginAuth.data) {
                        navigate("/planner");
                    }
                }, [formState.loginAuth.data]);
                react_2.useEffect(() => {
                    if (formState.user.error) {
                        //check if the error is because the user is not confirmed
                        console.log(formState.user.error);
                        if (formState.user.error.includes("User is not confirmed")) {
                            console.log("user is not confirmed");
                            toggleConfirmEmail();
                        }
                    }
                }, [formState.user.error]);
                return (React.createElement(styles_2.MainContainer, null,
                    React.createElement(ContentContainer_1.ContentContainer, null,
                        React.createElement("div", { className: "wrapper" },
                            React.createElement(styles_1.FormContainer, { page: "login" },
                                React.createElement(Header_1.HeaderText, { page: "login", title: "Welcome,", description: "To continue browsing safely, log in to the network." }),
                                React.createElement(LoginForm_1.LoginForm, null),
                                React.createElement(FormButton_1.FormButton, { text: "Log in", page: "signup", redirectText: "Don't have an account?", isLoading: formState.loginAuth.loading, onClick: loginHandler }),
                                React.createElement("span", { style: {
                                        textAlign: "center",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "rgb(255, 255, 255)",
                                    } },
                                    " Forgot password? ",
                                    React.createElement("span", { style: {
                                            textDecoration: "underline",
                                            color: "#ff0000",
                                            cursor: "pointer",
                                            marginLeft: "5px",
                                        }, onClick: forgotLinkHandler }, "Click here")),
                                showModal.forgotPasswordModal.sended && React.createElement(ResetPasswordModal_1.ResetPasswordModal, { toggleModal: toggleResetModal }),
                                showModal.forgotPasswordModal.show && React.createElement(ForgotPasswordModal_1.ForgotPasswordModal, { toggleModal: toggleForgotPassword }),
                                showModal.confirmModal && React.createElement(ConfirmEmailModal_1.ConfirmEmailModal, { toggleModal: toggleConfirmEmail, email: formState.user.value })))),
                    React.createElement(BgSection_1.BgSection, null)));
            });
        }
    };
});
//# sourceMappingURL=LogIn.js.map
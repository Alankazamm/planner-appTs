System.register(["react", "react-router-dom", "../components/Forms/components/Button/FormButton", "../components/Forms/RegisterForm/RegisterForm", "../components/common/Header/Header", "../components/Forms/components/Containers/ContentContainer", "../components/Forms/components/Containers/styles", "../api/auth/register", "../contexts/usersContext", "../reducers/formReducer", "../components/common/Modals/components/SignErrorModal", "../components/common/Modals/components/ConfirmEmailModal", "../styles", "./../components/Aside"], function (exports_1, context_1) {
    "use strict";
    var React, react_1, react_router_dom_1, FormButton_1, RegisterForm_1, Header_1, ContentContainer_1, styles_1, register_1, usersContext_1, formReducer_1, SignErrorModal_1, ConfirmEmailModal_1, styles_2, Aside_1, SignUp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
                react_1 = React_1;
            },
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (FormButton_1_1) {
                FormButton_1 = FormButton_1_1;
            },
            function (RegisterForm_1_1) {
                RegisterForm_1 = RegisterForm_1_1;
            },
            function (Header_1_1) {
                Header_1 = Header_1_1;
            },
            function (ContentContainer_1_1) {
                ContentContainer_1 = ContentContainer_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            },
            function (formReducer_1_1) {
                formReducer_1 = formReducer_1_1;
            },
            function (SignErrorModal_1_1) {
                SignErrorModal_1 = SignErrorModal_1_1;
            },
            function (ConfirmEmailModal_1_1) {
                ConfirmEmailModal_1 = ConfirmEmailModal_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (Aside_1_1) {
                Aside_1 = Aside_1_1;
            }
        ],
        execute: function () {
            exports_1("SignUp", SignUp = () => {
                //hook's calls
                const { formState, dispatch } = react_1.useContext(usersContext_1.UserContext);
                const [confirmEmail, setConfirmEmail] = react_1.useState(false);
                const toggleConfirmEmail = () => setConfirmEmail(!confirmEmail);
                const navigate = react_router_dom_1.useNavigate();
                //avoid access to protected pages
                react_1.useEffect(() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }, []);
                const toggleModalFunction = () => {
                    dispatch({ type: formReducer_1.ActionType.TOGGLE_UNKNOWN_ERROR, payload: false });
                };
                const signUpHandler = () => {
                    const { firstName, lastName, birthDate, country, city, email, password, confirmPassword, } = formState;
                    //format date from YYYY-MM-DD to DD/MM/YYYY
                    const newDate = birthDate.value
                        .split("-")
                        .reverse()
                        .join("/");
                    //when clicked and treated the data, send it to sing-up api request
                    register_1.register({
                        firstName: firstName.value,
                        lastName: lastName.value,
                        birthDate: newDate,
                        country: country.value,
                        city: city.value,
                        email: email.value,
                        password: password.value,
                        confirmPassword: confirmPassword.value,
                    })(dispatch);
                    console.log(formState);
                };
                react_1.useEffect(() => {
                    dispatch({ type: formReducer_1.ActionType.VALIDATE_FORM });
                }, [formState.auth.errors]);
                react_1.useEffect(() => {
                    if (formState.auth.data) {
                        setConfirmEmail(true);
                    }
                }, [formState.auth.data]);
                return (React.createElement(styles_2.MainContainer, null,
                    React.createElement(ContentContainer_1.ContentContainer, null,
                        React.createElement("div", { id: "wrapper" },
                            React.createElement(styles_1.FormContainer, { page: "signup" },
                                React.createElement(Header_1.HeaderText, { page: "signup", title: "Welcome,", description: "Please, register to continue" }),
                                React.createElement(RegisterForm_1.RegisterForm, null),
                                React.createElement(FormButton_1.FormButton, { text: "Register Now", page: "login", redirectText: "Already have an account?", isLoading: formState.auth.loading, onClick: signUpHandler })))),
                    formState.unknownError && React.createElement(SignErrorModal_1.SignErrorModal, { toggleModal: toggleModalFunction }),
                    confirmEmail && React.createElement(ConfirmEmailModal_1.ConfirmEmailModal, { email: formState.email.value, toggleModal: toggleConfirmEmail }),
                    React.createElement(Aside_1.BgSection, null)));
            });
        }
    };
});
//# sourceMappingURL=SignUp.js.map
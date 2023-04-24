// description: this is a form component that will be used to log in to dashboard
System.register(["react", "../components/Input", "../components/Icon", "../../../styles", "../styles", "../../../contexts/usersContext"], function (exports_1, context_1) {
    "use strict";
    var react_1, Input_1, Icon_1, styles_1, styles_2, usersContext_1, React, LoginForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (Input_1_1) {
                Input_1 = Input_1_1;
            },
            function (Icon_1_1) {
                Icon_1 = Icon_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            }
        ],
        execute: function () {
            exports_1("LoginForm", LoginForm = () => {
                //hooks
                const [errorUser, setErrorUser] = react_1.useState(false);
                const [errorPassword, setErrorPassword] = react_1.useState(false);
                const [iconIsInside, setIconIsInside] = react_1.useState({
                    user: false,
                    password: false,
                });
                const { formState, dispatch } = react_1.useContext(usersContext_1.UserContext);
                //useEffects
                react_1.useEffect(() => {
                    setErrorUser(formState.user.hasError);
                }, [formState.user.hasError]);
                react_1.useEffect(() => {
                    setErrorPassword(formState.loginPassword.hasError);
                }, [formState.loginPassword.hasError]);
                //manages the icons inside or not, and remove the error state from the formstate(to remove error markups)
                const inputHandler = (e) => {
                    dispatch({
                        type: "UPDATE_FORM",
                        payload: { name: e.target.name, value: e.target.value },
                    });
                    e.target.value !== ""
                        ? e.target.name === "user"
                            ? setIconIsInside({ ...iconIsInside, user: true })
                            : setIconIsInside({ ...iconIsInside, password: true })
                        : e.target.name === "user"
                            ? setIconIsInside({ ...iconIsInside, user: false })
                            : setIconIsInside({ ...iconIsInside, password: false });
                };
                return (React.createElement(styles_2.Form, { page: "login", hasError: formState.user.hasError || formState.loginPassword.hasError },
                    React.createElement("h2", null, "Login"),
                    React.createElement(Input_1.LoginInputWrapper, null,
                        React.createElement("div", null,
                            React.createElement(Input_1.Input, { type: "text", name: "user", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, user: true }), onBlur: (e) => e.target.value === ""
                                    ? setIconIsInside({ ...iconIsInside, user: false })
                                    : null, value: formState.user.value, placeholder: "user name", hasError: formState.user.hasError }),
                            errorUser && (React.createElement(styles_1.TooltipError, { page: "login" }, formState.user.error))),
                        React.createElement(Icon_1.Icon, { icon: "userIcon", hasError: errorUser, iconIsInside: iconIsInside.user })),
                    React.createElement(Input_1.LoginInputWrapper, null,
                        React.createElement("div", null,
                            React.createElement(Input_1.Input, { type: "password", name: "loginPassword", onChange: inputHandler, onFocus: () => setIconIsInside({ ...iconIsInside, password: true }), onBlur: (e) => e.target.value === ""
                                    ? setIconIsInside({ ...iconIsInside, password: false })
                                    : null, value: formState.loginPassword.value, placeholder: "password", hasError: formState.loginPassword.hasError }),
                            errorPassword && (React.createElement(styles_1.TooltipError, { page: "login" }, formState.loginPassword.error))),
                        React.createElement(Icon_1.Icon, { icon: "passwordIcon", hasError: errorPassword, iconIsInside: iconIsInside.password })),
                    React.createElement("div", { className: "errorDiv" },
                        React.createElement("span", { className: "error" }, "Wow, invalid username or password. Please, try again!"))));
            });
        }
    };
});
//# sourceMappingURL=LoginForm.js.map
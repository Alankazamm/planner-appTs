System.register(["react", "react-router-dom", "../reducers/formReducer"], function (exports_1, context_1) {
    "use strict";
    var React, react_1, react_router_dom_1, formReducer_1, initialState, UserContext, UserContextProvider;
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
            function (formReducer_1_1) {
                formReducer_1 = formReducer_1_1;
            }
        ],
        execute: function () {
            //initial states
            initialState = {
                firstName: { value: "", hasError: false, error: "" },
                lastName: { value: "", hasError: false, error: "" },
                birthDate: { value: "", hasError: false, error: "" },
                country: { value: "", hasError: false, error: "" },
                city: { value: "", hasError: false, error: "" },
                email: { value: "", hasError: false, error: "" },
                password: { value: "", hasError: false, error: "" },
                confirmPassword: { value: "", hasError: false, error: "" },
                user: { value: "", hasError: false, error: "" },
                loginPassword: { value: "", hasError: false, error: "" },
                auth: {
                    loading: false,
                    errors: [],
                    data: null,
                },
                loginAuth: {
                    loading: false,
                    errors: [],
                    data: null,
                },
                isFormValid: false,
                isLoginValid: false,
                unknownError: false,
            };
            //context
            exports_1("UserContext", UserContext = react_1.createContext({}));
            exports_1("UserContextProvider", UserContextProvider = ({ children }) => {
                //hooks
                const [displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal] = react_1.useState(false);
                const [formState, dispatch] = react_1.useReducer(formReducer_1.formsReducer, initialState);
                const navigate = react_router_dom_1.useNavigate();
                //functions
                //when the user signs out, the form state is reset and the user is redirected to the login page
                //the user is also removed from the local storage
                const signout = () => {
                    localStorage.removeItem('token');
                    localStorage.removeItem("user");
                    localStorage.removeItem("sessionToken");
                    localStorage.removeItem("sessionRefreshToken");
                    localStorage.removeItem("sessionAccessToken");
                    localStorage.removeItem("sessionExpires");
                    dispatch({ type: formReducer_1.ActionType.RESET_FORMSTATE });
                    navigate('/login');
                };
                return (React.createElement(UserContext.Provider, { value: { formState, dispatch, signout, displayRenewAccessTokenModal,
                        setDisplayRenewAccessTokenModal } }, children));
            });
        }
    };
});
//# sourceMappingURL=usersContext.js.map
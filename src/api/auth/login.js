System.register(["aws-amplify", "../../reducers/formReducer", "../utils/errorsHandler", "../../aws-exports.js"], function (exports_1, context_1) {
    "use strict";
    var aws_amplify_1, formReducer_1, aws_amplify_2, errorsHandler_1, aws_exports_js_1, login;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
                aws_amplify_2 = aws_amplify_1_1;
            },
            function (formReducer_1_1) {
                formReducer_1 = formReducer_1_1;
            },
            function (errorsHandler_1_1) {
                errorsHandler_1 = errorsHandler_1_1;
            },
            function (aws_exports_js_1_1) {
                aws_exports_js_1 = aws_exports_js_1_1;
            }
        ],
        execute: function () {
            aws_amplify_1.Auth.configure(aws_exports_js_1.default);
            aws_amplify_2.Amplify.configure(aws_exports_js_1.default);
            exports_1("login", login = ({ email, password, }) => (dispatch) => {
                dispatch({ type: formReducer_1.ActionType.LOGIN_LOADING });
                try {
                    aws_amplify_1.Auth.signIn(email, password).then((user) => {
                        dispatch({ type: formReducer_1.ActionType.LOGIN_SUCCESS, payload: user });
                        localStorage.setItem('token', user.signInUserSession.accessToken.jwtToken);
                        localStorage.setItem('user', JSON.stringify({
                            email: user.attributes.email,
                            sub: user.attributes.sub,
                            name: user.attributes['custom:firtName'],
                            country: user.attributes['custom:country'],
                            city: user.attributes['custom:city'],
                        }));
                        try {
                            aws_amplify_1.Auth.currentSession().then((session) => {
                                localStorage.setItem("sessionToken", session.getIdToken().getJwtToken());
                                localStorage.setItem("sessionRefreshToken", session.getRefreshToken().getToken());
                                localStorage.setItem("sessionAccessToken", session.getAccessToken().getJwtToken());
                                localStorage.setItem("sessionExpires", session.getIdToken().getExpiration().toString());
                            });
                        }
                        catch (error) {
                            console.log(error); //criar modal aqui para usuario renovar o token
                        }
                        console.log(localStorage.getItem("sessionToken"));
                    }).catch((err) => {
                        console.log(err);
                        let arrErrors = [];
                        const error = errorsHandler_1.errorsHandler(err);
                        arrErrors.push(error);
                        dispatch({ type: formReducer_1.ActionType.LOGIN_FAIL, payload: arrErrors });
                    });
                }
                catch (err) {
                    let arrErrors = [];
                    const error = errorsHandler_1.errorsHandler(err);
                    arrErrors.push(error);
                    dispatch({ type: formReducer_1.ActionType.LOGIN_FAIL, payload: arrErrors });
                }
            });
        }
    };
});
//# sourceMappingURL=login.js.map
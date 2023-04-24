"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
//description: this function is used to login the user
const aws_amplify_1 = require("aws-amplify");
const formReducer_1 = require("../../reducers/formReducer");
const aws_amplify_2 = require("aws-amplify");
const errorsHandler_1 = require("../utils/errorsHandler");
const aws_exports_js_1 = __importDefault(require("../../aws-exports.js"));
aws_amplify_1.Auth.configure(aws_exports_js_1.default);
aws_amplify_2.Amplify.configure(aws_exports_js_1.default);
const login = ({ email, password, }) => (dispatch) => {
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
            const error = (0, errorsHandler_1.errorsHandler)(err);
            arrErrors.push(error);
            dispatch({ type: formReducer_1.ActionType.LOGIN_FAIL, payload: arrErrors });
        });
    }
    catch (err) {
        let arrErrors = [];
        const error = (0, errorsHandler_1.errorsHandler)(err);
        arrErrors.push(error);
        dispatch({ type: formReducer_1.ActionType.LOGIN_FAIL, payload: arrErrors });
    }
};
exports.login = login;
//# sourceMappingURL=login.js.map
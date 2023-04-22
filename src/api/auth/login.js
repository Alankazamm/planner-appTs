//description: this function is used to login the user
import { Auth } from 'aws-amplify';
import { ActionType } from "../../reducers/formReducer";
import { Amplify } from "aws-amplify";
import { errorsHandler } from '../utils/errorsHandler';
import awsmobile from '../../aws-exports.js';
Auth.configure(awsmobile);
Amplify.configure(awsmobile);
export const login = ({ email, password, }) => (dispatch) => {
    dispatch({ type: ActionType.LOGIN_LOADING });
    try {
        Auth.signIn(email, password).then((user) => {
            dispatch({ type: ActionType.LOGIN_SUCCESS, payload: user });
            localStorage.setItem('token', user.signInUserSession.accessToken.jwtToken);
            localStorage.setItem('user', JSON.stringify({
                email: user.attributes.email,
                sub: user.attributes.sub,
                name: user.attributes['custom:firtName'],
                country: user.attributes['custom:country'],
                city: user.attributes['custom:city'],
            }));
            try {
                Auth.currentSession().then((session) => {
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
            const error = errorsHandler(err);
            arrErrors.push(error);
            dispatch({ type: ActionType.LOGIN_FAIL, payload: arrErrors });
        });
    }
    catch (err) {
        let arrErrors = [];
        const error = errorsHandler(err);
        arrErrors.push(error);
        dispatch({ type: ActionType.LOGIN_FAIL, payload: arrErrors });
    }
};

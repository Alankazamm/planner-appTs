//description: this file is used to login the user
import { Auth } from 'aws-amplify';
import { ActionType } from "../../reducers/formReducer";
import { Amplify, API } from "aws-amplify";
import awsmobile from "../../aws-exports";
Amplify.configure(awsmobile);
import { errorsHandler } from './../../helpers/errorsHandler';
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
            console.log(JSON.parse(localStorage.getItem('user')));
            try {
                //get all events by user sub
                API.get('plannerprojectapi', `/events/filter/${JSON.parse(localStorage.getItem('user')).sub}`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
            }
            catch (err) {
                console.log(err);
            }
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

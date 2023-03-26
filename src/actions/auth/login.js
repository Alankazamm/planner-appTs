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
            console.log(user);
            dispatch({ type: ActionType.LOGIN_SUCCESS, payload: user });
            //set session
            const session = user.signInUserSession;
            console.log(session, "session");
            localStorage.setItem('token', user.signInUserSession.accessToken.jwtToken);
            localStorage.setItem('user', JSON.stringify(user.attributes));
            //get user sub
            const userSub = user.signInUserSession.accessToken.payload.sub;
            console.log(userSub);
            console.log(user.signInUserSession.accessToken.jwtToken);
            try {
                //get all events by user sub
                API.get('plannerprojectapi', `/events/filter/${userSub}`, {
                    headers: {
                        Authorization: user.signInUserSession.accessToken.jwtToken
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

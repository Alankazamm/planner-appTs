//description: this file is used to login the user
import {axiosInstance} from "../../helpers/axios";
import { ActionType } from "../../reducers/formReducer";
import { updateToken } from './../../helpers/axios';
let response: any;
interface loginData {
    email: string;
    password: string;
}
export const login = ({
    email,
    password,
}:loginData) => (dispatch:any) =>{

    dispatch({ type: ActionType.LOGIN_LOADING });

    axiosInstance.post('/users/sign-in', {

        email,
        password,
        
    }).then((res) => {
        localStorage.setItem('token', res.data.token);
        updateToken(res.data.token);
        dispatch({ type: ActionType.LOGIN_SUCCESS, payload: res.data });
     

    }).catch((err) => {
        let arrErrors = [];
        if (err.response.data.hasOwnProperty('errors')){
            for (let key in err.response.data.errors) {
                arrErrors.push(err.response.data.errors[key]);
            }

        } else {
            arrErrors.push(err.response.data);

        }
        dispatch({ type: ActionType.LOGIN_FAIL, payload: arrErrors });
    })
    return response
   

}
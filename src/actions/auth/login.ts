//description: this file is used to login the user
import axiosInstance from "../../helpers/axios";
import { ActionType } from "../../reducers/formReducer";
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
        console.log(res)
        dispatch({ type: ActionType.LOGIN_SUCCESS, payload: res.data });
        sessionStorage.setItem('token', res.data.token);
    }).catch((err) => {
        let arrErrors = [];
        console.log(err.response.data)
        if (err.response.data.hasOwnProperty('errors')){
            for (let key in err.response.data.errors) {
                arrErrors.push(err.response.data.errors[key]);
            }
            console.log(arrErrors);
        } else {
            arrErrors.push(err.response.data);
            console.log(arrErrors);
        }
        dispatch({ type: ActionType.LOGIN_FAIL, payload: arrErrors });
    })
    return response
   

}
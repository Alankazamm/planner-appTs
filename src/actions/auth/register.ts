//description: this file is used to register a new user, it uses the axios instance to send the data to the server
// and then it dispatches the data to the reducer

import axiosInstance from "../../helpers/axios";
import { ActionType } from "../../reducers/formReducer";

let response: any;

//types
interface registerData {
    firstName: string;
    lastName: string;
    birthDate: string;
    country: string;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const register = ({
    firstName,
    lastName,
    birthDate,
    country,
    city,
    email,
    password,
    confirmPassword,
}:registerData) => (dispatch:any) =>{

    dispatch({ type: ActionType.REGISTER_LOADING });

    axiosInstance.post('/users/sign-up', {
        firstName,
        lastName,
        birthDate,
        country,
        city,
        email,
        password,
        confirmPassword,
    }).then((res) => {
        console.log(res)
        dispatch({ type: ActionType.REGISTER_SUCCESS, payload: res.data });
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
        dispatch({ type: ActionType.REGISTER_FAIL, payload: arrErrors });
    })
    return response
}